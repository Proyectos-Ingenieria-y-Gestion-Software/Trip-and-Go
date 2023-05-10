import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showPassword = false;

  constructor() { }

  ngOnInit() {
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  register(){
    
  }

}
