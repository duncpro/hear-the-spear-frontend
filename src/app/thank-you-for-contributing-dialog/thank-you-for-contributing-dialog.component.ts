import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-you-for-contributing-dialog',
  templateUrl: './thank-you-for-contributing-dialog.component.html',
  styleUrls: ['./thank-you-for-contributing-dialog.component.css']
})
export class ThankYouForContributingDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ThankYouForContributingDialogComponent>
  ) { }

  ngOnInit(): void {
  }
  onOk(): void {
    this.dialogRef.close();
  }

}
