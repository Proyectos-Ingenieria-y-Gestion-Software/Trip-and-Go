import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Event } from '../interfaces/event';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private af: AngularFirestore) { }

  getEvents() {
    return this.af.collection<Event>('events').valueChanges();
  }

  async getEventById(id: string) {
    return this.af.collection<Event>('events').doc(id).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return {id, ...data} as Event;
      })
    )
  }
}
