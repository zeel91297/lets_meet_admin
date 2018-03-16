import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from './header.component';

import { EventsComponent } from './events/events.component';
import { EventsDbService } from './providers/eventsDb/events-db.service';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeaderComponent,
    AddEventComponent,
    UpdateEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [EventsDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
