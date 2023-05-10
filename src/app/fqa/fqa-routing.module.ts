import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FQAPage } from './fqa.page';

const routes: Routes = [
  {
    path: '',
    component: FQAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FQAPageRoutingModule {}
