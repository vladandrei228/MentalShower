import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstQuestionPage } from './first-question.page';

const routes: Routes = [
  {
    path: '',
    component: FirstQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstQuestionPageRoutingModule {}
