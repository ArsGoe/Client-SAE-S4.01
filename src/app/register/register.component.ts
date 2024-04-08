import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RegisterRequest} from "../models/user";
import {tap} from "rxjs";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
    MatButton
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      codePostal: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required])
    },
  );


  constructor(private authService: AuthService, private router: Router) {
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.register(<RegisterRequest>{...this.registerForm.value}).pipe(
      tap(() => this.router.navigate(['/']))
    ).subscribe();
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get prenom() {
    return this.registerForm.get('prenom');
  }

  get ville() {
    return this.registerForm.get('ville');
  }

  get codePostal() {
    return this.registerForm.get('codePostal');
  }

  get adresse() {
    return this.registerForm.get('adresse');
  }

  get passwordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }

  get name() {
    return this.registerForm.get('name');
  }
}
