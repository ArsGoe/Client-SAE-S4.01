import {Component, Input} from '@angular/core';
import {Evenement, UNKNOWN_EVENEMENT} from "../models/evenement";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {EvenementService} from "../services/evenement.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {Observable, of} from "rxjs";
import {DataEvenementAsynchro} from "../services/data-evenement-asynchro";

@Component({
  selector: 'app-detail-evenement',
  standalone: true,
  imports: [
    RouterLink,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './detail-evenement.component.html',
  styleUrl: './detail-evenement.component.css'
})
export class DetailEvenementComponent {
  evenements: Evenement[] = [];
  evenements$: Observable<Evenement[]> = of([]);
  lesColonnes = ['titre','description', 'date_event', 'type'];
  lesColonnes1 = ['modif'];
  dataSource: DataEvenementAsynchro;
  _evenement: Evenement = UNKNOWN_EVENEMENT;
  userRole: any;

  constructor(private route: ActivatedRoute, private evenementServices: EvenementService) {
    this.dataSource = new DataEvenementAsynchro(this.evenementServices, (parseInt(this.route.snapshot.paramMap.get('id')?? "0") || 0));
    console.log("a")
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.evenementServices.getEvenement((+(this.route.snapshot.paramMap.get('id')?? 0))));
    this.route.queryParamMap.subscribe(params => {
      this.dataSource.setData();
    });
    console.log(this.dataSource)
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
