import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Subscription, timer } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService implements OnDestroy {
  private timerSubscription: Subscription;
  public currentlyPlayingSongs: firebase.firestore.Query<DocumentData>;
  private refreshTimer = timer(0, 1000 * 20);
  constructor(
    private fireFunctions: AngularFireFunctions,
    private firestore: AngularFirestore,
  ) {
    this.currentlyPlayingSongs = this.firestore.collection('nowPlayingSongs').ref
      .limit(50)
      .orderBy('count', 'desc');
    this.scheduleKeepAliveSignal();
  }
  private scheduleKeepAliveSignal(): void {
    // Keep-alive signal.
    // Tells the backend that there is a user watching the now playing screen and that the backend should keep the data
    // up to date.
    const keepDataFetcherAlive = this.fireFunctions.httpsCallable('triggerNowPlayingDataFetch');
    // Refresh data every 10 seconds.
    this.timerSubscription = this.refreshTimer.subscribe(async () => {
        console.log('Sending Now Playing keep alive signal...');
        try {
          await keepDataFetcherAlive({}).toPromise();
          console.log('Signal sent successfully!');
        } catch (error) {
          console.error(error);
        }
      });
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
