import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {AuthService} from "./services/auth.service";
import {MatMenuItem} from "@angular/material/menu";
import {ClientService} from "./services/client.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbar, RouterLink, MatMenuItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'clientSae';
  private nom: any;
  userRole: any;
  constructor(private authService: AuthService, private router: Router, private clientService: ClientService) {}
  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  get auth() {
    return this.authService;
  }

  get name(){
    return this.nom;
  }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.nom = user.name;
      } else {
        this.nom = null;
      }
    });
    this.authService.user$.subscribe(async user => {
      this.userRole = user.role;
    });
  }

  isAdminGestionnaire(){
    if(this.userRole == "ADMIN" || this.userRole == "GESTIONNAIRE"){
      return true
    }
    else{
      return false
    }
  }
}


