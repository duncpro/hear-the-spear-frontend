import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReEntryDialogComponent } from './email-re-entry-dialog.component';

describe('EmailReEntryDialogComponent', () => {
  let component: EmailReEntryDialogComponent;
  let fixture: ComponentFixture<EmailReEntryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailReEntryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
