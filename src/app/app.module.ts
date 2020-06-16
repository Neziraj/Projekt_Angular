
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import {MatTableModule} from '@angular/material/table';
import {ClientPageComponent} from "./Pages/Clients/client-page/client-page.component";
import {ClientsDialogComponent} from "./Pages/Clients/clients-dialog/clients-dialog.component";
import {ClientsHistoryComponent} from "./Pages/Clients/clients-history/clients-history.component";
import {NewClientsComponent} from "./Pages/Clients/new-clients";
import {ClientsTableComponent} from "./Pages/Clients/clients/clients.component";

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import {IncomingBackupComponent} from "./Pages/Backups/incoming-backup/incoming-backup.component";
import {CompletedBackupComponent} from "./Pages/Backups/completed-backups/completed-backup.component";
import {ConfigurationPageComponent} from "./Pages/Configurations/configuration-page";
import {ConfigurationTableComponent} from "./Pages/Configurations/configuration-table/configuration-table.component";
import {ConfigurationDialogComponent} from "./Pages/Configurations/configuration-dialog/configuration-dialog.component";
import {ModalModule} from "./_modal";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    IncomingBackupComponent,
    CompletedBackupComponent,
    ConfigurationPageComponent,
    ConfigurationTableComponent,
    ConfigurationDialogComponent,
    NewClientsComponent,
    ClientsHistoryComponent,
    ClientsDialogComponent,
    ClientPageComponent,
    ClientsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    ModalModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
