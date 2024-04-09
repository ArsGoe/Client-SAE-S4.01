import {ANONYMOUS_USER, Role, User} from "./user";

export interface Client {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  code_postal: string;
  ville: string;
  user: User;
  avatar: string;
}

export const ANONYMOUS_CLIENT: Client = <Client>{
  id: 0,
  nom: '',
  prenom: '',
  adresse: '',
  code_postal: '',
  ville: '',
  user: ANONYMOUS_USER,
  avatar: '',
};
