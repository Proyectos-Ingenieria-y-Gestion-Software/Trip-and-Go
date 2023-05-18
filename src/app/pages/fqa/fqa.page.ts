import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-fqa',
  templateUrl: 'fqa.page.html',
  styleUrls: ['fqa.page.scss'],
})
export class FQAPage implements OnInit {
  isCardExpanded1 = false;
  isCardExpanded2 = false;
  isCardExpanded3 = false;
  isCardExpanded4 = false;

  constructor(private globalData: GlobalDataService) {

  }
  ngOnInit(): void {
    this.globalData.setVisibleComponents(true);
  }

  toggleCard(num: number) {
    switch (num) {
      case 1:
        this.isCardExpanded1 = !this.isCardExpanded1;
        break;
      case 2:
        this.isCardExpanded2 = !this.isCardExpanded2;
        break;
      case 3:
        this.isCardExpanded3 = !this.isCardExpanded3;
        break;
      case 4:
        this.isCardExpanded4 = !this.isCardExpanded4;
        break;
      default:
        break;
    }
  }

}
