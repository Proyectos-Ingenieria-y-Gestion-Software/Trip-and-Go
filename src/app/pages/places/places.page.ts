import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from 'src/app/interfaces/place';
import { PlacesService } from 'src/app/services/places-service.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places?: Place[];

  constructor(private router: Router, private placesService: PlacesService) {

  }

  ngOnInit() {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places
    })
  }

}
