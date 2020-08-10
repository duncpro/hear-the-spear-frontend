import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSongsPageComponent } from './top-songs-page.component';

describe('TopSongsPageComponent', () => {
  let component: TopSongsPageComponent;
  let fixture: ComponentFixture<TopSongsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSongsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSongsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
