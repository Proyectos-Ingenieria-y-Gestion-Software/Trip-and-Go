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

@Component({
  selector: 'app-tourist-package-details',
  templateUrl: './tourist-package-details.page.html',
  styleUrls: ['./tourist-package-details.page.scss'],
})
export class TouristPackageDetailsPage implements OnInit {

  package!: TouristPackage;
  museums!: Museum[];
  events!: Event[];
  places!: Place[];
  restaurants!: Restaurant[];

  constructor(private route: ActivatedRoute, private eventService: EventsService, private museumService: MuseumsService,
              private placeService: PlacesService, private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['touristPackage']) {
        this.package = params['touristPackage'];

        if (this.package.idRestaurant) {
          this.package.idRestaurant.forEach(restaurantId => {
            this.restaurantService.getRestaurantById(restaurantId).subscribe(restaurant => {
              this.restaurants.concat(restaurant);
              console.log(this.restaurants);
            })
          });
        }

        if (this.package.idPlace) {
          this.package.idPlace.forEach(placeId => {
            this.placeService.getPlaceById(placeId).then(placeObs => {
              placeObs.subscribe(place => {
                this.places.push(place);
              })
            })
          });
        }

        if (this.package.idEvent) {
          this.package.idEvent.forEach(eventId => {
            this.eventService.getEventById(eventId).then(eventObs => {
              eventObs.subscribe(event => {
                this.events.push(event);
              })
            })
          });
        }

        if (this.package.idMuseum) {
          this.package.idMuseum.forEach(musemId => {
            this.museumService.getMuseumById(musemId).then(museumObs => {
              museumObs.subscribe(museum => {
                this.museums.push(museum);
              })
            })
          });
        }
      }
    });
  }

}
