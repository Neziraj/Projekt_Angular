import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Pages/Home/home-page/home-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { HomeNavbarComponent } from './Pages/Home/navbar/home-navbar.component';
import { HomePageDataService } from './Services/home.page.data.service';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { BackupsPageComponent } from './Pages/Backups/backups-page/backups-page.component';
import { Routes } from '@angular/router';
import { OngoingBackupsComponent } from './Pages/Home/ongoing-backups/ongoing-backups.component';
import { ConfigurationTableComponent } from './Pages/Configurations/configuration-table/configuration-table.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
import { CompletedBackupComponent } from './Pages/Backups/completed-backups/completed-backup.component';
import { ClientPageComponent } from './Pages/Clients/client-page/client-page.component';
import { ClientsComponent } from './Pages/Clients/clients/clients.component';
import { NewClientsComponent } from './Pages/Clients/new-clients/new-clients.component';
import { ClientsHistoryComponent } from './clients-history/clients-history.component';


const appRoutes: Routes = [
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    HomeNavbarComponent,
    ConfigurationPageComponent,
    BackupsPageComponent,
    OngoingBackupsComponent,
    ConfigurationTableComponent,
    IncomingBackupComponent,
    CompletedBackupComponent,
    ClientPageComponent,
    ClientsComponent,
    NewClientsComponent,
    ClientsHistoryComponent,
    RoutingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomePageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
