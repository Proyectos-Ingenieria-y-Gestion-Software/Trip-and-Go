import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private af: AngularFirestore, private auth: Auth, private afAuth: AngularFireAuth) { }

  getUsuarios() {
    return this.af.collection<User>('usuarios').valueChanges();
  }

  async getUsuarioById(id: string) {
    return this.af.collection<User>('usuarios').doc(id).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return {id, ...data} as User;
      })
    );
  }

  getUserData(userId: string): Observable<User> {
    return this.af.collection('usuarios').doc(userId).valueChanges()
      .pipe(
        map((userData: any) => {
          const id = userId;
          return { id, ...userData } as User;
        })
      );
  }

  async createUser(user: User): Promise<string>{
    try {
      return this.af.collection<User>('usuarios').add(user).then(
        (docRef => {
          return docRef.id;
        })
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  userLogged(){
    return authState(this.auth);
  }

  getCurrentUserId(){
    return this.auth.currentUser?.uid;
  }

}
