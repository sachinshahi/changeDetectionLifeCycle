import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {App2View1Component} from './view1/app2-view1.component';
import {App2View2Component} from './view2/app2-view2.component';


const routes: Routes = [
  {path: 'one', component: App2View1Component},
  {path: 'two', component: App2View2Component},
  {path: '', redirectTo: 'one', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App2RoutingModule { }

