import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './Pages/Home/home-page/home-page.component';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { OngoingBackupsComponent } from './Pages/Home/ongoing-backups/ongoing-backups.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
import { BackupsPageComponent } from './Pages/Backups/backups-page/backups-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'clients', component: ClientPageComponent },
  { path: 'configurations', component: ConfigurationPageComponent },
  { path: 'backups', component: CompletedBackupComponent},
  { path: 'user', component: UserPageComponent },
  { path: 'completedbackups', component: CompletedBackupComponent },
  { path: 'ongoinbackups', component: BackupsPageComponent },
  { path: 'upcomingbackups', component: IncomingBackupComponent },
  //{ path: '**', component: PageNotFound }
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
]
