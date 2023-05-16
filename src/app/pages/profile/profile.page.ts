import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any; // Variable para almacenar los datos del usuario

  constructor(private globalData: GlobalDataService, private auth: AngularFireAuth, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.globalData.setVisibleComponents(true);

    // Obtener el usuario autenticado actualmente
    this.auth.user.subscribe(user => {
      if (user) {
        // Obtener el documento del usuario desde Firestore
        this.firestore.collection('usuarios').doc(user.uid).get().subscribe(doc => {
          if (doc.exists) {
            // Asignar los datos del documento al objeto user
            this.user = doc.data();
          } else {
            console.log('El documento no existe');
          }
        });
      }
    });
  }

  logOut(){
    this.auth.signOut();
    console.log("ha cerrado sesion");
  }

}
