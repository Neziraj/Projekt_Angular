import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {IncomingBackupComponent} from "./Pages/Backups/incoming-backup/incoming-backup.component";
import {CompletedBackupComponent} from "./Pages/Backups/completed-backups/completed-backup.component";
import {ConfigurationPageComponent} from "./Pages/Configurations/configuration-page";
import {ConfigurationTableComponent} from "./Pages/Configurations/configuration-table/configuration-table.component";
import {ClientPageComponent} from "./Pages/Clients/client-page/client-page.component";

export const AppRoutes: Routes = [

  { path: 'incomingbackups', component: IncomingBackupComponent},
  { path: 'completedbackups', component: CompletedBackupComponent },
  { path: 'configurations', component: ConfigurationPageComponent },
  { path: 'clients', component: ClientPageComponent},
];
/*
const routes: Routes = [

  { path: 'completedbackups', component: CompletedBackupComponent },
  { path: 'incomingbackups', component: IncomingBackupComponent },


      { path: 'user', component: UserPageComponent },
        { path: 'clients', component: ClientPageComponent },
  ]
*/
