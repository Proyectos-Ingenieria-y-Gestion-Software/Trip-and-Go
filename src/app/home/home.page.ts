import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/interfaces/place';
import { PlacesService } from 'src/app/services/places-service.service';
import { EventsService } from '../services/events-service.service';
import { RestaurantsService } from '../services/restaurants-service.service';
import { MuseumsService } from '../services/museums-service.service';
import { Restaurant } from '../interfaces/restaurant';
import { NavigationExtras } from '@angular/router';
import * as L from 'leaflet';
import { Map as LeafletMap, tileLayer, Marker } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  places: Place[] = [];

  firstPlace: any;
  firstEvent: any;
  firstRestaurant: any;
  firstMuseum: any;


  map?: LeafletMap;

  slideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true
  };

  currentIndex = 0;
  slideInterval: any; // Variable para almacenar el intervalo

  constructor(
    private navController: NavController,
    private placesService: PlacesService,
    private eventsService: EventsService,
    private restaurantService: RestaurantsService,
    private museumsService: MuseumsService
  ) {}

  ngOnInit() {
    this.placesService.getPlaces().subscribe(placesdb => {
      this.places = placesdb.slice(0, 5);

      this.firstPlace = placesdb[6]; 

      this.startSlideInterval(); 

    });

    this.eventsService.getEvents().subscribe(eventsdb => {
      this.firstEvent = eventsdb[1];

    });

    this.restaurantService.getRestaurants().subscribe(restaurantdb => {
        this.firstRestaurant = restaurantdb[2]; 
    });

    this.museumsService.getMuseums().subscribe(museumsdb => {
        this.firstMuseum = museumsdb[2]; 
    });

    this.eventsService.getEvents().subscribe(eventsdb => {

      this.firstEvent = eventsdb[1]; // Obtener el primer restaurante

    });


    this.map = L.map('map', {
      center: [28.136154, -15.439822],
      zoom: 10,
      renderer: L.canvas()
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map);
  }

  goPlaces() {
    this.navController.navigateForward('places');
  }

  viewEvent(event: Event) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        event
      }
    };
    this.navController.navigateForward('event-details', navigationExtras);
  }

  changeSlide(index: number) {
    this.currentIndex = index;
    const slidesContainer = document.querySelector('.slides-container') as HTMLDivElement;
    slidesContainer.style.transition = 'none';
    slidesContainer.style.transform = `translateX(-${this.currentIndex * 200}%)`;
    setTimeout(() => {
      slidesContainer.style.transition = '';
    }, 10);

    clearInterval(this.slideInterval); // Detener el intervalo actual
    this.startSlideInterval(); // Iniciar un nuevo intervalo
  }

  startSlideInterval() {
    this.slideInterval = setInterval(() => {
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
  }

}

