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

  places: Place[] = [];
  placeGroups?: Place[][];

  slideOpts = {
  slidesPerView: 1.2,
  spaceBetween: 20,
  centeredSlides: true
};

  currentIndex = 0;

  constructor(private navController: NavController, private placesService: PlacesService) {}

  ngOnInit() {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places.slice(0, 5);

      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.places.length;
        const slidesContainer = document.querySelector('.slides-container') as HTMLDivElement;
        if (this.currentIndex === 0) {
          slidesContainer.style.transition = 'none';
          slidesContainer.style.transform = `translateX(0%)`;
          setTimeout(() => {
            slidesContainer.style.transition = '';
          }, 10);
        } else {
          slidesContainer.style.transform = `translateX(-${this.currentIndex * 200}%)`;
        }
      }, 8000);
    });
  }
  

  goPlaces() {
    this.navController.navigateForward('places');
  }
}
