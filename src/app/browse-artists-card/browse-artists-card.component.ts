import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-artists-card',
  templateUrl: './browse-artists-card.component.html',
  styleUrls: ['./browse-artists-card.component.css']
})
export class BrowseArtistsCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
