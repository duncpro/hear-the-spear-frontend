import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseArtistsCardComponent } from './browse-artists-card.component';

describe('BrowseArtistsCardComponent', () => {
  let component: BrowseArtistsCardComponent;
  let fixture: ComponentFixture<BrowseArtistsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseArtistsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseArtistsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
