import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showPassword = false;
  credentials!: FormGroup;

  name!: string;
  surname!: string;
  email!: string;
  password!: string;
  repeatPassword!: string;

  usuario: User = {

    
  };

  constructor(private globalData: GlobalDataService, private auth: AngularFireAuth,private af: AngularFirestore) { }

  ngOnInit() {
    this.globalData.setVisibleComponents(false);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  register(){
    const email = this.email;
    const password = this.password;
    const repeatPassword = this.repeatPassword;

    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])(?=.{6,})/;

    const isMatching = regex.test(password) && regex.test(repeatPassword);

    if (email && password && isMatching) {
      this.auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
        this.usuario.name = this.name;
        this.usuario.surname = this.surname;
        this.usuario.email = email;
  
        this.af.collection('usuarios').doc(userCredential.user?.uid).set(this.usuario);
      });
        console.log("se ha registrado correctamente");
        }else{
        console.log("no se ha registrado correctamente");
        if (!email || !password || !repeatPassword) {
          this.setFieldsInputStyle('red');
          alert("All fields are required.");
        } else if (!email) {
          this.setEmailInputStyle('red');
          alert("Please enter a valid email address.");
        } else if (!password || !regex.test(password)) {
          this.setPasswordInputStyle('red');
          alert("Please enter a valid password. It must be at least 6 characters long, contain one capital letter, one digit and one special character.");
        } else if (!repeatPassword || !isMatching) {
          this.setRepeatPasswordInputStyle('red');
          alert("The passwords do not match. Please enter them again.");
        }
    }
  }

  setFieldsInputStyle(color: string) {
    const emailInput = document.getElementById('email-input') as HTMLInputElement;
    const nameInput = document.getElementById('name-input') as HTMLInputElement;
    const surnameInput = document.getElementById('surname-input') as HTMLInputElement;
    const passwordInput = document.getElementById('password-input') as HTMLInputElement;
    const repeatPasswordInput = document.getElementById('repeat-password-input') as HTMLInputElement;
  
    if (emailInput && emailInput.value === '') {
      emailInput.style.borderColor = color;
    }
    if (nameInput && nameInput.value === '') {
      nameInput.style.borderColor = color;
    }
    if (surnameInput && surnameInput.value === '') {
      surnameInput.style.borderColor = color;
    }
    if (passwordInput && passwordInput.value === '') {
      passwordInput.style.borderColor = color;
    }
    if (repeatPasswordInput && repeatPasswordInput.value === '') {
      repeatPasswordInput.style.borderColor = color;
    }
  }

  setEmailInputStyle(color: string) {
    const emailInput = document.getElementById('email-input');
    if (emailInput) {
      emailInput.style.borderColor = color;
    }
  }

  setPasswordInputStyle(color: string) {
    const passwordInput = document.getElementById('password-input');
    if (passwordInput) {
      passwordInput.style.borderColor = color;
    }
  }

  setRepeatPasswordInputStyle(color: string) {
    const repeatPasswordInput = document.getElementById('repeat-password-input');
    if (repeatPasswordInput) {
      repeatPasswordInput.style.borderColor = color;
    }
  }
}


