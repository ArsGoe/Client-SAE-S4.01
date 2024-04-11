import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Evenement } from '../models/evenement';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private url = 'http://127.0.0.1:8000/api/evenements';

  constructor(private http: HttpClient) {}

  getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.url);
  }

  getEvenement(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.url}/${id}`);
  }

  getReservation(id: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/${id}/reservations`);
  }

  createEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.url, evenement);
  }

  updateEvenement(evenement: any): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.url}/${evenement.id['0']['id']}`, evenement);
  }

  deleteEvenement(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
