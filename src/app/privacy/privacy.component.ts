import { Component, OnInit } from '@angular/core';
import {ScreenSizeService} from '../screen-size.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  /**
   * Hold on to the subscription to the ScreenSizeService. It must be closed later to
   * prevent memory leaks.
   */
  screenSizeSubscription: Subscription;
  isLargeScreen: boolean;
  constructor(
    private screenSizeService: ScreenSizeService,
  ) {
    this.isLargeScreen = !this.screenSizeService.isScreenSmall();
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI
      .subscribe(val => this.isLargeScreen = !val);
  }

  ngOnInit(): void {
  }

}
