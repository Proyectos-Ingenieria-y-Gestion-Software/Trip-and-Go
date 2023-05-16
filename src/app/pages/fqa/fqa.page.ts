import { Component } from '@angular/core';

@Component({
  selector: 'app-fqa',
  templateUrl: 'fqa.page.html',
  styleUrls: ['fqa.page.scss'],
})
export class FQAPage {
  isCardExpanded1 = false;
  isCardExpanded2 = false;
  isCardExpanded3 = false;

  toggleCard1() {
    this.isCardExpanded1 = !this.isCardExpanded1;
  }

  toggleCard2() {
    this.isCardExpanded2 = !this.isCardExpanded2;
  }

  toggleCard3() {
    this.isCardExpanded3 = !this.isCardExpanded3;
  }
}
