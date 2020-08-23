import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableTrackImageComponent } from './playable-track-image.component';

describe('NowPlayingSpinnerComponent', () => {
  let component: PlayableTrackImageComponent;
  let fixture: ComponentFixture<PlayableTrackImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayableTrackImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayableTrackImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
