import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/interfaces/place';
import { PlacesService } from 'src/app/services/places-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  places?: Place[];
  placeGroups?: Place[][];

  slideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true
  };

  constructor(private navController: NavController, private placesService: PlacesService) {}

  ngOnInit() {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places
    })
  }

  goPlaces() {
    this.navController.navigateForward('places');
  }  

}
