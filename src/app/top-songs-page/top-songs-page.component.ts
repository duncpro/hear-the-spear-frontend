import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ScreenSizeService } from '../screen-size.service';
import { Subscription } from 'rxjs';
import { Track } from '../track';
import { TopChartsService } from '../top-charts.service';
import { Router } from '@angular/router';

type SpotifyTimeRange = 'short_term' | 'medium_term' | 'long_term';

@Component({
  selector: 'app-top-songs-page',
  templateUrl: './top-songs-page.component.html',
  styleUrls: ['./top-songs-page.component.css']
})
export class TopSongsPageComponent implements OnInit, OnDestroy {
  useSuperWideList: boolean;
  screenSizeSubscription: Subscription;
  topTracks: Track[] = [];
  listHeight: number;
  spotifyTimeRange: SpotifyTimeRange;
  isLoaded: boolean;
  constructor(
    public screenSizeService: ScreenSizeService,
    public topCharts: TopChartsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.screenSizeSubscription = this.screenSizeService.windowHeight.subscribe((height) => {
      this.useSuperWideList = !this.screenSizeService.isScreenSmall();
      this.listHeight = height - 50;
    });
    this.setTimeRange('short_term');
  }
  async setTimeRange(timeRange: SpotifyTimeRange): Promise<void> {
    this.isLoaded = false;
    this.spotifyTimeRange = timeRange;
    this.topTracks = await this.topCharts.getTopTracks(timeRange);
    this.isLoaded = true;
  }
  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }
  async showAboutPage(): Promise<void> {
    await this.router.navigateByUrl('/about');
  }
}
