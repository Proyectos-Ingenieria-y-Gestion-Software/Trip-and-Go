import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  @ViewChild('emailInput', { static: true }) emailInput!: IonInput;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
   
  }
  

  resetPassword() {
    const userEmail = this.emailInput.value as string;
    console.log('El correo electrónico ingresado es:', userEmail);
    this.auth.sendPasswordResetEmail(userEmail);
  }

}
