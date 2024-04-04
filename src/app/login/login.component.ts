import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {AuthService} from "../services/auth.service";
import {MatButton} from "@angular/material/button";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatError,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl("robert.duchmol@domain.fr", [Validators.required, Validators.email]),
    password: new FormControl("GrosSecret", [Validators.required]),
  });

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login() {

  }
}
