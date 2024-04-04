import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Artiste } from '../models/artiste';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {

  private readonly url = '';

  constructor(private http: HttpClient) {}

  getArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(this.url);
  }

  getArtiste(id: number): Observable<Artiste> {
    return this.http.get<Artiste>(`${this.url}/${id}`);
  }

  createArtiste(artiste: Artiste): Observable<Artiste> {
    return this.http.post<Artiste>(this.url, artiste);
  }

  updateArtiste(artiste: Artiste): Observable<Artiste> {
    return this.http.put<Artiste>(`${this.url}/${artiste.id}`, artiste);
  }

  deleteArtiste(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
