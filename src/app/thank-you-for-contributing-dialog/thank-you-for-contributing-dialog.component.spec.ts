import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouForContributingDialogComponent } from './thank-you-for-contributing-dialog.component';

describe('ThankYouForContributingDialogComponent', () => {
  let component: ThankYouForContributingDialogComponent;
  let fixture: ComponentFixture<ThankYouForContributingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouForContributingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouForContributingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
