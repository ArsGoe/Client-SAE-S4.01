import {Component, OnInit} from '@angular/core';
import {Evenement} from "../models/evenement";
import {EvenementService} from "../services/evenement.service";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  events : any

  constructor(private evenementsService: EvenementService) {
  }

  ngOnInit(): void {
    this.evenementsService.getEvenements().subscribe(events => {
      this.events = (shuffle(events)).slice(0,5)
    })
    const shuffle = (array: Evenement[]) => {
      return array.sort(() => Math.random() - 0.5);
    };
    this.events = shuffle(this.events);
  }

}
