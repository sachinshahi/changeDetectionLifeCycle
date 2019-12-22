import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {App1SharedModule} from '../../projects/app1/src/app/app1-shared.module';
import {App2SharedModule} from '../../projects/app2/src/app/app2-shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app1/one',
    pathMatch: 'full'
  },
  {
    path: 'app1',
    loadChildren: '../../projects/app1/src/app/app1-shared.module#App1SharedModule'
  },
  {
    path: 'app2',
    loadChildren: '../../projects/app2/src/app/app2-shared.module#App2SharedModule'
  }
];

@NgModule({
  imports: [
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
