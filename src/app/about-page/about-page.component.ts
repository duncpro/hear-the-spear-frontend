import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputEmailAddressDialogComponent } from '../input-email-address-dialog/input-email-address-dialog.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openSignUpDialog(): void {
    this.dialog.open(InputEmailAddressDialogComponent);
  }

}
