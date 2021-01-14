import { Component, OnInit } from '@angular/core';
import {AngularFireFunctions} from "@angular/fire/functions";

@Component({
  selector: 'app-share-card',
  templateUrl: './share-card.component.html',
  styleUrls: ['./share-card.component.css']
})
export class ShareCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  isShareSheetAvailable(): boolean {
    return Boolean(navigator.share);
  }
  launchShareSheet(): void {
    navigator.share({
      title: 'FSU\'s Favorite Music',
      url: window.location.href
    });
  }
  copyLink(): void {
    navigator.clipboard.writeText(window.location.href);
  }

}
