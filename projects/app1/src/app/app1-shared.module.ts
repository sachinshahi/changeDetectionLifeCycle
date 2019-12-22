import {ModuleWithProviders, NgModule} from '@angular/core';
import {App1Module} from './app1.module';

const providers = [];
@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: App1Module,
      providers: []
    };
  }
}
