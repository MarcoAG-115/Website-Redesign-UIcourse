import { Routes, RouterModule } from '@angular/router';

import { CompPageComponent } from './compPage';
import { ENGR1110Component } from './ENGR1110';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
    { path: 'compPage', component: CompPageComponent },
    { path: 'ENGR1110', component: ENGR1110Component },
    { path: 'content', component: ContentComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);