// basic
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routing
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { Routes } from '@angular/router';
//components
import { AppComponent } from './app.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { ConfigurationTableComponent } from './Pages/Configurations/configuration-table/configuration-table.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ClientsTableComponent } from './Pages/Clients/clients/clients.component';
import { NewClientsComponent } from './Pages/Clients/new-clients/new-clients.component';
// dialogs
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from './_modal';
import { ClientsDialogComponent } from './Pages/Clients/clients-dialog/clients-dialog.component';
import { ConfigurationDialogComponent } from './Pages/Configurations/configuration-dialog/configuration-dialog.component';
// authentication
import { AuthModule } from './_auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';


const appRoutes: Routes = [
];
@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    ConfigurationPageComponent,
    ConfigurationTableComponent,
    IncomingBackupComponent,
    CompletedBackupComponent,
    ClientPageComponent,
    ClientsTableComponent,
    NewClientsComponent,
    RoutingComponents,
    ClientsDialogComponent,
    ConfigurationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
