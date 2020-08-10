import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-email-sent-successfully-dialog',
  templateUrl: './email-sent-successfully-dialog.component.html',
  styleUrls: ['./email-sent-successfully-dialog.component.css']
})
export class EmailSentSuccessfullyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EmailSentSuccessfullyDialogComponent>,
  ) { }

  ngOnInit(): void {
  }
  onOk(): void {
    this.dialogRef.close();
  }

}
