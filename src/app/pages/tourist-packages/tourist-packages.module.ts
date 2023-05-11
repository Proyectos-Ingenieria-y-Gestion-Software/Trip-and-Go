import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouristPackagesPageRoutingModule } from './tourist-packages-routing.module';

import { TouristPackagesPage } from './tourist-packages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouristPackagesPageRoutingModule
  ],
  declarations: [TouristPackagesPage]
})
export class TouristPackagesPageModule {}
