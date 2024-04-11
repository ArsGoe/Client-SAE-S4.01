import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";
import {UserService} from "../services/user.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {first} from "rxjs";
import {ReservationService} from "../services/reservation.service";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-update-reservation',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatError
  ],
  templateUrl: './update-reservation.component.html',
  styleUrl: './update-reservation.component.css'
})
export class UpdateReservationComponent implements OnInit{
  reservation: any = "";

  constructor(private route: ActivatedRoute, private clientServices: ClientService, private reservationService: ReservationService, private router: Router) {
  }
  ngOnInit(): void {
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.reservationService.getReservation(id).subscribe( reservation => {
      console.log("adzazdazd",reservation)
      this.reservation = reservation;
      this.updateFormControls();
    });
  }

  form: FormGroup = new FormGroup({
    statut: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    montant: new FormControl("", [Validators.required]),
  });

  updateFormControls() {
    if (this.reservation) {
      console.log("AAAAA",this.reservation.data[0].statut)
      this.statut?.setValue(this.reservation.data[0].statut || '');
      this.date?.setValue(this.reservation.data[0].date || '');
      this.montant?.setValue(this.reservation.data[0].montant || '');
    }
  }

  get statut() {
    return this.form.get('nom');
  }

  get date() {
    return this.form.get('prenom');
  }

  get montant() {
    return this.form.get('adresse');
  }

  enregistrer(){
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profil';
    this.router.navigateByUrl(returnUrl);
  }
}
