import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { FeePortalComponent } from '../app/fee-portal/fee-portal.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'fee',
    component: FeePortalComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

