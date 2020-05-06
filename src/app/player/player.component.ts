import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Cancion } from '../Cancion';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  @Input() cancion: Cancion;
  @ViewChild('player') player: ElementRef;
  @ViewChild('progress') progress: ElementRef;
  @ViewChild('time') time: ElementRef;
  @ViewChild('remaining') remaining: ElementRef;

  constructor() {
  }

  ngOnInit(): void {

  }

  onAudioPlay(): void {
    this.player.nativeElement.play();
    this.durationToString()
    this.player.nativeElement.addEventListener('timeupdate', (event) => {
      console.log(event)
      let playerComponent = this
      playerComponent.timeRemainingToString()
      playerComponent.changeProgressBar()
    })
  }

  onAudioPause(): void {
    this.player.nativeElement.pause();
  }

  onAudioStop(): void {
    this.player.nativeElement.pause();
    this.player.nativeElement.currentTime = 0;
  }

  onAudioVolumeUp(): void {
    this.player.nativeElement.volume += 0.1;
  }

  onAudioVolumeDown(): void {
    this.player.nativeElement.volume -= 0.1;
  }

  durationToString(): void {
    let durationInSec = this.player.nativeElement.duration
    let d = new Date(durationInSec * 1000);
    let minute = (d.getMinutes() < 9) ? "0" + d.getMinutes() : d.getMinutes();
    let second = (d.getSeconds() < 9) ? "0" + d.getSeconds() : d.getSeconds();
    var duration = minute + ":" + second;
    console.log("esto es la duracion total", duration)
    this.time.nativeElement.innerHTML = duration;
  }

  timeRemainingToString(): void {
    let timeRemainingSec = (this.player.nativeElement.duration - this.player.nativeElement.currentTime)
    let r = new Date(timeRemainingSec * 1000);
    let minuteRemain = (r.getMinutes() < 9) ? "0" + r.getMinutes() : r.getMinutes();
    let secondRemain = (r.getSeconds() < 9) ? "0" + r.getSeconds() : r.getSeconds();
    let remaining = " -" + (minuteRemain) + ":" + (secondRemain);
    console.log("esto es minutos al principio", minuteRemain)
    console.log("esto es second al principio", secondRemain)
    console.log("esto es el tiempo restante", remaining)
    this.remaining.nativeElement.innerHTML = remaining;
  }

  changeProgressBar(): void {
    let advance = ((this.player.nativeElement.currentTime / this.player.nativeElement.duration) * 100) + "%";
    console.log("este es el avance", advance)
    this.progress.nativeElement.style.width = advance;
  }


}


