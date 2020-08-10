import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistsPageComponent } from './top-artists-page.component';

describe('TopArtistsPageComponent', () => {
  let component: TopArtistsPageComponent;
  let fixture: ComponentFixture<TopArtistsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopArtistsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArtistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
