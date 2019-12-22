import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {App1View2Component} from './view2/view2.component';
import {App1View1Component} from './view1/view1.component';
const routes: Routes = [
  { path: 'one', component: App1View1Component },
  { path: 'two', component: App1View2Component },
  { path: '', redirectTo: 'one', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App1RoutingModule { }

