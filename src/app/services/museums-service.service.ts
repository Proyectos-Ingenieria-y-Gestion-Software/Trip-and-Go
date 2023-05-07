import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Museum } from './../interfaces/museum';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseumsService {

  constructor(private af: AngularFirestore) { }

  getMuseums() {
    return this.af.collection<Museum>('museum').valueChanges();
  }

  async getMuseumById(id: string){
    return this.af.collection<Museum>('museum').doc(id).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return {id, ...data} as Museum;
      })
    )
  }
}
