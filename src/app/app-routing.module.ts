import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/home'
  },

  {
    path:'home',
    component: DefaultComponent
  },
  {
    path:'security',
    loadChildren: () => import('./modules/security/security.module').then(m =>m.SecurityModule)
  },
  {
    path: 'parameters',
    loadChildren: () => import('./modules/parameter/parameter.module').then(m => m.ParameterModule)
  },

/** este debe ser el ultimo  */
  {
    path:'**',
    redirectTo: '/home'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
