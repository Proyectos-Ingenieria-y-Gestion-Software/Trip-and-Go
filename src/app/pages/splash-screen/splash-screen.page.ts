import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  public buffer = 0.06;
  public progress = 0;

  constructor(private router: Router) {
    setInterval(() => {
      this.buffer += 0.1;
      this.progress += 0.1;
      if (this.progress > 1) {
        this.router.navigate(['/home']);
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
