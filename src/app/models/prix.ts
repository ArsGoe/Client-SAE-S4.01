import {Evenement} from "./evenement";

export interface Prix {
  id: number;
  categorie: string;
  nbPlacesDispo: number;
  valeurUnitaire: number;
  evenement: Evenement;
}
