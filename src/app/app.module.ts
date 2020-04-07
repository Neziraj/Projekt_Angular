import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDialogueComponent } from './Dialogues/event-dialogue/event-dialogue.component';
import { BackupDialogueComponent } from './Dialogues/backup-dialogue/backup-dialogue.component';
import { HomePageComponent } from './NavBar/home-page/home-page.component';
import { ClientsComponent } from './NavBar/clients/clients.component';
import { ConfigsComponent } from './NavBar/configs/configs.component';
import { BackupsComponent } from './backups/backups.component';
import { UserMenuComponent } from './NavBar/user-menu/user-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDialogueComponent,
    BackupDialogueComponent,
    HomePageComponent,
    ClientsComponent,
    ConfigsComponent,
    BackupsComponent,
    UserMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
