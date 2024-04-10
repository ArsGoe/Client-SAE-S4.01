import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ClientService} from "../services/client.service";
import {Client} from "../models/client";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {Observable, of} from "rxjs";
import {Evenement} from "../models/evenement";
import {DataEvenementsAsynchro} from "../services/data-evenements-asynchro";
import {EvenementService} from "../services/evenement.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {convertOutputFile} from "@angular-devkit/build-angular/src/tools/esbuild/utils";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-liste-clients',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatIcon,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    RouterLink,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './liste-clients.component.html',
  styleUrl: './liste-clients.component.css'
})
export class ListeClientsComponent implements OnInit{

  clients: Client[] = [];
  user: any;
  constructor(
    private serviceClients: ClientService,
    private serviceUser: UserService,
    private route: ActivatedRoute,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.serviceClients.getClients()
      .subscribe(clients => {
        this.clients = clients.data;
        console.log(this.clients)
      });
  }

  getUser(id:number){
    this.serviceUser.getUser(id)
      .subscribe(user => {
        this.user = user;
      });
  }

  protected readonly onclick = onclick;
}
