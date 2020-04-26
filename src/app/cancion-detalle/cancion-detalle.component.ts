import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../Cancion';

@Component({
  selector: 'app-cancion-detalle',
  templateUrl: './cancion-detalle.component.html',
  styleUrls: ['./cancion-detalle.component.css']
})
export class CancionDetalleComponent implements OnInit {

  @Input() cancion: Cancion;

  constructor() { }

  ngOnInit(): void {
  }

}
