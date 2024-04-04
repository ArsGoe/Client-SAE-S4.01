import {Lieu} from "./lieu";
import {Artiste} from "./artiste";

export interface Evenement {
  id: number;
  titre: string;
  description: string;
  dateEvent: Date;
  type: TypeEvenement;
  lieu: Lieu;
  artistes: Artiste[];
  prix: Prix[];
}

export enum TypeEvenement {
  THEATRE,
  CINEMA,
  CONCERT,
  FESTIVAL,
  COMPETITION
}
