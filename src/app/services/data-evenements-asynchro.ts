import {DataSource} from "@angular/cdk/collections";
import {Evenement} from "../models/evenement";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {EvenementService} from "./evenement.service";

export class DataEvenementsAsynchro extends DataSource<Evenement> {
  private evenementSubject = new BehaviorSubject<Evenement[]>([]);

  constructor(private evenementsService: EvenementService) {
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
    this.evenementsService.getEvenements().subscribe(personnes =>
    {
      this.evenementSubject.next(personnes);
    })
  }
}
