import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prix } from '../models/prix';

@Injectable({
  providedIn: 'root'
})
export class PrixService {

  private url = '';

  constructor(private http: HttpClient) {}

  getPrix(): Observable<Prix[]> {
    return this.http.get<Prix[]>(this.url);
  }

  getTousLesPrix(id: number): Observable<Prix> {
    return this.http.get<Prix>(`${this.url}/${id}`);
  }

  createPrix(prix: Prix): Observable<Prix> {
    return this.http.post<Prix>(this.url, prix);
  }

  updatePrix(prix: Prix): Observable<Prix> {
    return this.http.put<Prix>(`${this.url}/${prix.id}`, prix);
  }

  deletePrix(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
