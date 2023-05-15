import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/interfaces/place';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { PlacesService } from 'src/app/services/places-service.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places?: Place[];

  constructor(private navCtrl: NavController, private placesService: PlacesService, private globalData: GlobalDataService) {

  }

  ngOnInit() {
    this.globalData.setVisibleComponents(true);
    this.placesService.getPlaces().subscribe(places => {
      this.places = places
    });
  }

  viewPlace(place: Place) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        place
      }
    };
    this.navCtrl.navigateForward('place-details', navigationExtras);
  }

}
