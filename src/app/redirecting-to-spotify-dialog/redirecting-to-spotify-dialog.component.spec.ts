import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectingToSpotifyDialogComponent } from './redirecting-to-spotify-dialog.component';

describe('RedirectingToSpotifyDialogComponent', () => {
  let component: RedirectingToSpotifyDialogComponent;
  let fixture: ComponentFixture<RedirectingToSpotifyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectingToSpotifyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectingToSpotifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
