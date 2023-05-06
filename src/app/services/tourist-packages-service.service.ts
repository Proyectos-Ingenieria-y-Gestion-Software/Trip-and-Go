import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TouristPackage } from '../interfaces/tourist-package';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouristPackagesService {

  constructor(private af: AngularFirestore) { }

  getTouristPackages() {
    return this.af.collection<TouristPackage>('touristPackages').valueChanges();
  }

  getTouristPackageById(id: string) {
    return this.af.collection<TouristPackage>('touristPackages').doc(id).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return {id, ...data} as TouristPackage;
      })
    )
  }
}
