import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {AuthService} from "./services/auth.service";
import {MatMenuItem} from "@angular/material/menu";

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
  constructor(private authService: AuthService, private router: Router) {}
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
  }
}


