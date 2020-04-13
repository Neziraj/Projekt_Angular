import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './Pages/Home/home-page/home-page.component';
import {ClientPageComponent} from './Pages/Clients/client-page/client-page.component';
import {ConfigurationPageComponent} from './Pages/Configurations/configuration-page/configuration-page.component';
import {BackupsPageComponent} from './Pages/Backups/backups-page/backups-page.component';
import {UserPageComponent} from './Pages/User/user-page/user-page.component';

const routes: Routes = [
  /*
  {path: '', redirectTo: '/home', pathMatch: 'Full' },
  {path: 'client', component: ClientPageComponent},
  {path: 'configuration', component: ConfigurationPageComponent},
  {path: 'backup', component: BackupsPageComponent},
  {path: 'user', component: UserPageComponent},
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
