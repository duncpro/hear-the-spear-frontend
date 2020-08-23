import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenSizeService } from '../screen-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browse-artists-card',
  templateUrl: './browse-artists-card.component.html',
  styleUrls: ['./browse-artists-card.component.css']
})
export class BrowseArtistsCardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
