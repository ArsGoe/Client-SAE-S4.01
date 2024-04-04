import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../models/client';
import {Evenement} from "../models/evenement";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly url = '';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/${client.id}`, client);
  }
}
