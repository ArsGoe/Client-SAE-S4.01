import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfilComponent} from "./profil/profil.component";
import {ListeEvenementComponent} from "./liste-evenement/liste-evenement.component";
import {ListeReservationComponent} from "./liste-reservation/liste-reservation.component";
import {DetailEvenementComponent} from "./detail-evenement/detail-evenement.component";
import {ListeClientsComponent} from "./liste-clients/liste-clients.component";
import {DetailClientComponent} from "./detail-client/detail-client.component";
import {UpdateClientComponent} from "./update-client/update-client.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'liste-evenement', component: ListeEvenementComponent},
  {path: 'liste-reservation', component: ListeReservationComponent},
  {path: 'liste-clients', component: ListeClientsComponent},
  {path: 'detail-evenement/:id', component: DetailEvenementComponent},
  {path: 'detail-client/:id', component: DetailClientComponent},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'suppression-evenement/:id', component: DetailEvenementComponent},
  {path: 'liste-clients', component: ListeClientsComponent},
];
