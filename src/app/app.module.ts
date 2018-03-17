import { BrowserModule } from '@angular/platform-browser';
import { NgModule, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// tslint:disable-next-line:max-line-length
import {
  MatButtonModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [EventsDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
