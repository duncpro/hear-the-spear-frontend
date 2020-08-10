import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateCardComponent } from './participate-card.component';

describe('ParticipateCardComponent', () => {
  let component: ParticipateCardComponent;
  let fixture: ComponentFixture<ParticipateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
