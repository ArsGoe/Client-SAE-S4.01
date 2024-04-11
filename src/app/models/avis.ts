import {Evenement} from "./evenement";
import {Client} from "./client";

export interface Avis {
  id: number;
  dateAvis: Date;
  commentaire: string;
  note: number;
  evenement: Evenement;
  client: Client;
}
