import {Component, Input} from '@angular/core';
import {Evenement, UNKNOWN_EVENEMENT} from "../models/evenement";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {EvenementService} from "../services/evenement.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-detail-evenement',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './detail-evenement.component.html',
  styleUrl: './detail-evenement.component.css'
})
export class DetailEvenementComponent {
  @Input() _evenement: Evenement = UNKNOWN_EVENEMENT;


  constructor(private route: ActivatedRoute, private evenementServices: EvenementService) {
  }

  ngOnInit(): void {
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.evenementServices.getEvenement(id).subscribe((evenement) => {
      console.log(evenement)
      this._evenement = evenement
    })
  }

  get evenement() {
    return this._evenement;
  }

  suppression() {
    this.evenementServices.deleteEvenement(this.evenement.id).subscribe(
      (response) => {
        console.log("Event deleted successfully:", response);
    },
      (error) => {
        console.error("Error deleting event:", error);
    })
  }
}
