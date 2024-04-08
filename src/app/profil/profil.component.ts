import {Component, OnInit} from '@angular/core';
import {Client} from "../models/client";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{
  client: Client | undefined;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const clientId = params['id'];
      if (clientId) {
        this.clientService.getClient(clientId).subscribe(client => {
          this.client = client;
        });
      }
    });
  }
}
