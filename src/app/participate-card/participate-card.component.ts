import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputEmailAddressDialogComponent } from '../input-email-address-dialog/input-email-address-dialog.component';
import { EmailSentSuccessfullyDialogComponent } from '../email-sent-successfully-dialog/email-sent-successfully-dialog.component';

@Component({
  selector: 'app-participate-card',
  templateUrl: './participate-card.component.html',
  styleUrls: ['./participate-card.component.css']
})
export class ParticipateCardComponent {
  constructor(public dialog: MatDialog) {}
  promptForEmailAddress(): void {
    this.dialog.open(InputEmailAddressDialogComponent);
  }

}
