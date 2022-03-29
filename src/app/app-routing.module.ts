import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'zone-page',
    loadChildren: () => import('./zone-page/zone-page.module').then( m => m.ZonePagePageModule)
  },
  {
    path: 'first-question',
    loadChildren: () => import('./first-question/first-question.module').then( m => m.FirstQuestionPageModule)
  },
  {
    path: 'second-question',
    loadChildren: () => import('./second-question/second-question.module').then( m => m.SecondQuestionPageModule)
  },
  {
    path: 'third-question',
    loadChildren: () => import('./third-question/third-question.module').then( m => m.ThirdQuestionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
