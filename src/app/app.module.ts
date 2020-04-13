import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Pages/Home/home-page/home-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { NavbarComponent } from './Pages/Home/navbar/navbar.component';
import {HomePageDataService} from './Services/home.page.data.service';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { BackupsPageComponent } from './Pages/Backups/backups-page/backups-page.component';
import {Routes} from '@angular/router';
import {ClientPageComponent} from './Pages/Clients/client-page/client-page.component';
import { OngoingBackupsComponent } from './Pages/Home/ongoing-backups/ongoing-backups.component';
import { ClientTableComponent } from './Pages/Clients/client-table/client-table.component';
import { NewClientTableComponent } from './Pages/Clients/new-client-table/new-client-table.component';
import { ClientHistoryTableComponent } from './Pages/Clients/client-history-table/client-history-table.component';
import { ConfigurationTableComponent } from './Pages/Configurations/configuration-table/configuration-table.component';
import { IncomingBackupComponent } from './Pages/Backups/incoming-backup/incoming-backup.component';
import {CompletedBackupComponent} from './Pages/Backups/completed-backups/completed-backup.component';


const appRoutes: Routes = [
  { path: 'client', component: ClientPageComponent},
  { path: '**', component: HomePageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    NavbarComponent,
    ConfigurationPageComponent,
    BackupsPageComponent,
    OngoingBackupsComponent,
    ClientTableComponent,
    NewClientTableComponent,
    ClientHistoryTableComponent,
    ConfigurationTableComponent,
    IncomingBackupComponent,
    CompletedBackupComponent,
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
