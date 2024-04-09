import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://127.0.0.1:8000/api/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url, {});
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`, {})
  }

  getMe(token:string): Observable<Client> {
    let url1 = 'http://127.0.0.1:8000/api';
    const headers = { 'Authorization': `Bearer ${token}`, 'Accept': 'application/Json', 'Content-Type': 'application/json'}
    return this.http.get<Client>(`${url1}/me`, { headers })
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/${client.id}`, client);
  }
}
