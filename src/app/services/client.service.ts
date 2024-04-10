import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../models/client';
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://127.0.0.1:8000/api/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<{data:Client[]}> {
    return this.http.get<{data:Client[]}>(this.url, httpOptions);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`, httpOptions)
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/${client.id}`, client);
  }
}
