import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App1RoutingModule } from './app1-routing.module';
import { App1Component } from './app1.component';
import {App1NavComponent} from './nav/nav.component';
import {App1View1Component} from './view1/view1.component';
import {App1View2Component} from './view2/view2.component';

@NgModule({
  declarations: [
    App1Component,
    App1NavComponent,
    App1View1Component,
    App1View2Component
  ],
  imports: [
    BrowserModule,
    App1RoutingModule
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class App1Module { }
