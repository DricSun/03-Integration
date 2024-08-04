import { Injectable } from '@angular/core';
import { Conge } from '../models/conge.model';
import { Etat } from '../models/etat.enum';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private conges: Conge[] = [
    { user: "michael", debut: new Date('2024-08-01'), fin: new Date('2024-08-05'), etat: Etat.Demandé },
    { user: "thomas", debut: new Date('2024-08-10'), fin: new Date('2024-08-12'), etat: Etat.Annulé },
    { "user": "bernadette", debut: new Date('2024-09-01'), fin: new Date('2024-09-03'), etat : Etat.Validé },
  ];

  constructor() { }


  getConges(): Conge[] {
    return this.conges;
  }

  getEtats(): Etat[] {
    return Object.values(Etat);
  }



}
