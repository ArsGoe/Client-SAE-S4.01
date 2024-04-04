export interface Artiste {
  id: number;
  nom: string;
  genre: Genre[];
}

export enum Genre {
  POP,
  ROCK,
  CLASSIQUE,
  RAP,
  FOLK,
  SPORTIF,
  COMEDIEN,
  VARIETE
}
