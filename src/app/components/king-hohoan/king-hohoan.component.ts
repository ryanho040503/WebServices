import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material-ui.module';
import { CardHohoanService } from '../../services/card-hohoan.service';

@Component({
  selector: 'app-king-hohoan',
  imports: [CommonModule,MaterialModule],
  templateUrl: './king-hohoan.component.html',
  styleUrl: './king-hohoan.component.css'
})
export class KingHohoanComponent {

  hohoanTitle : string = 'King of Diamonds';
  hohoanSuit : string = 'diamonds'; // will use in html [ngClass]
  hohoanImage : string = '/assets/images/king.png';
  hohoanDegree : number = 120;
  hohoanZero : number = 0; // Reset to 0 

  constructor(private cardService : CardHohoanService) {}

  hohoanRotates(id : string, degree : number)
  {
    this.cardService.hohoanChanges(id, degree);
  }

}
