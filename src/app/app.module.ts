import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EventDialogueComponent } from './Dialogues/event-dialogue/event-dialogue.component';
import { BackupDialogueComponent } from './Backup/backup-dialogue/backup-dialogue.component';
import { HomePageComponent } from './Pages/Home/home-page/home-page.component';
import { BackupTableComponent } from './Backup/backup-table/backup-table.component';
import { ConfigTableComponent } from './Config/config-table/config-table.component';
import { ClientTableComponent } from './Client/Table/client-table/client-table.component';
import { BackupPageComponent } from './Backup/backup-page/backup-page.component';
import { UserPageComponent } from './Pages/User/user-page/user-page.component';
import { ClientPageComponent } from './Client/client-page/client-page.component';
import { ConfigPageComponent } from './Config/config-page/config-page.component';
import { ClientHistoryTableComponent } from './Client/Table/client-history-table/client-history-table.component';
import { NewClientTableComponent } from './Client/Table/new-client-table/new-client-table.component';
import { NavbarComponent } from './Pages/Home/navbar/navbar.component';
import { ConfigDialogueComponent } from './Dialogues/config-dialogue/config-dialogue.component';
import { UserTableComponent } from './user-table/user-table.component';
import {HomePageDataService} from './Services/home.page.data.service';
import { ConfigurationPageComponent } from './Pages/Configurations/configuration-page/configuration-page.component';
import { BackupsPageComponent } from './Pages/Backups/backups-page/backups-page.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDialogueComponent,
    BackupDialogueComponent,
    HomePageComponent,
    BackupTableComponent,
    ConfigTableComponent,
    ClientTableComponent,
    BackupPageComponent,
    UserPageComponent,
    ClientPageComponent,
    ConfigPageComponent,
    ClientHistoryTableComponent,
    NewClientTableComponent,
    NavbarComponent,
    ConfigDialogueComponent,
    UserTableComponent,
    ConfigurationPageComponent,
    BackupsPageComponent,
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
