import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenSizeService } from '../screen-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-footer',
  templateUrl: './list-footer.component.html',
  styleUrls: ['./list-footer.component.css']
})
export class ListFooterComponent implements OnInit, OnDestroy {
  private screenSizeSubscription: Subscription;
  public isLargeScreen: boolean;
  constructor(
    public screenSizeService: ScreenSizeService
  ) {

  }

  ngOnInit(): void {
    this.isLargeScreen = !this.screenSizeService.isScreenSmall();
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI
      .subscribe((val) => {
        this.isLargeScreen = !val;
    });
  }

  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }

}
