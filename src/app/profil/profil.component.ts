import {Component, OnInit} from '@angular/core';
import {Client} from "../models/client";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ClientService} from "../services/client.service";
import {AuthService} from "../services/auth.service";
import {Profil, User} from "../models/user";
import {map} from "rxjs";
import {copyAssets} from "@angular-devkit/build-angular/src/utils/copy-assets";
import {ReservationService} from "../services/reservation.service";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{
  user: any;
  client : any;
  reservations : any;
  cheminImage:any = "../assets/avatar_default.png";

  constructor(
    private authService: AuthService,
    private clientService: ClientService,
    private reservationService: ReservationService,
  ) {}


   ngOnInit() {
    this.authService.user$.subscribe(async user => {
      this.user = user;
      if (user) {
        this.clientService.getClient(user.id).subscribe(async client => {
          this.client = client;
        });
      }
    });
    this.reservationService.getReservations().subscribe( reservations => {
      console.log(reservations)
      this.reservations = reservations;
    });
  }
}
