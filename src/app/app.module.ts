import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { Routes } from '@angular/router';
import { ConfigurationTableComponent } from './Pages/Configurations/configuration-table/configuration-table.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ClientsTableComponent } from './Pages/Clients/clients/clients.component';
import { NewClientsComponent } from './Pages/Clients/new-clients/new-clients.component';
import { ClientsHistoryComponent } from './Pages/Clients/clients-history/clients-history.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';



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
    ClientsHistoryComponent,
    RoutingComponents,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
