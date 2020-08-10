import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmailAddressDialogComponent } from './input-email-address-dialog.component';

describe('InputEmailAddressDialogComponent', () => {
  let component: InputEmailAddressDialogComponent;
  let fixture: ComponentFixture<InputEmailAddressDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEmailAddressDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmailAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
