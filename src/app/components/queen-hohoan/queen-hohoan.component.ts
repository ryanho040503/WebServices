import { Component } from '@angular/core';
import { CardHohoanService } from '../../services/card-hohoan.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material-ui.module';

@Component({
  selector: 'app-queen-hohoan',
  imports: [CommonModule,MaterialModule],
  templateUrl: './queen-hohoan.component.html',
  styleUrl: './queen-hohoan.component.css'
})
export class QueenHohoanComponent {

  hohoanTitle : string = 'Queen of Hearts';
  hohoanSuit : string = 'hearts'; // will use in html [ngClass]
  hohoanImage : string = '/assets/images/queen.png';
  hohoanDegree : number = 240;
  hohoanZero : number = 0; // Reset to 0 

  constructor(private cardService : CardHohoanService) {}

  hohoanRotates(id : string, degree : number)
  {
    this.cardService.hohoanChanges(id, degree);
  }

}
