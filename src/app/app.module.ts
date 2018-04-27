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
  MatNativeDateModule,
  MatRadioModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from './header.component';

import { EventsDbService } from './providers/eventsDb/events-db.service';
import { CommunityDbService } from './providers/communitiesDb/community-db.service';
import { UsersDbService } from './providers/usersDb/users-db.service';
import { PostsDbService } from './providers/postsDb/posts-db.service';
import { FeedbackDbService } from './providers/feedbackDb/feedback-db.service';
import { RsvpDbService } from './providers/rsvpDb/rsvp-db.service';

import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { CommunitiesComponent } from './communities/communities.component';
import { AddCommunityComponent } from './add-community/add-community.component';
import { UpdateCommunityComponent } from './update-community/update-community.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { LoginComponent } from './login/login.component';
import { UnapprovedEventsComponent } from './unapproved-events/unapproved-events.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeaderComponent,
    AddEventComponent,
    UpdateEventComponent,
    CommunitiesComponent,
    UsersComponent,
    PostsComponent,
    FeedbacksComponent,
    UpdateCommunityComponent,
    AddCommunityComponent,
    AddPostComponent,
    UpdatePostComponent,
    LoginComponent,
    UnapprovedEventsComponent,
    ViewEventComponent,
    AddUserComponent,
    NotFoundComponent,
    DashboardComponent,
    DemoComponent,
    UpdateUserComponent
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
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [EventsDbService,
    CommunityDbService,
    UsersDbService,
    PostsDbService,
    FeedbackDbService,
    RsvpDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
