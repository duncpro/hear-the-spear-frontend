import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-re-entry-dialog',
  templateUrl: './email-re-entry-dialog.component.html',
  styleUrls: ['./email-re-entry-dialog.component.css']
})
export class EmailReEntryDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EmailReEntryDialogComponent>,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      emailAddress: ['', [
        Validators.email,
        Validators.required,
      ]]
    });
  }
  onSubmit(): void {
    if (this.form.valid) {
      const emailAddress = this.form.get('emailAddress').value;
      this.dialogRef.close(emailAddress);
    }
  }
}
