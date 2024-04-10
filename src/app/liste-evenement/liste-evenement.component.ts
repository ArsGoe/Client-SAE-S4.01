import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {Observable, of} from "rxjs";
import {Evenement} from "../models/evenement";
import {EvenementService} from "../services/evenement.service";
import {DataEvenementsAsynchro} from "../services/data-evenements-asynchro";
import {DetailEvenementComponent} from "../detail-evenement/detail-evenement.component";

@Component({
  selector: 'app-personnes-liste',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderCell,
    RouterLink,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatIcon,
    DetailEvenementComponent,
  ],
  templateUrl: './liste-evenement.component.html',
  styleUrl: './liste-evenement.component.css'
})
export class ListeEvenementComponent implements OnInit {
  evenements: Evenement[] = [];
  evenements$: Observable<Evenement[]> = of([]);
  lesColonnes = ['titre'];
  dataSource: DataEvenementsAsynchro;
  constructor(
              private serviceEvenements: EvenementService,
              private route: ActivatedRoute,
              private router: Router) {
    this.evenements$ = this.serviceEvenements.getEvenements();
    this.evenements$.subscribe(reponse => {
        this.evenements = reponse;
    })

    this.dataSource = new DataEvenementsAsynchro(this.serviceEvenements);
    this.dataSource.setData();

  }


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.dataSource.setData();
    });
  }

  findByTitre(titre : string) {
    return this.evenements.find((evenement) => evenement.titre === titre);
  }
}
