import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museum } from 'src/app/interfaces/museum';

@Component({
  selector: 'app-museum-details',
  templateUrl: './museum-details.page.html',
  styleUrls: ['./museum-details.page.scss'],
})
export class MuseumDetailsPage implements OnInit {

  museum!: Museum;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['museum']) {
        this.museum = params['museum'];
      }
    });
  }

}
