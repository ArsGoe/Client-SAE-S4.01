import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {first, tap} from "rxjs";
import {EvenementService} from "../services/evenement.service";
import {Evenement, TypeEvenement} from "../models/evenement";
import {Lieu} from "../models/lieu";

@Component({
  selector: 'app-update-evenement',
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
  templateUrl: './modification-evenement.component.html',
  styleUrl: './modification-evenement.component.css'
})
export class ModificationEvenementComponent implements OnInit {
  ModificationForm = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date_event: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    lieu: new FormControl('', [Validators.required])
    },
  );
  event: any = "";

  constructor(private route: ActivatedRoute, private EvenementService: EvenementService, private router: Router) {
  }

  ngOnInit() {
    const eventId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.EvenementService.getEvenement(eventId).subscribe(evenement => {
        this.event = evenement
        this.updateFormControls()
      });
  }




  updateFormControls() {
    this.ModificationForm.get('titre')?.setValue(this.event['0']['titre']);
    this.ModificationForm.get('description')?.setValue(this.event['0']['description']);
    this.ModificationForm.get('date_event')?.setValue(this.event['0']['date_event']);
    this.ModificationForm.get('type')?.setValue(this.event['0']['type']);
    const lieuString = this.event['0']['lieu']['id']+";"+ this.event['0']['lieu']['nom'] +";"+ this.event['0']['lieu']['adresse'] +";"+ this.event['0']['lieu']['code_postal'] +";"+ this.event['0']['lieu']['ville'] +";"+ this.event['0']['lieu']['lat'] +";"+ this.event['0']['lieu']['long'];
    this.ModificationForm.get('lieu')?.setValue(lieuString);
  }

  update() {
    if (!this.ModificationForm.valid) {
      return;
    }
    const lieuString: string = this.ModificationForm.value.lieu as string;

    const splittedLieu = lieuString.split(";");

    const lieu: Lieu = {
      id: parseInt(splittedLieu[0]),
      nom: splittedLieu[1],
      adresse: splittedLieu[2],
      code_postal: splittedLieu[3],
      ville: splittedLieu[4],
      lat: parseFloat(splittedLieu[5]),
      long: parseFloat(splittedLieu[6]),
    };

    const evenement: Evenement = {
      id: this.event,
      titre: this.ModificationForm.value.titre?? "" ,
      description: this.ModificationForm.value.description?? "",
      date_event: new Date(this.ModificationForm.value.date_event as string)?? new Date(2020, 1, 1),
      type: (function(typeString: string): TypeEvenement {
        switch (typeString) {
          case 'CONCERT': // Add cases for all possible enum values
            return TypeEvenement.CONCERT;
          case 'THEATRE':
            return TypeEvenement.THEATRE;
          case 'FESTIVAL': // Add cases for all possible enum values
            return TypeEvenement.FESTIVAL;
          case 'CINEMA':
            return TypeEvenement.CINEMA;
          default:
            return TypeEvenement.COMPETITION; // Handle invalid string values (optional)
        }
      })(this.ModificationForm.value.type as string),
      lieu:lieu
    };
    this.EvenementService.updateEvenement(evenement).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/detail-evenement/'+this.event['0']['id'];
        this.router.navigateByUrl(returnUrl);
      },
      error: error => {
        console.log(error);
      }
      }
    )
  }

  get titre() {
    return this.ModificationForm.get('titre');
  }

  get description() {
    return this.ModificationForm.get('description');
  }

  get date_event() {
    return this.ModificationForm.get('date_event');
  }

  get type() {
    return this.ModificationForm.get('type');
  }

  get lieu() {
    return this.ModificationForm.get('lieu');
  }
}
