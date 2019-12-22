import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {App1SharedModule} from '../../projects/app1/src/app/app1-shared.module';
import {App2SharedModule} from '../../projects/app2/src/app/app2-shared.module';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { Child1Component } from './child1/child1.component';
import { NestedlifecycleComponent } from './nestedlifecycle/nestedlifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component,
    NestedlifecycleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
