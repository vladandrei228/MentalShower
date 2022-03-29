import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonePagePageRoutingModule } from './zone-page-routing.module';

import { ZonePagePage } from './zone-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonePagePageRoutingModule
  ],
  declarations: [ZonePagePage]
})
export class ZonePagePageModule {}
