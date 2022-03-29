import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdQuestionPage } from './third-question.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdQuestionPageRoutingModule {}
