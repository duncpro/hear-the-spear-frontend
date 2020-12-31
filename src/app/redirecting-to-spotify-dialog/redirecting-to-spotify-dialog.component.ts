import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-redirecting-to-spotify-dialog',
  templateUrl: './redirecting-to-spotify-dialog.component.html',
  styleUrls: ['./redirecting-to-spotify-dialog.component.css']
})
export class RedirectingToSpotifyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RedirectingToSpotifyDialogComponent>,
  ) { }

  ngOnInit(): void {

  }

}
