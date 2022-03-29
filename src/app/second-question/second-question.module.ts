import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondQuestionPageRoutingModule } from './second-question-routing.module';

import { SecondQuestionPage } from './second-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondQuestionPageRoutingModule
  ],
  declarations: [SecondQuestionPage]
})
export class SecondQuestionPageModule {}
