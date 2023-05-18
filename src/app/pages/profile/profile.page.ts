import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EventsService } from 'src/app/services/events-service.service';
import { Event } from 'src/app/interfaces/event';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any ={ };
  events?: Event = { };


  constructor(private globalData: GlobalDataService, private auth: AngularFireAuth, private firestore: AngularFirestore, 
    private navCtrl: NavController,private eventsService: EventsService,) {}

  ngOnInit() {
    this.globalData.setVisibleComponents(true);

    this.eventsService.getEventById('JvUDCS7BogIQ4i63ViLY').then(observablePromise => {
      observablePromise.subscribe(data => {
        this.events = data;
      });
    });

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

  viewEvent(event: Event) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        event
      }
    };
    this.navCtrl.navigateForward('event-details', navigationExtras);
  }

  logOut(){
    this.auth.signOut();
    console.log("ha cerrado sesion");
  }

}
