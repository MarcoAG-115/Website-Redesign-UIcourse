import { Routes, RouterModule } from '@angular/router';

import { CompPageComponent } from './compPage';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
    { path: 'compPage', component: CompPageComponent },
    { path: 'content', component: ContentComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);