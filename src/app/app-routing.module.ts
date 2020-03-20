import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuicklinkStrategy} from 'ngx-quicklink';
import { HomeComponent } from './_components/home/home.component';
import { ListComponent } from './_components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'list',
    component:ListComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {  useHash: true ,preloadingStrategy: QuicklinkStrategy,onSameUrlNavigation: 'reload',scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
