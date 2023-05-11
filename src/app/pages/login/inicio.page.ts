import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  showPassword = false;

  @ViewChild('emailInput', { static: false }) emailInput!: IonInput;
  @ViewChild('passwordInput', { static: false }) passwordInput!: IonInput;

  constructor() {
  }

  ngOnInit() {}

  login() {
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    // Aquí se puede comprobar si el usuario existe en Firebase y realizar la lógica de inicio de sesión
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  

}
