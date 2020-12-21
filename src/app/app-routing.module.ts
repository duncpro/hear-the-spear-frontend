import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopArtistsPageComponent } from './top-artists-page/top-artists-page.component';
import { TopSongsPageComponent } from './top-songs-page/top-songs-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NowPlayingPageComponent } from './now-playing-page/now-playing-page.component';
import {PrivacyComponent} from './privacy/privacy.component';

const routes: Routes = [
  {
    path: 'top-songs',
    component: TopSongsPageComponent
  },
  {
    path: 'top-artists',
    component: TopArtistsPageComponent
  },
  {
    path: 'now-playing',
    component: NowPlayingPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  // Redirect all unknown paths to the top-artist screen.
  // This is the most impressive screen of the site in my opinion.
  {
    path: '**',
    redirectTo: 'top-songs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
