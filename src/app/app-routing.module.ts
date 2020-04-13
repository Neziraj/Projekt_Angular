import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './Pages/Home/home-page/home-page.component';
import {ClientPageComponent} from './Pages/Clients/client-page/client-page.component';
import {ConfigurationPageComponent} from './Pages/Configurations/configuration-page/configuration-page.component';

const routes: Routes = [

  {path: 'client', component: ClientPageComponent},
  {path: 'configuration', component: ConfigurationPageComponent},
  {path: 'backup', component: ClientPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
