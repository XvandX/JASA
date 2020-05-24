import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Cancion } from './Cancion';
import { CANCIONES } from './list-songs';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private firestore: AngularFirestore) { }

  getCanciones(): Observable<Cancion[]> {
    return this.firestore.collection<Cancion>('canciones').valueChanges();
  };

  getCancion(id: number): Observable<Cancion> {
    return of(CANCIONES.find(cancion => cancion.id === id));
  }

}
