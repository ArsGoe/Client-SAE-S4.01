import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private readonly url = '';

  constructor(private http: HttpClient) {}

  getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.url);
  }

  getEvenement(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.url}/${id}`);
  }

  createEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.url, evenement);
  }

  updateEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.url}/${evenement.id}`, evenement);
  }

  deleteEvenement(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
