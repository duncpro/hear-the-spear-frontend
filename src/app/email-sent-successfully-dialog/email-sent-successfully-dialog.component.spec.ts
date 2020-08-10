import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSentSuccessfullyDialogComponent } from './email-sent-successfully-dialog.component';

describe('EmailSentSuccessfullyDialogComponent', () => {
  let component: EmailSentSuccessfullyDialogComponent;
  let fixture: ComponentFixture<EmailSentSuccessfullyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSentSuccessfullyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSentSuccessfullyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
