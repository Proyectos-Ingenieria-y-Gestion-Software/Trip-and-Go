import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumDetailsPage } from './museum-details.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumDetailsPageRoutingModule {}
