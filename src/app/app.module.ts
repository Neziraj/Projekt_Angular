import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDialogueComponent } from './Dialogues/event-dialogue/event-dialogue.component';
import { BackupDialogueComponent } from './Backup/backup-dialogue/backup-dialogue.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { ClientsComponent } from './NavBar/clients/clients.component';
import { ConfigsComponent } from './NavBar/configs/configs.component';
import { UserMenuComponent } from './NavBar/user-menu/user-menu.component';
import { BackupTableComponent } from './Backup/backup-table/backup-table.component';
import { ConfigTableComponent } from './Config/config-table/config-table.component';
import { ClientTableComponent } from './Client/Table/client-table/client-table.component';
import { BackupPageComponent } from './Backup/backup-page/backup-page.component';
import { UserPageComponent } from './User/user-page/user-page.component';
import { ClientPageComponent } from './Client/client-page/client-page.component';
import { ConfigPageComponent } from './Config/config-page/config-page.component';
import { ClientButtonComponent } from './Client/client-button/client-button.component';
import { AddClientButtonComponent } from './Client/add-client-button/add-client-button.component';
import { ClientHistoryTableComponent } from './Client/Table/client-history-table/client-history-table.component';
import { NewClientTableComponent } from './Client/Table/new-client-table/new-client-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientsButtonComponent } from './Client/Button/clients-button/clients-button.component';
import { AddingClientButtonComponent } from './Client/Button/adding-client-button/adding-client-button.component';
import { EditClientButtonComponent } from './Client/Button/edit-client-button/edit-client-button.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDialogueComponent,
    BackupDialogueComponent,
    HomePageComponent,
    ClientsComponent,
    ConfigsComponent,
    UserMenuComponent,
    BackupTableComponent,
    ConfigTableComponent,
    ClientTableComponent,
    BackupPageComponent,
    UserPageComponent,
    ClientPageComponent,
    ConfigPageComponent,
    ClientButtonComponent,
    AddClientButtonComponent,
    ClientHistoryTableComponent,
    NewClientTableComponent,
    NavBarComponent,
    NavbarComponent,
    ClientsButtonComponent,
    AddingClientButtonComponent,
    EditClientButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
