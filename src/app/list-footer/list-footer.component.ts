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
  public constrainWidth: boolean;
  constructor(
    public screenSizeService: ScreenSizeService
  ) {
    this.constrainWidth = !screenSizeService.isScreenSmall();
  }

  ngOnInit(): void {
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI
      .subscribe((val) => {
        this.constrainWidth = !val;
    });
  }

  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }

}
