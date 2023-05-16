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

  user: any ={ };

  constructor(private globalData: GlobalDataService, private auth: AngularFireAuth, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.globalData.setVisibleComponents(true);

    this.auth.user.subscribe(user => {
      if (user) {
        const uid = user.uid;
        this.firestore.collection('usuarios').doc(uid).valueChanges().subscribe((doc) => {
          if (doc) {
            this.user = doc;
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
