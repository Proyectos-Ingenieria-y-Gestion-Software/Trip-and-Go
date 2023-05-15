import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { RestaurantsService } from 'src/app/services/restaurants-service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants!: Restaurant[];

  constructor(private navCtrl: NavController, private restaurantsService: RestaurantsService, private globalData: GlobalDataService) { }

  ngOnInit() {
    this.globalData.setVisibleComponents(true);
    this.restaurantsService.getRestaurants().subscribe(restaurant => {
      this.restaurants = restaurant
    });
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
