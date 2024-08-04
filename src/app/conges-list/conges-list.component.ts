import { Component, OnInit } from '@angular/core';
import { Conge } from '../models/conge.model';
import { CongeService } from '../service/conge.service';
import { Etat } from '../models/etat.enum';

@Component({
  selector: 'app-conges-list',
  templateUrl: './conges-list.component.html',
  styleUrl: './conges-list.component.css'
})
export class CongesListComponent implements OnInit {

  conges: Conge[] = [];
  etats: Etat[] = [];

  constructor(private congeService: CongeService) {}

  ngOnInit(): void {
    this.conges = this.congeService.getConges();
    this.etats = this.congeService.getEtats();
  }


}
