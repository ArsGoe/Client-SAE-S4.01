import {Prix} from "./prix";
import {Reservation} from "./reservation";

export interface Billet {
  id: number;
  quantite: number;
  prix: Prix;
  reservation: Reservation;
}
