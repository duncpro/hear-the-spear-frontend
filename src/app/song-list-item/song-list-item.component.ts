import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../track';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.css']
})
export class SongListItemComponent implements OnInit {
  @Input() track: Track;
  @Input() rank: number;
  constructor() { }

  ngOnInit(): void {
  }
}
