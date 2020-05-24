import { Component, OnInit } from '@angular/core';
import { Cancion } from '../Cancion';
import { CancionService } from '../cancion.service';
import { Repertorio } from '../Clase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {

  canciones: Cancion[];
  cancionSeleccionada: Cancion;

  constructor(private cancionService: CancionService) {

  }

  getCanciones(): void {
    this.cancionService.getCanciones().subscribe(canciones => this.canciones = canciones)
  }

  ngOnInit(): void {
    this.getCanciones();
  }

  filterSong = "";

  showDetail(cancion: Cancion): void {
    console.log("Este es el id de la canción seleccionada", cancion.id)
    this.cancionSeleccionada = cancion;
  }
}

let datos = new Repertorio();
console.log(datos.canciones[0]);



