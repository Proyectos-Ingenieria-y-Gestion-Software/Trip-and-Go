import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristPackagesPage } from './tourist-packages.page';

const routes: Routes = [
  {
    path: '',
    component: TouristPackagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristPackagesPageRoutingModule {}
