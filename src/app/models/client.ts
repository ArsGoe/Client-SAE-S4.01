import {User} from "./user";

export interface Client {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  codePostal: string;
  ville: string;
  user: User;
  avatar: string;
}
