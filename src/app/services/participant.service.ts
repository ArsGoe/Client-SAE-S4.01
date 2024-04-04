import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private url = '';

  constructor(private http: HttpClient) {}

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.url);
  }

  getParticipant(id: number): Observable<Participant> {
    return this.http.get<Participant>(`${this.url}/${id}`);
  }

  createParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.url, participant);
  }

  updateParticipant(participant: Participant): Observable<Participant> {
    return this.http.put<Participant>(`${this.url}/${participant.id}`, participant);
  }

  deleteParticipant(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
