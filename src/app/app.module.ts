import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { TopSongsPageComponent } from './top-songs-page/top-songs-page.component';
import { TopArtistsPageComponent } from './top-artists-page/top-artists-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SongListItemComponent } from './song-list-item/song-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ParticipateCardComponent } from './participate-card/participate-card.component';
import { InputEmailAddressDialogComponent } from './input-email-address-dialog/input-email-address-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailSentSuccessfullyDialogComponent } from './email-sent-successfully-dialog/email-sent-successfully-dialog.component';
import { ArtistListItemComponent } from './artist-list-item/artist-list-item.component';
import { ShareCardComponent } from './share-card/share-card.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ThankYouForContributingDialogComponent } from './thank-you-for-contributing-dialog/thank-you-for-contributing-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmailReEntryDialogComponent } from './email-re-entry-dialog/email-re-entry-dialog.component';
import { NowPlayingPageComponent } from './now-playing-page/now-playing-page.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LottiePlayer } from 'ngx-lottie/src/symbols';
import { BookmarkCardComponent } from './bookmark-card/bookmark-card.component';
import { BrowseArtistsCardComponent } from './browse-artists-card/browse-artists-card.component';
import { ListFooterComponent } from './list-footer/list-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopSongsPageComponent,
    TopArtistsPageComponent,
    AboutPageComponent,
    SongListItemComponent,
    ParticipateCardComponent,
    InputEmailAddressDialogComponent,
    EmailSentSuccessfullyDialogComponent,
    ArtistListItemComponent,
    ShareCardComponent,
    ThankYouForContributingDialogComponent,
    EmailReEntryDialogComponent,
    NowPlayingPageComponent,
    BookmarkCardComponent,
    BrowseArtistsCardComponent,
    ListFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatProgressSpinnerModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory(): LottiePlayer {
  return player;
}
