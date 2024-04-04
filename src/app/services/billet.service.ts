import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billet } from '../models/billet';

@Injectable({
  providedIn: 'root'
})
export class BilletService {

  private readonly url = '';

  constructor(private http: HttpClient) {}

  getBillets(): Observable<Billet[]> {
    return this.http.get<Billet[]>(this.url);
  }

  getBillet(id: number): Observable<Billet> {
    return this.http.get<Billet>(`${this.url}/${id}`);
  }

  createBillet(billet: Billet): Observable<Billet> {
    return this.http.post<Billet>(this.url, billet);
  }

  updateBillet(billet: Billet): Observable<Billet> {
    return this.http.put<Billet>(`${this.url}/${billet.id}`, billet);
  }

  deleteBillet(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
