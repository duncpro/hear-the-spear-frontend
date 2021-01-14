import {Component, Input, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.css']
})
export class BookmarkCardComponent implements OnInit {
  @Input() spotifyTimeRange: string;
  spotifyPlaylistUrl: string;
  constructor() { }

  ngOnInit(): void {
    const spotifyPlaylistId = environment.spotify.playlists[this.spotifyTimeRange];
    this.spotifyPlaylistUrl = `https://open.spotify.com/playlist/${spotifyPlaylistId}`;
  }

}
