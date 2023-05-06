import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  public buffer = 0.06;
  public progress = 0;

  constructor(private router: Router, private globalData: GlobalDataService) {
    setInterval(() => {
      this.buffer += 0.1;
      this.progress += 0.1;
      if (this.progress > 1) {
        this.router.navigate(['/home']);
        this.globalData.setVisibleComponents(true);
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
