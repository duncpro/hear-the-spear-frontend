import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist';

@Component({
  selector: 'app-artist-list-item',
  templateUrl: './artist-list-item.component.html',
  styleUrls: ['./artist-list-item.component.css']
})
export class ArtistListItemComponent implements OnInit {
  @Input() artist: Artist;
  @Input() rank: number;
  constructor() { }

  ngOnInit(): void {
  }
}
