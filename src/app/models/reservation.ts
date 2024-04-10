import {Client} from "./client";
import {Evenement} from "./evenement";

export interface Reservation {
  id: number;
  dateRes: Date;
  nbBillets: number;
  montant: number;
  statut: StatutReservation;
  client: Client;
  evenement: Evenement;
}

export enum StatutReservation {
  EN_ATTENTE,
  PAYE,
  ANNULE,
  BILLET_EDITE
}
