// basic
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
// authentication
import { LoginComponent  } from './_auth/containers/login/login.component';
import { AuthGuard } from './_auth/guards/auth.guard';
import { ClientsDialogComponent } from './Pages/Clients/clients-dialog/clients-dialog.component';

const routes: Routes = [
  /* V AuthGuard V */
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  /* A AuthGuard A */
  ,
  {
    path: 'clients',
    loadChildren: './random/random.module#RandomModule',
    canActivate: [ClientPageComponent],
    canLoad: [ClientPageComponent]
  },
  //{ path: 'clients', component: ClientPageComponent },
  { path: 'configurations', component: ConfigurationPageComponent },
  { path: 'backups', component: CompletedBackupComponent},
  { path: 'user', component: UserPageComponent },
  { path: 'completedbackups', component: CompletedBackupComponent },
  { path: 'incomingbackups', component: IncomingBackupComponent },
  //{ path: 'login', component: LoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  ClientPageComponent,
  ConfigurationPageComponent,
  UserPageComponent,
  CompletedBackupComponent
];

export const appRoutingModule = RouterModule.forRoot(routes);
