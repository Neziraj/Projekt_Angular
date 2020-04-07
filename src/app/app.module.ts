import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { EventDialogueComponent } from './event-dialogue/event-dialogue.component';
import { BackpuDialogueComponent } from './backpu-dialogue/backpu-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    NavbarComponent,
    ButtonComponent,
    EventDialogueComponent,
    BackpuDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
