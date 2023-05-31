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
    path: 'sport',
    loadChildren: () => import('./pages/sport/sport.module').then( m => m.SportPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./pages/entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./pages/technology/technology.module').then( m => m.TechnologyPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./pages/health/health.module').then( m => m.HealthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
