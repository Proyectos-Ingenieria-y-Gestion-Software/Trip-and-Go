import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Restaurant } from '../interfaces/restaurant';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private af: AngularFirestore) { }

  getRestaurants() {
    return this.af.collection<Restaurant>('restaurants').valueChanges();
  }

  getRestaurantById(id: string) {
    return this.af.collection<Restaurant>('restaurants').doc(id).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return {id, ...data} as Restaurant;
      })
    )
  }
}
