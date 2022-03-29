import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondQuestionPage } from './second-question.page';

const routes: Routes = [
  {
    path: '',
    component: SecondQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondQuestionPageRoutingModule {}
