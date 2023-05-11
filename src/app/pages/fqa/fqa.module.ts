import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FQAPageRoutingModule } from './fqa-routing.module';
import { FQAPage } from './fqa.page'; // <--- Aquí importa correctamente la clase FQAPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FQAPageRoutingModule
  ],
  declarations: [FQAPage]
})
export class FQAPageModule {}
