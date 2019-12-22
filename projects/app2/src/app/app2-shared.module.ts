import {ModuleWithProviders, NgModule} from '@angular/core';
import {App2Module} from './app2.module';

const providers = [];

@NgModule({})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: App2Module,
      providers: []
    };
  }
}
