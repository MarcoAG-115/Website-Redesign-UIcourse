import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CompPageComponent } from './compPage';
import { ENGR1110Component } from './ENGR1110';
import { appRoutingModule } from './app.routing';
import { ArticlesComponent } from './articles/articles.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CompPageComponent,
    ContentComponent,
    ENGR1110Component,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
