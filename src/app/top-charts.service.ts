import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Track } from './track';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class TopChartsService {
  private readonly requestTopTracks;
  private readonly requestTopArtists;
  constructor(
    private fireFunctions: AngularFireFunctions
  ) {
    this.requestTopTracks = this.fireFunctions.httpsCallable('getFSUTopTracks');
    this.requestTopArtists = this.fireFunctions.httpsCallable('getFSUTopArtists');
  }
  public getTopArtists(): Promise<Artist[]> {
    return this.requestTopArtists({
      spotifyTimeRange: 'short_term'
    }).toPromise();
  }
  public getTopTracks(timeRange: string): Promise<Track[]> {
    return this.requestTopTracks({
      spotifyTimeRange: timeRange
    }).toPromise();
  }
}
