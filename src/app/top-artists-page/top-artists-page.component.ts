import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Artist } from '../artist';
import { ScreenSizeService } from '../screen-size.service';
import { TopChartsService } from '../top-charts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-artists-page',
  templateUrl: './top-artists-page.component.html',
  styleUrls: ['./top-artists-page.component.css']
})
export class TopArtistsPageComponent implements OnInit, OnDestroy {
  topArtists: Artist[];
  useSuperWideList: boolean;
  screenSizeSubscription: Subscription;
  donePopulatingList = false;
  constructor(
    private screenSizeService: ScreenSizeService,
    private topCharts: TopChartsService,
    private changeDetectorsRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI.subscribe(
      (usingMobileUI) => this.useSuperWideList = !usingMobileUI
    );
    this.useSuperWideList = !this.screenSizeService.isScreenSmall();
    this.populateList();
  }
  async populateList(): Promise<void> {
    this.topArtists = await this.topCharts.topArtists;
    this.donePopulatingList = true;
  }
  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }
  async showAboutPage(): Promise<void> {
    await this.router.navigateByUrl('/about');
  }
}
