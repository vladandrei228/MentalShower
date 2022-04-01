import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { thankyouPageRoutingModule } from './thankyou-routing.module';

import { thankyouPage } from './thank-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    thankyouPageRoutingModule
  ],
  declarations: [thankyouPage]
})
export class thankyouPageModule {}
