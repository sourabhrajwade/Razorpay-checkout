import { AppComponent } from './app.component';

import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'head',
    pathMatch: 'full'
  },
  {
    path: 'head',
    component: HeaderComponent,
  },
  {
    path: 'head/:id',
    component: OrderComponent,

  },
  {
    path: 'order',
    component: OrderComponent,
  },
  { path: '**',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
