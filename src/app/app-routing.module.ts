import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './Pages/Home/home-page/home-page.component';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { BackupsPageComponent } from './Pages/Backups/backups-page/backups-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { ClientNavbarComponent } from './Pages/Clients/navbar.clients/client-navbar.component';
import { ConfigNavbarComponent } from './Pages/Configurations/navbar.config/config-navbar.component';
import { HomeNavbarComponent } from './Pages/Home/navbar/home-navbar.component';
import { NavbarBackupComponent } from './Pages/Backups/navbar.backups/navbar.backup.component';
import { NavbarComponent } from './Pages/User/navbar.uset/navbar.component';

/*const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'Full' },
  {path: 'client', component: ClientPageComponent},
  {path: 'configuration', component: ConfigurationPageComponent},
  {path: 'backup', component: BackupsPageComponent},
  {path: 'user', component: UserPageComponent},
];*/

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeNavbarComponent },
  { path: 'clients', component: ClientNavbarComponent },
  { path: 'configurations', component: ConfigNavbarComponent },
  { path: 'backups', component: NavbarBackupComponent},
  { path: 'user', component: UserPageComponent }

  //{ path: '**', component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  HomeNavbarComponent,
  ClientNavbarComponent,
  ConfigNavbarComponent,
  NavbarBackupComponent,
  NavbarComponent
]
