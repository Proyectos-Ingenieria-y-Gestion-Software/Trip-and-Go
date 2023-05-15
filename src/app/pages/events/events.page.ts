import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Event } from 'src/app/interfaces/event';
import { EventsService } from 'src/app/services/events-service.service';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events?: Event[];

  constructor(private navCtrl: NavController, private eventsService: EventsService, private globalData: GlobalDataService) { }

  ngOnInit() {
    this.globalData.setVisibleComponents(true);
    this.eventsService.getEvents().subscribe(events => {
      this.events = events
    });
  }

  viewEvent(event: Event) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        event
      }
    };
    this.navCtrl.navigateForward('event-details', navigationExtras);
  }

}
