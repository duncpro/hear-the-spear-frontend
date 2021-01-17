import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, fromEvent, merge, Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService implements OnDestroy {
  maxMobileScreenWidth = 680;
  maxMobileScreenHeight = 500;
  shouldUseMobileUI = new BehaviorSubject(this.isScreenSmall());
  windowHeight = new BehaviorSubject(window.innerHeight);
  resizeSubscription: Subscription;
  constructor() {
    this.resizeSubscription = merge(
      fromEvent(window, 'resize'),
      fromEvent(window, 'orientationchange')
    ).subscribe(() => {
      this.shouldUseMobileUI.next(this.isScreenSmall());
      this.windowHeight.next(window.innerHeight);
    });
  }
  isScreenSmall(): boolean {
    return window.innerWidth < this.maxMobileScreenWidth;
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }
}
