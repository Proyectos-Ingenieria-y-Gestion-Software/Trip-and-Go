import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Museum } from 'src/app/interfaces/museum';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { MuseumsService } from 'src/app/services/museums-service.service';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.page.html',
  styleUrls: ['./museums.page.scss'],
})
export class MuseumsPage implements OnInit {

  museums?: Museum[];

  constructor(private navCtrl: NavController, private museumService: MuseumsService, private globalData: GlobalDataService) { }

  ngOnInit() {
    this.globalData.setVisibleComponents(true);
    this.museumService.getMuseums().subscribe(museum => {
      this.museums = museum
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

}
