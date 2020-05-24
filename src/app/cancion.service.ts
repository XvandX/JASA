import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cancion } from './Cancion';
import { CANCIONES } from './list-songs';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor() { }

  getCanciones(): Observable<Cancion[]> {
    return of(CANCIONES);
  }
}