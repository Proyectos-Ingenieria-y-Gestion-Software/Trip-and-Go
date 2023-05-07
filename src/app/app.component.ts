import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  visibleComponents!: boolean;
  constructor(private globalData: GlobalDataService) {
    this.globalData.getVisibleComponents().subscribe(value => {
      this.visibleComponents = value;
    });
   }

}
