import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouristPackageDetailsPageRoutingModule } from './tourist-package-details-routing.module';

import { TouristPackageDetailsPage } from './tourist-package-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouristPackageDetailsPageRoutingModule
  ],
  declarations: [TouristPackageDetailsPage]
})
export class TouristPackageDetailsPageModule {}
