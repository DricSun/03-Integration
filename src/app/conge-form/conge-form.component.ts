import { Component } from '@angular/core';
import { Etat } from '../models/etat.enum';

@Component({
  selector: 'app-conge-form',
  templateUrl: './conge-form.component.html',
  styleUrl: './conge-form.component.css'
})
export class CongeFormComponent {

  etats: Etat[] = Object.values(Etat);

  newConge = {
    debut: '',
    fin: '',
    etat: ''
  };
}
