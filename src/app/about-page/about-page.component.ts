import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputEmailAddressDialogComponent } from '../input-email-address-dialog/input-email-address-dialog.component';
import {Subscription} from 'rxjs';
import {ScreenSizeService} from '../screen-size.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  /**
   * Hold on to the subscription to the ScreenSizeService. It must be closed later to
   * prevent memory leaks.
   */
  screenSizeSubscription: Subscription;
  isLargeScreen: boolean;
  constructor(
    private screenSizeService: ScreenSizeService,
    private dialog: MatDialog
  ) {
    this.isLargeScreen = !this.screenSizeService.isScreenSmall();
    this.screenSizeSubscription = this.screenSizeService.shouldUseMobileUI
      .subscribe(val => this.isLargeScreen = !val);
  }

  ngOnInit(): void {
  }
  openSignUpDialog(): void {
    this.dialog.open(InputEmailAddressDialogComponent);
  }
}
