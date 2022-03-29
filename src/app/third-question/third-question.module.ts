import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdQuestionPageRoutingModule } from './third-question-routing.module';

import { ThirdQuestionPage } from './third-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdQuestionPageRoutingModule
  ],
  declarations: [ThirdQuestionPage]
})
export class ThirdQuestionPageModule {}
