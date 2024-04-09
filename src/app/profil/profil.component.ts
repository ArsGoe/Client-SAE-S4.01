import {Component, OnInit} from '@angular/core';
import {Client} from "../models/client";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../services/client.service";
import {AuthService} from "../services/auth.service";
import {Profil, User} from "../models/user";
import {map} from "rxjs";
import {copyAssets} from "@angular-devkit/build-angular/src/utils/copy-assets";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{
  user: any;
  client : any;
  clientNom : String = '';
  clientName : String = '';
  constructor(
    private authService: AuthService,
    private clientService: ClientService,
  ) {}


   ngOnInit() {
    this.authService.user$.subscribe(async user => {
      this.user = user;
      if (user) {
        this.clientService.getClient(user.id, user.jwtToken).subscribe(async client => {
          this.client = client;
          console.log(this.client);
        });
      }
    });
    console.log(this.client)
  }
}
