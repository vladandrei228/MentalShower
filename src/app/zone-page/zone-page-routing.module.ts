import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonePagePage } from './zone-page.page';

const routes: Routes = [
  {
    path: '',
    component: ZonePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonePagePageRoutingModule {}
