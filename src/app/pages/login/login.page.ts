import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword = false;

  emailInput!: string;
  passwordInput!: string;

  constructor(private globalData: GlobalDataService, private auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    this.globalData.setVisibleComponents(false);
  }

  login() {
    const email = this.emailInput;
    const password = this.passwordInput;
    if(email && password) {
        this.auth.signInWithEmailAndPassword(email, password)
        console.log("ha iniciado sesion");
        this.router.navigate(['/profile']); // Navega a la página de perfil
      }else{
        console.log("no inicia sesion");
      }
    }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

}
