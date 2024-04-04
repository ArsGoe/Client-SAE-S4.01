import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly url = 'api/reservations';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.url);
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.url}/${id}`);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.url, reservation);
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.url}/${reservation.id}`, reservation);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
