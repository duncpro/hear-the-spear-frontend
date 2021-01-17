import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixesPageComponent } from './mixes-page.component';

describe('MixesPageComponent', () => {
  let component: MixesPageComponent;
  let fixture: ComponentFixture<MixesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
