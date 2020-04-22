import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './Pages/Home/home-page/home-page.component';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
import { BackupsPageComponent } from './Pages/Backups/backups-page/backups-page.component';
/*login*/
import { LoginComponent  } from './Pages/login/login.component';
/*authGuard*/
import { AuthGuard } from './_helpers';

const routes: Routes = [
  /*{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },*/
  /* V AuthGuard V */
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  /* A AuthGuard A */
  { path: 'clients', component: ClientPageComponent },
  { path: 'configurations', component: ConfigurationPageComponent },
  { path: 'backups', component: CompletedBackupComponent},
  { path: 'user', component: UserPageComponent },
  { path: 'completedbackups', component: CompletedBackupComponent },
  { path: 'incomingbackups', component: IncomingBackupComponent },
  /*login*/
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  HomePageComponent,
  ClientPageComponent,
  ConfigurationPageComponent,
  UserPageComponent,
  CompletedBackupComponent
];

export const appRoutingModule = RouterModule.forRoot(routes);
