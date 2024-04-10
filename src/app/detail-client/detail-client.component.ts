import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {EvenementService} from "../services/evenement.service";
import {ClientService} from "../services/client.service";
import {ANONYMOUS_CLIENT, Client} from "../models/client";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-detail-client',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './detail-client.component.html',
  styleUrl: './detail-client.component.css'
})
export class DetailClientComponent implements OnInit{
  user: any;

  constructor(private route: ActivatedRoute, private clientServices: ClientService, private userService: UserService) {
  }
  ngOnInit(): void {
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.userService.getUser(id).subscribe( user => {
      console.log("ADAZD",user)
      this.user = user;
    });
  }
}
