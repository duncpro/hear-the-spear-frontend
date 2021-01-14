import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Track } from '../track';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.css']
})
export class SongListItemComponent implements OnInit, OnDestroy {
  @Input() track: Track;
  @Input() rank: number;
  @Input() showCount;
  @Input() showAnimation;
  options: AnimationOptions = {
    path: './../../assets/now-playing-animation.json',
  };

  constructor() {}

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
