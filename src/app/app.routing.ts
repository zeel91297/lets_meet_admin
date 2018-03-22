import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

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


const arr: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'events', component: EventsComponent },
    { path: 'addEvent', component: AddEventComponent },
    { path: 'updateEvent/:id', component: UpdateEventComponent },

    { path: 'communities', component: CommunitiesComponent },
    { path: 'addCommunity', component: AddCommunityComponent },
    { path: 'updateCommunity/:id', component: UpdateCommunityComponent },

    { path: 'users', component: UsersComponent },

    { path: 'posts', component: PostsComponent },
    { path: 'addPost', component: AddPostComponent },
    { path: 'updatePost/:id', component: UpdatePostComponent },

    { path: 'feedbacks', component: FeedbacksComponent }
];

export const routing = RouterModule.forRoot(arr);
