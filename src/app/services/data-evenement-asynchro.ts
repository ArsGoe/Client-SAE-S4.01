import {DataSource} from "@angular/cdk/collections";
import {Evenement} from "../models/evenement";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {EvenementService} from "./evenement.service";

export class DataEvenementAsynchro extends DataSource<Evenement> {
  private evenementSubject = new BehaviorSubject<Evenement[]>([]);

  constructor(private evenementsService: EvenementService, private id : number) {
    super();
    this.setData();
  }

  connect(): Observable<Evenement[]> {
    return this.evenementSubject.asObservable();
  }

  disconnect() {
    this.evenementSubject.complete();
  }

  setData() {
    this.evenementsService.getEvenement(this.id).subscribe(personnes =>
    {
      this.evenementSubject.next([personnes]);
    })
  }
}
