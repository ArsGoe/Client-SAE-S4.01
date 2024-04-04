import {Lieu} from "./lieu";
import {Artiste} from "./artiste";

export interface Evenement {
  id: number;
  titre: string;
  description: string;
  dateEvent: Date;
  type: TypeEvenement;
  lieu: Lieu;
}

export enum TypeEvenement {
  THEATRE,
  CINEMA,
  CONCERT,
  FESTIVAL,
  COMPETITION
}
