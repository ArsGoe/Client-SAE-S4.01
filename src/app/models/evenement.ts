import {Lieu} from "./lieu";
import {Artiste} from "./artiste";

export interface Evenement {
  id: number;
  titre: string;
  description: string;
  date_event: Date;
  type: TypeEvenement;
  lieu: Lieu;
}

export enum TypeEvenement {
  THEATRE = "THEATRE",
  CINEMA = "CINEMA",
  CONCERT = "CONCERT",
  FESTIVAL = "FESTIVAL",
  COMPETITION = "COMPETITION"
}

export const UNKNOWN_EVENEMENT = {
  id: 0,
  titre: "N.C.",
  description: "N.C.",
  date_event: new Date(2020, 1,1),
  type : TypeEvenement.COMPETITION,
  lieu: {
    id: 1,
    nom: "La Tour Eiffel",
    adresse: "Champ de Mars, 5 Avenue Anatole France",
    code_postal: "75007",
    ville: "Paris",
    lat: 48.858222,
    long: 2.294494,
}
}
