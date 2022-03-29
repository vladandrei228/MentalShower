import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstQuestionPageRoutingModule } from './first-question-routing.module';

import { FirstQuestionPage } from './first-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstQuestionPageRoutingModule
  ],
  declarations: [FirstQuestionPage]
})
export class FirstQuestionPageModule {}
