import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { ScreenSizeService } from './screen-size.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { environment } from '../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ThankYouForContributingDialogComponent } from './thank-you-for-contributing-dialog/thank-you-for-contributing-dialog.component';
import { MatSpinner } from '@angular/material/progress-spinner';
import { EmailReEntryDialogComponent } from './email-re-entry-dialog/email-re-entry-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  /**
   * A subscription to the Angular Router.
   * Should be closed after the component is destroyed.
   */
  routerSubscription: Subscription;
  /**
   * The current route that the app is showing. This not the fully qualified route path,
   * but a simplified version of it. It does not begin with a '/', also, are children
   * are truncated off. For example, the actual path might be '/top-songs/share', but this
   * variable will only hold 'top-songs'.
   */
  currentRoute = '';
  /**
   * Whether or not the screen size is constrained/limited. If this value is true, a mobile
   * friendly UI should be shown instead of the full desktop version.
   */
  shouldUseCollapsibleSidenav: boolean;
  /**
   * Hold on to the subscription to the ScreenSizeService. It must be closed later to
   * prevent memory leaks.
   */
  screenSizeSubscription: Subscription;
  /**
   * The primary navigation screen for Hear The Spear.
   */
  queryParamsSubscription: Subscription;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(
    private router: Router,
    private screenSizeService: ScreenSizeService,
    private fireAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.routerSubscription = router.events.subscribe(this.onRouterEvent.bind(this));
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI
      .subscribe(val => this.shouldUseCollapsibleSidenav = val);
  }
  onRouterEvent(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      this.currentRoute = event.urlAfterRedirects.split('/')[1];
      console.log(this.currentRoute);
      if (this.shouldUseCollapsibleSidenav) {
        // Collapse the sidenav after the user picks a page.
        // This eliminates the need for a secondary click to close the sidenav.
        // noinspection JSIgnoredPromiseFromCall
        this.sidenav.close();
      }
    }
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.screenSizeSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
  async ngOnInit(): Promise<void> {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      if (params.showContributionSuccessMessage) {
        // Thank the user for contributing to our data set.
        this.dialog.open(ThankYouForContributingDialogComponent);
        // Remove the query param that triggered the dialog.
        this.router.navigate([], {
          queryParamsHandling: 'merge',
          queryParams: {
            showContributionSuccessMessage: null
          }
        });
      }
    });
    await this.finishFirebaseSignIn();
  }
  async finishFirebaseSignIn(): Promise<void> {
    if (!await this.fireAuth.isSignInWithEmailLink(window.location.href)) {
      // There is no sign-in process to finish up.
      // Safely exit the routine.
      return;
    }
    // The email address that we just sent a verification message to.
    let email = window.localStorage.getItem('hearTheSpearEmailForSignIn');
    // If we did not just send a verification email from this device, the user must have switched devices.
    // In this case we need to prompt for the email address again because Firebase requires it for sign-in.
    if (!email) {
      // TODO: Turn this into a pretty Angular Material dialog.
      email = await this.dialog.open(EmailReEntryDialogComponent).afterClosed().toPromise();
    }
    try {
      const { user } = await this.fireAuth.signInWithEmailLink(email, window.location.href);
      // The user has been successfully signed in.
      // Clear the email address that we saved earlier.
      window.localStorage.removeItem('hearTheSpearEmailForSignIn');
      await this.startSpotifyAuthProcedure(user.uid);
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Sends the user to the Spotify 3rd party application authorization service.
   * They will be prompted to grant permission for us to use their data.
   * The result of this prompt will be sent to our backend.
   * @param uid the FirebaseAuth UID of the user.
   */
  async startSpotifyAuthProcedure(uid: string): Promise<void> {
    // The OAuth scope that our app needs.
    // As stated in the privacy policy, we only request access to your most frequently listened music.
    const scope = 'user-top-read';
    // The URI that Spotify will ping after the user has completed the 3rd-party app authorization procedure.
    const redirectUri = encodeURI(environment.spotifyCredentialsReceiverUrl);
    // Send the user's web browser to Spotify's auth portal.
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${environment.spotify.clientId}&response_type=code&scope=${scope}&redirect_uri=${redirectUri}&state=${uid}`;
  }
}
