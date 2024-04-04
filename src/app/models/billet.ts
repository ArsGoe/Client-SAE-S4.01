import {Prix} from "./prix";

export interface Billet {
  id: number;
  quantite: number;
  prix: Prix;
  reservation: Reservation;
}
