import { Component, OnInit, Input } from '@angular/core';
import { CancionService } from '../cancion.service';
import { Cancion } from '../Cancion';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-cancion-detalle',
  templateUrl: './cancion-detalle.component.html',
  styleUrls: ['./cancion-detalle.component.css']
})
export class CancionDetalleComponent implements OnInit {

  cancion: Cancion;

  constructor(private route: ActivatedRoute,
    private cancionService: CancionService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCancion();
  }

  getCancion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cancionService.getCancion(id).subscribe(cancion => this.cancion = cancion)
  }

  goBack(): void {
    this.location.back();
  }

}
