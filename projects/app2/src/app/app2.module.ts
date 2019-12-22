import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {App2RoutingModule} from './app-routing.module';
import {App2Component} from './app.component';
import {App2View1Component} from './view1/app2-view1.component';
import {App2View2Component} from './view2/app2-view2.component';
import {App2NavComponent} from './nav/app2-nav.component';

@NgModule({
  declarations: [
    App2Component,
    App2View1Component,
    App2View2Component,
    App2NavComponent
  ],
  imports: [
    BrowserModule,
    App2RoutingModule
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class App2Module { }
