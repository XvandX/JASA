import { Component, OnInit } from '@angular/core';
import { Cancion } from '../Cancion';
import { CANCIONES } from '../list-songs';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {

  canciones = CANCIONES;
  cancionSeleccionada: Cancion;

  constructor() {}

  ngOnInit(): void {}

  showDetail(cancion:Cancion):void{
    console.log("Este es el id de la canción seleccionada",cancion.id)
    this.cancionSeleccionada = cancion;
  }
}
