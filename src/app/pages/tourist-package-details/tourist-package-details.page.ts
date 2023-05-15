import { Restaurant } from 'src/app/interfaces/restaurant';
import { Place } from 'src/app/interfaces/place';
import { Event } from 'src/app/interfaces/event';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museum } from 'src/app/interfaces/museum';
import { TouristPackage } from 'src/app/interfaces/tourist-package';
import { EventsService } from 'src/app/services/events-service.service';
import { MuseumsService } from 'src/app/services/museums-service.service';
import { PlacesService } from 'src/app/services/places-service.service';
import { RestaurantsService } from 'src/app/services/restaurants-service.service';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tourist-package-details',
  templateUrl: './tourist-package-details.page.html',
  styleUrls: ['./tourist-package-details.page.scss'],
})
export class TouristPackageDetailsPage implements OnInit {

  package!: TouristPackage;
  museum!: Museum;
  event!: Event;
  place!: Place;
  restaurant!: Restaurant;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private eventService: EventsService, private museumService: MuseumsService,
              private placeService: PlacesService, private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['touristPackage']) {
        this.package = params['touristPackage'];

        if (this.package.idRestaurant) {
          this.restaurantService.getRestaurantById(this.package.idRestaurant).subscribe(restaurant => {
            this.restaurant = restaurant;
          });
        }

        if (this.package.idPlace) {
          this.placeService.getPlaceById(this.package.idPlace).then(placeObs => {
            placeObs.subscribe(place => {
              this.place = place;
            })
          });
        }

        if (this.package.idEvent) {
          this.eventService.getEventById(this.package.idEvent).then(eventObs => {
            eventObs.subscribe(event => {
              this.event = event;
            })
          });
        }

        if (this.package.idMuseum) {
          this.museumService.getMuseumById(this.package.idMuseum).then(museumObs => {
            museumObs.subscribe(museum => {
              this.museum = museum;
            })
          });
        }
      }
    });
  }

  viewMuseum(museum: Museum) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        museum
      }
    };
    this.navCtrl.navigateForward('museum-details', navigationExtras);
  }

  viewEvent(event: Event) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        event
      }
    };
    this.navCtrl.navigateForward('event-details', navigationExtras);
  }

  viewPlace(place: Place) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        place
      }
    };
    this.navCtrl.navigateForward('place-details', navigationExtras);
  }

  viewRestaurant(restaurant: Restaurant) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        restaurant
      }
    };
    this.navCtrl.navigateForward('restaurant-details', navigationExtras);
  }

}
