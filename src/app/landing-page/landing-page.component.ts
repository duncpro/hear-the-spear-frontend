import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {createImageBitmapUniversal, ScrollingCompositeComponent} from 'scrolling-composite';
import {BehaviorSubject, from, fromEvent, merge, Subscription, timer} from 'rxjs';
import {TopChartsService} from '../top-charts.service';
import {Track} from '../track';
import {Artist} from '../artist';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  width = new BehaviorSubject(window.innerWidth);
  compositeHeight = new BehaviorSubject(window.innerHeight);
  height: number = window.innerHeight;
  preferredImageSize = new BehaviorSubject(100);
  images: Array<ImageBitmap> = [];
  doneFetchingImages: boolean = false;
  @ViewChild('composite') composite: ScrollingCompositeComponent;
  constructor(
    private topChartsService: TopChartsService
  ) {
  }
  ngOnInit(): void {
    const dimensionsChanged = merge(
      fromEvent(window, 'orientationchange'),
      fromEvent(window, 'resize')
    );
    this.subscriptions.push(
      dimensionsChanged.subscribe(() => {
        this.width.next(window.innerWidth);
        this.compositeHeight.next(window.innerHeight);
        this.height = window.innerHeight;
      })
    );

    // Make the user wait for the cool background to finish loading.
    // If they are on a slow network and the images aren't available after 10 seconds then
    // allow them to continue.
    Promise.race([
      this.fetchImages(),
      timer(10 * 1000).toPromise()
    ])
      .then(() => this.doneFetchingImages = true)
      .catch(console.error);



  }
  async fetchImages(): Promise<void> {
    const albumImageMap = new Map<string, string>();
    for (const track of await this.topChartsService.topTracks) {
      albumImageMap.set(track.album, track.artMedium);
    }

    const responses = await Promise.all(
      Array.from(albumImageMap.values())
        .map(url => fetch(url))
    );
    const blobs = await Promise.all(
      responses.map(resp => resp.blob())
    );
    const images = await Promise.all(
      blobs.map(createImageBitmapUniversal)
    );
    images.forEach(image => this.images.push(image));
    if (this.images.length > 0) {
      this.composite.start();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(it => it.unsubscribe());
  }

}
