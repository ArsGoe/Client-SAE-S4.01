import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfilComponent} from "./profil/profil.component";
import {ListeEvenementComponent} from "./liste-evenement/liste-evenement.component";
import {ListeReservationComponent} from "./liste-reservation/liste-reservation.component";
import {DetailEvenementComponent} from "./detail-evenement/detail-evenement.component";
import {ModificationEvenementComponent} from "./modification-evenement/modification-evenement.component";

import {ListeClientsComponent} from "./liste-clients/liste-clients.component";
import {DetailClientComponent} from "./detail-client/detail-client.component";
import {UpdateClientComponent} from "./update-client/update-client.component";
import {UpdateProfilComponent} from "./update-profil/update-profil.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {UpdateReservationComponent} from "./update-reservation/update-reservation.component";

export const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'liste-evenement', component: ListeEvenementComponent},
  {path: 'liste-reservation', component: ListeReservationComponent},
  {path: 'liste-clients', component: ListeClientsComponent},
  {path: 'detail-evenement/:id', component: DetailEvenementComponent},
  {path: 'modification-evenement/:id', component: ModificationEvenementComponent},
  {path: 'update-reservation/:id', component: UpdateReservationComponent},
  {path: 'detail-client/:id', component: DetailClientComponent},
  {path: 'update-client/:id', component: UpdateClientComponent},
  {path: 'update-profil/:id', component: UpdateProfilComponent},
  {path: 'suppression-evenement/:id', component: DetailEvenementComponent},
];
