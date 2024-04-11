import {Artiste} from "./artiste";
import {Evenement} from "./evenement";

export interface Participant {
  id: number;
  ordre: number;
  evenement: Evenement;
  artiste: Artiste;
}
