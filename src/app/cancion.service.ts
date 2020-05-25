import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Cancion } from './Cancion';
import { CANCIONES } from './list-songs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private firestore: AngularFirestore) { }

  getCanciones(): Observable<Cancion[]> {
    return this.firestore.collection<Cancion>('canciones').valueChanges();
  };

  getCancion(id: number): Observable<Cancion[]> {
    return this.firestore.collection<Cancion>('canciones').snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Cancion;
        data.id = action.payload.doc.id;
        if (data.id == id) {
          return data
        }
      })
    }))

  };

}
