import {Client} from "./client";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  ADMIN,
  GESTIONNAIRE,
  ACTIF,
  NON_ACTIF
}
