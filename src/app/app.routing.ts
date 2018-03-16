import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const arr: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventsComponent },
    { path: 'addEvent', component: AddEventComponent },
    { path: 'updateEvent/:id', component: UpdateEventComponent }
];

export const routing = RouterModule.forRoot(arr);
