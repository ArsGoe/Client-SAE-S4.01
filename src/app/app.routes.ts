import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfilComponent} from "./profil/profil.component";
import {ListeEvenementComponent} from "./liste-evenement/liste-evenement.component";
import {ListeReservationComponent} from "./liste-reservation/liste-reservation.component";
import {DetailEvenementComponent} from "./detail-evenement/detail-evenement.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'liste-evenement', component: ListeEvenementComponent},
  {path: 'liste-reservation', component: ListeReservationComponent},
  {path: 'detail-evenement/:id', component: DetailEvenementComponent},
  {path: 'suppression-evenement/:id', component: DetailEvenementComponent},
];
