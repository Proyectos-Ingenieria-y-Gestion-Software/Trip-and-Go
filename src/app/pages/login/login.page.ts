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
  
    if (email && password) {
      this.auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("Se ha iniciado sesión");
          if (userCredential.user) {
            const uid = userCredential.user.uid;
            const navExtras = {
              queryParams: {
                uid: uid
              }
            };
            this.router.navigate(['/profile'], navExtras);
          } else {
            console.log("No se pudo obtener el usuario");
          }
        })
        .catch((error) => {
          console.log("No se pudo iniciar sesión:", error);
        });
    } else {
      console.log("No se proporcionaron email y contraseña");
    }
  }
  

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

}
