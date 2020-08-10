import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  maxMobileScreenWidth = 680;
  maxMobileScreenHeight = 500;
  shouldUseMobileUI: Observable<boolean>;
  constructor() {
    this.shouldUseMobileUI = fromEvent(window, 'resize').pipe(
      map(() => this.isScreenSmall()),
      startWith(this.isScreenSmall())
    );
  }
  isScreenSmall(): boolean {
    console.log(this.maxMobileScreenWidth);
    return window.innerWidth < this.maxMobileScreenWidth;
  }
}
