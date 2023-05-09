import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-fqa',
  templateUrl: 'fqa.page.html',
  styleUrls: ['fqa.page.scss'],
})
export class FQAPage {
  @ViewChild('square', {static: true}) square!: ElementRef;

  adjustSquareHeight() {
    const squareEl = this.square.nativeElement;
    const textEl = squareEl.querySelector('.text');
    squareEl.style.maxHeight = `${textEl.offsetHeight + 20}px`;
}

  showText1 = false;
  showText2 = false;
  showText3 = false;
  showText4 = false;

  showText(squareNumber: number) {
    switch (squareNumber) {
      case 1:
        this.showText1 = !this.showText1;
        break;
      case 2:
        this.showText2 = !this.showText2;
        break;
      case 3:
        this.showText3 = !this.showText3;
        break;
      case 4:
        this.showText4 = !this.showText4;
        break;
      default:
        break;
    }
  
    setTimeout(() => {
      this.adjustSquareHeight();
    }, 0);
  }
}
