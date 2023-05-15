import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TouristPackage } from 'src/app/interfaces/tourist-package';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { TouristPackagesService } from 'src/app/services/tourist-packages-service.service';

@Component({
  selector: 'app-tourist-packages',
  templateUrl: './tourist-packages.page.html',
  styleUrls: ['./tourist-packages.page.scss'],
})
export class TouristPackagesPage implements OnInit {

  packages?: TouristPackage[];

  constructor(private navCtrl: NavController, private tpService: TouristPackagesService, private globalData: GlobalDataService) { }

  ngOnInit() {
    this.globalData.setVisibleComponents(true);
    this.tpService.getTouristPackages().subscribe(touristPackages => {
      this.packages = touristPackages;
    });
  }

  viewTouristPackage(touristPackage: TouristPackage) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        touristPackage
      }
    };
    this.navCtrl.navigateForward('tourist-package-details', navigationExtras);
  }

}
