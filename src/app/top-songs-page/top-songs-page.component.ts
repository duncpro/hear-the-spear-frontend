import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenSizeService } from '../screen-size.service';
import { Subscription } from 'rxjs';
import { Track } from '../track';
import { TopChartsService } from '../top-charts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-songs-page',
  templateUrl: './top-songs-page.component.html',
  styleUrls: ['./top-songs-page.component.css']
})
export class TopSongsPageComponent implements OnInit, OnDestroy {
  useSuperWideList: boolean;
  screenSizeSubscription: Subscription;
  topTracks: Track[] = [];
  donePopulatingList = false;
  constructor(
    private screenSizeService: ScreenSizeService,
    public topCharts: TopChartsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI.subscribe(
      (usingMobileUI) => this.useSuperWideList = !usingMobileUI
    );
    this.useSuperWideList = !this.screenSizeService.isScreenSmall();
    this.populateList();
  }
  async populateList(): Promise<void> {
    this.topTracks = await this.topCharts.topTracks;
    this.donePopulatingList = true;
  }
  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }
  async showAboutPage(): Promise<void> {
    await this.router.navigateByUrl('/about');
  }
}
