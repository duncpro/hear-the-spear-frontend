import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-playable-track-image',
  templateUrl: './playable-track-image.component.html',
  styleUrls: ['./playable-track-image.component.css']
})
export class PlayableTrackImageComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() public albumArt: string;
  @Input() public previewUrl: string;
  @ViewChild('audioElement') audioElement: ElementRef<HTMLAudioElement>;
  private playbackPositionSubscription: Subscription;
  private playSubscription: Subscription;
  private pauseSubscription: Subscription;
  private endSubscription: Subscription;
  public playbackProgress = 0;
  public isPlaying = false;
  constructor() {}
  ngOnDestroy(): void {
    this.playbackPositionSubscription.unsubscribe();
    this.playSubscription.unsubscribe();
    this.pauseSubscription.unsubscribe();
    this.endSubscription.unsubscribe();
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    const timeUpdateObservable = fromEvent(this.audioElement.nativeElement, 'timeupdate');
    const playObservable = fromEvent(this.audioElement.nativeElement, 'play');
    const pauseObservable = fromEvent(this.audioElement.nativeElement, 'pause');
    const endedObservable = fromEvent(this.audioElement.nativeElement, 'ended');
    this.playbackPositionSubscription = timeUpdateObservable.subscribe((event) => {
      const position = this.audioElement.nativeElement.currentTime;
      const duration = this.audioElement.nativeElement.duration;
      this.playbackProgress = position / duration * 100;
    });
    this.playSubscription = playObservable.subscribe((event) => {
      this.isPlaying = true;
    });
    this.pauseSubscription = pauseObservable.subscribe((event) => {
      this.isPlaying = false;
      this.audioElement.nativeElement.currentTime = 0;
    });
    this.endSubscription = endedObservable.subscribe((event) => {
      this.isPlaying = false;
      this.audioElement.nativeElement.currentTime = 0;
    });
  }
  async togglePreview(): Promise<void> {
    if (this.isPlaying) {
      await this.audioElement.nativeElement.pause();
    } else {
      await this.pauseAll();
      await this.audioElement.nativeElement.play();
    }
  }
  async pauseAll(): Promise<void> {
    await Promise.all(
      Array.from(document.getElementsByTagName('audio'))
        .map((audio: HTMLAudioElement) => audio.pause())
    );
  }
  getAlbumArtClasses(): string {
    let classes = '';
    if (this.isPlaying) {
      classes += ' opaque';
    }
    if (this.previewUrl) {
      classes += ' dim-on-hover';
    }
    return classes;
  }
}
