import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { EmailSentSuccessfullyDialogComponent } from '../email-sent-successfully-dialog/email-sent-successfully-dialog.component';

@Component({
  selector: 'app-input-email-address-dialog',
  templateUrl: './input-email-address-dialog.component.html',
  styleUrls: ['./input-email-address-dialog.component.css']
})
export class InputEmailAddressDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<InputEmailAddressDialogComponent>,
    private formBuilder: FormBuilder,
    private fireAuth: AngularFireAuth,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    // Create a form that will validate email addresses.
    this.form = this.formBuilder.group({
      emailAddress: ['', [
        Validators.email,
        Validators.required,
        emailDomainValidator(['my.fsu.edu', 'fsu.edu'])
      ]]
    });
  }
  async sendEmail(): Promise<void> {
    // If there is not a valid email address in the input field,
    // skip sending the email and return immediately.
    if (!this.form.valid) {
      return;
    }
    const emailAddress = this.form.get('emailAddress').value;
    try {
      // Send the verification email to the user.
      await this.fireAuth.sendSignInLinkToEmail(emailAddress, {
        handleCodeInApp: true,
        url: window.location.href
      });
      this.saveEmailAddress(emailAddress);
      this.dialogRef.close();
      this.showSuccessDialog();
    } catch (error) {
      console.error(error);
      this.dialogRef.close();
    }
  }
  saveEmailAddress(emailAddress: string): void {
    window.localStorage.setItem('hearTheSpearEmailForSignIn', emailAddress);
  }
  showSuccessDialog(): void {
    const dialogRef = this.dialog.open(EmailSentSuccessfullyDialogComponent);
  }
}

function emailDomainValidator(validDomains: string[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const domain = control.value.split('@')[1];
    const forbidden = !validDomains.includes(domain);
    return forbidden ? { forbiddenEmailAddress: { value: control.value } } : null;
  };
}
