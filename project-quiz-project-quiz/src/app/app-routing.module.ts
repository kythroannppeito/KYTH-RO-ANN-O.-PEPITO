import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartPage } from './start/start.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'levels',
    loadChildren: () => import('./levels/levels.module').then( m => m.LevelsPageModule)
  },
  {
    path: 'math-quiz',
    loadChildren: () => import('./math-quiz/math-quiz.module').then( m => m.MathQuizPageModule)
  },
  {
    path: 'science-quiz',
    loadChildren: () => import('./science-quiz/science-quiz.module').then( m => m.ScienceQuizPageModule)
  },
  {
    path: 'tech-quiz',
    loadChildren: () => import('./tech-quiz/tech-quiz.module').then( m => m.TechQuizPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'math-quiz2',
    loadChildren: () => import('./math-quiz2/math-quiz2.module').then( m => m.MathQuiz2PageModule)
  },
  {
    path: 'math-quiz3',
    loadChildren: () => import('./math-quiz3/math-quiz3.module').then( m => m.MathQuiz3PageModule)
  },
  {
    path: 'science-quiz2',
    loadChildren: () => import('./science-quiz2/science-quiz2.module').then( m => m.ScienceQuiz2PageModule)
  },
  {
    path: 'science-quiz3',
    loadChildren: () => import('./science-quiz3/science-quiz3.module').then( m => m.ScienceQuiz3PageModule)
  },
  {
    path: 'sci-level',
    loadChildren: () => import('./sci-level/sci-level.module').then( m => m.SciLevelPageModule)
  },
  {
    path: 'tech-level',
    loadChildren: () => import('./tech-level/tech-level.module').then( m => m.TechLevelPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
