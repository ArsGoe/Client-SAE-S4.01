import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Avis } from '../models/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private url = '';

  constructor(private http: HttpClient) {
  }

  getAvis(): Observable<Avis[]> {
    return this.http.get<Avis[]>(this.url);
  }

  getAvi(id: number): Observable<Avis> {
    return this.http.get<Avis>(`${this.url}/${id}`);
  }

  createAvis(avis: Avis): Observable<Avis> {
    return this.http.post<Avis>(this.url, avis);
  }

  updateAvis(avis: Avis): Observable<Avis> {
    return this.http.put<Avis>(`${this.url}/${avis.id}`, avis);
  }

  deleteAvis(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
