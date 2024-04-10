import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ClientService} from "../services/client.service";
import {UserService} from "../services/user.service";
import {first} from "rxjs";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-update-client',
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
    MatError
  ],
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent implements OnInit{
  user: any = "";

  constructor(private route: ActivatedRoute, private clientServices: ClientService, private userService: UserService, private router: Router) {
  }
  ngOnInit(): void {
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.userService.getUser(id).subscribe( user => {
      console.log("adzazdazd",user)
      this.user = user;
      this.updateFormControls();
    });
  }

  form: FormGroup = new FormGroup({
    nom: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    ville: new FormControl("", [Validators.required]),
    code_postal: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    role: new FormControl("", [Validators.required]),
  });

  updateFormControls() {
    if (this.user) {
      this.nom?.setValue(this.user.message?.nom || '');
      this.prenom?.setValue(this.user.message?.prenom || '');
      this.adresse?.setValue(this.user.message?.adresse || '');
      this.ville?.setValue(this.user.message?.ville || '');
      this.code_postal?.setValue(this.user.message?.code_postal || '');
      this.name?.setValue(this.user.message?.name || '');
      this.email?.setValue(this.user.message?.email || '');
      this.role?.setValue(this.user.message?.role || '');
    }
  }

  get nom() {
    return this.form.get('nom');
  }

  get prenom() {
    return this.form.get('prenom');
  }

  get adresse() {
    return this.form.get('adresse');
  }

  get ville() {
    return this.form.get('ville');
  }

  get code_postal() {
    return this.form.get('code_postal');
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get role() {
    return this.form.get('role');
  }

  enregistrer(){
    if (!this.form.valid) {
      return;
    }
    // this.userService.updateUser({id:this.user.message.id, role:this.role!.value, name: this.name!.value, email: this.email!.value, jwtToken: this.user.message.jwtToken})
    this.clientServices.updateClient({id: this.user.message.id, user: this.user.message.user, avatar: this.user.message.avatar, nom: this.nom!.value, prenom : this.prenom!.value, adresse: this.adresse!.value, ville: this.ville!.value, code_postal: this.code_postal!.value})
      .pipe(first())
      .subscribe({
          next: () => {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/detail-client/'+this.user.message.id;
            this.router.navigateByUrl(returnUrl);
          },
          error: error => {
            console.log(error);
          }
        }
      );
  }

}
