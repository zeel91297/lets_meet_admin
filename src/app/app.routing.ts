import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

import { CommunitiesComponent } from './communities/communities.component';

import { UsersComponent } from './users/users.component';

import { PostsComponent } from './posts/posts.component';

import { FeedbacksComponent } from './feedbacks/feedbacks.component';

const arr: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventsComponent },
    { path: 'addEvent', component: AddEventComponent },
    { path: 'updateEvent/:id', component: UpdateEventComponent },
    { path: 'communities', component: CommunitiesComponent },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'feedbacks', component: FeedbacksComponent }
];

export const routing = RouterModule.forRoot(arr);
