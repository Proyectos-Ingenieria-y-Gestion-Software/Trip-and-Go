import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showPassword = false;
  credentials!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  register(){

  }

}
