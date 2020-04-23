import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { Routes } from '@angular/router';
import { ConfigurationTableComponent } from './Pages/Configurations/configuration-table/configuration-table.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ClientsTableComponent } from './Pages/Clients/clients/clients.component';
import { NewClientsComponent } from './Pages/Clients/new-clients/new-clients.component';
import { LoginComponent } from './Pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { ModalModule } from './_modal';



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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
