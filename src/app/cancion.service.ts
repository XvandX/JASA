import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Cancion } from './Cancion';
import { CANCIONES } from './list-songs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor(private firestore: AngularFirestore) { }

  private cancionDoc: AngularFirestoreDocument<Cancion>;
  private cancion: Observable<Cancion>;

  getCanciones(): Observable<Cancion[]> {
    return this.firestore.collection<Cancion>('canciones').valueChanges();
  };

  getCancion(id: number) {
    this.cancionDoc = this.firestore.doc<Cancion>(`canciones/${id}`);
    return this.cancion = this.cancionDoc.snapshotChanges().pipe(map(action => {
      const data = action.payload.data() as Cancion;
      data.id = action.payload.id;
      return data
    }))
  }

}
