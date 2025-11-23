import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material-ui.module';
import { CardHohoanService } from '../../services/card-hohoan.service';

@Component({
  selector: 'app-ace-hohoan',
  imports: [CommonModule,MaterialModule],
  templateUrl: './ace-hohoan.component.html',
  styleUrl: './ace-hohoan.component.css'
})
export class AceHohoanComponent {

  hohoanTitle : string = 'Ace of Spades';
  hohoanSuit : string = 'spades'; // will use in html [ngClass]
  hohoanImage : string = 'assets/images/ace.png';
  hohoanDegree : number = 60;
  hohoanZero : number = 0; // Reset to 0 

  constructor(private cardService : CardHohoanService) {}

  hohoanRotates(id : string, degree : number)
  {
    this.cardService.hohoanChanges(id, degree);
  }

}
