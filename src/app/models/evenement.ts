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

export const UNKNOWN_EVENEMENT = {
  id: 0,
  titre: "N.C.",
  description: "N.C.",
  dateEvent: new Date(2020, 1,1),
  type : TypeEvenement.COMPETITION,
  lieu: {
    id: 1,
    nom: "La Tour Eiffel",
    adresse: "Champ de Mars, 5 Avenue Anatole France",
    codePostal: "75007",
    ville: "Paris",
    lat: 48.858222,
    long: 2.294494,
}
}
