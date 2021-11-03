import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({ 
    selector: 'app-compPage',
    templateUrl: 'compPage.component.html',
    styleUrls: ['./compPage.component.scss']
})
export class CompPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth'
      };
}