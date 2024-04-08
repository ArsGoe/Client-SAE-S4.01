import {Client} from "./client";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  token: string;
}

export interface Identite {
  email: string;
  password: string;
}

export enum Role {
  ADMIN,
  GESTIONNAIRE,
  ACTIF,
  NON_ACTIF
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface Profil {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  "email_verified_at": string;
}

export const ANONYMOUS_USER: User = <User>{
  id: 0,
  name: '',
  email: '',
  password: '',
  role: Role.NON_ACTIF,
  token: ''
};
