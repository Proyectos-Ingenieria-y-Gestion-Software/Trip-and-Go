import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumDetailsPageRoutingModule } from './museum-details-routing.module';

import { MuseumDetailsPage } from './museum-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumDetailsPageRoutingModule
  ],
  declarations: [MuseumDetailsPage]
})
export class MuseumDetailsPageModule {}
