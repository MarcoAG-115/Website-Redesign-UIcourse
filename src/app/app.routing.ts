import { Routes, RouterModule } from '@angular/router';

import { CompPageComponent } from './compPage';
import { ENGR1110Component } from './ENGR1110';
import { ContentComponent } from './content/content.component';
import { ArticlesComponent } from './articles/articles.component';


const routes: Routes = [
    { path: 'compPage', component: CompPageComponent },
    { path: 'ENGR1110', component: ENGR1110Component },
    { path: 'content', component: ContentComponent },
    { path: 'articles', component: ArticlesComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'content' }
];

export const appRoutingModule = RouterModule.forRoot(routes);