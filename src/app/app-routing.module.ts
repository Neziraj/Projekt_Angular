import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'clients', component: ClientPageComponent },
  { path: 'configurations', component: ConfigurationPageComponent },
  { path: 'completedbackups', component: CompletedBackupComponent},
  { path: 'incomingbackups', component: IncomingBackupComponent},
  { path: 'user', component: UserPageComponent },
  { path: 'incomingbackups', component: IncomingBackupComponent },
  //{ path: '**', component: PageNotFound }
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
]
