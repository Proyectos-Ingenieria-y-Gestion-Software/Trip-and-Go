import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristPackageDetailsPage } from './tourist-package-details.page';

const routes: Routes = [
  {
    path: '',
    component: TouristPackageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristPackageDetailsPageRoutingModule {}
