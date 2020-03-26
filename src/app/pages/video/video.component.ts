import { Component, OnInit,AfterViewInit, OnDestroy } from '@angular/core';
declare let videojs: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent {

  vidUrl = 'assets/video/commercial.mp4';
  vidUrl2 = 'assets/video/commercial.webm';
  poster = 'assets/img/poster.jpg';

  video:any;

  constructor() { }
  
  ngOnInit() {
    this.initVideo()
  }

  initVideo() {
    const options = {
      controls: true,
      preload: 'auto',
      responsive: true,
      liveui: true,
      aspectRatio: "4:3",
      techOrder: ['html5'],
      poster: this.poster,
      sources: [{
        src: this.vidUrl,
        type: 'video/mp4'
      }, {
        src: this.vidUrl2,
        type: 'video/webm'
      }]      
    };
    this.video = new videojs('my-player', options);

  }
  ngAfterViewInit() {
    this.video.play()
  }

  ngOnDestroy(){
    this.video.dispose()
  }

}
