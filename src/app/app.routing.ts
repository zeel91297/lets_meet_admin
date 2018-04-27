import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UnapprovedEventsComponent } from './unapproved-events/unapproved-events.component';
import { ViewEventComponent } from './view-event/view-event.component';

import { CommunitiesComponent } from './communities/communities.component';
import { AddCommunityComponent } from './add-community/add-community.component';
import { UpdateCommunityComponent } from './update-community/update-community.component';

import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

import { FeedbacksComponent } from './feedbacks/feedbacks.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const arr: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'events', component: EventsComponent },
    { path: 'addEvent', component: AddEventComponent },
    { path: 'updateEvent/:id', component: UpdateEventComponent },
    { path: 'unApprovedEvents', component: UnapprovedEventsComponent },
    { path: 'viewEvent/:id', component: ViewEventComponent },
    { path: 'demo', component: DemoComponent },

    { path: 'communities', component: CommunitiesComponent },
    { path: 'addCommunity', component: AddCommunityComponent },
    { path: 'updateCommunity/:id', component: UpdateCommunityComponent },

    { path: 'users', component: UsersComponent },
    { path: 'addUser', component: AddUserComponent },

    { path: 'posts', component: PostsComponent },
    { path: 'addPost', component: AddPostComponent },
    { path: 'updatePost/:id', component: UpdatePostComponent },
    { path: 'updateuser/:id', component: UpdateUserComponent },

    { path: 'feedbacks', component: FeedbacksComponent },

    { path: 'notFound', component: NotFoundComponent },
    { path: '**', redirectTo: '/notFound', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(arr);
