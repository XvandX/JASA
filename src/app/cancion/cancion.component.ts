import { Component, OnInit } from '@angular/core';
import { Cancion } from '../Cancion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {
  cancion: Cancion = {
    id: 1,
    title: 'Bad Guy',
    author: 'Billie Eilish',
    year: 2019,
    album: 'When we all fall asleep, Where do we go?',
    style: 'pop',
  };
  constructor() {}

  ngOnInit(): void {}
}
