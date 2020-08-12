import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Track } from '../track';
import { Router } from '@angular/router';
import { ScreenSizeService } from '../screen-size.service';
import { NowPlayingService } from '../now-playing.service';

@Component({
  selector: 'app-now-playing-page',
  templateUrl: './now-playing-page.component.html',
  styleUrls: ['./now-playing-page.component.css']
})
export class NowPlayingPageComponent implements OnInit, OnDestroy {
  public tracks: Track[] = [];
  private unsubscribeFromDatabase: () => void;
  private screenSizeSubscription: Subscription;
  public useSuperWideList: boolean;
  public donePopulatingList = false;
  constructor(
    private nowPlayingService: NowPlayingService,
    private router: Router,
    private screenSizeService: ScreenSizeService,
  ) { }
  ngOnInit(): void {
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI.subscribe(
      (usingMobileUI) => this.useSuperWideList = !usingMobileUI
    );
    this.unsubscribeFromDatabase = this.nowPlayingService.currentlyPlayingSongs
      .onSnapshot(snapshot => {
      // Clear out the old data. We've got newer data now.
      this.tracks = [];
      snapshot.forEach(trackDoc => {
        const track = trackDoc.data() as Track;
        // The backend will return tracks that are no longer being listened to.
        // Filter those out here.
        // This is not ideal, but it's a limitation of the implementation i've chosen to use.
        if (track.count > 0) {
          this.tracks.push(track);
        }
      });
      this.donePopulatingList = true;
    });
  }
  async showAboutPage(): Promise<void> {
    await this.router.navigateByUrl('/about');
  }
  ngOnDestroy(): void {
    this.unsubscribeFromDatabase();
  }

}
