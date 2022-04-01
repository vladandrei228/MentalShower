import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { thankyouPage } from './thank-you.page';

const routes: Routes = [
  {
    path: '',
    component: thankyouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class thankyouPageRoutingModule {}
