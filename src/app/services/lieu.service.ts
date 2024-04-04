import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lieu } from '../models/lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  private readonly url = '';

  constructor(private http: HttpClient) {}

  getLieux(): Observable<Lieu[]> {
    return this.http.get<Lieu[]>(this.url);
  }

  getLieu(id: number): Observable<Lieu> {
    return this.http.get<Lieu>(`${this.url}/${id}`);
  }

  createLieu(lieu: Lieu): Observable<Lieu> {
    return this.http.post<Lieu>(this.url, lieu);
  }

  updateLieu(lieu: Lieu): Observable<Lieu> {
    return this.http.put<Lieu>(`${this.url}/${lieu.id}`, lieu);
  }

  deleteLieu(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
