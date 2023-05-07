import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Place } from '../interfaces/place';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private af: AngularFirestore) { }

  getPlaces() {
    return this.af.collection<Place>('places').valueChanges();
  }

  async getPlaceById(id: string) {
    return this.af.collection<Place>('places').doc(id).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return {id, ...data} as Place;
      })
    );
  }

}
