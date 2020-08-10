import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Track } from './track';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class TopChartsService {
  topTracks: Promise<Track[]>;
  topArtists: Promise<Artist[]>;
  constructor(
    private fireFunctions: AngularFireFunctions
  ) {
    const getFSUTopTracks = this.fireFunctions.httpsCallable('getFSUTopTracks');
    const getFSUTopArtists = this.fireFunctions.httpsCallable('getFSUTopArtists');
    this.topTracks = getFSUTopTracks({}).toPromise();
    this.topArtists = getFSUTopArtists({}).toPromise();
  }
}
