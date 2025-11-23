import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material-ui.module';
import { CardHohoanService } from '../../services/card-hohoan.service';

@Component({
  selector: 'app-jack-hohoan',
  imports: [CommonModule,MaterialModule],
  templateUrl: './jack-hohoan.component.html',
  styleUrl: './jack-hohoan.component.css'
})
export class JackHohoanComponent {

  hohoanTitle : string = 'Jack of Clubs';
  hohoanSuit : string = 'clubs'; //  will use in html [ngClass]
  hohoanImage : string = 'assets/images/jack.png';
  hohoanDegree : number = 280;
  hohoanZero : number = 0; // Reset to 0 

  constructor(private cardService : CardHohoanService) {}

  hohoanRotates(id : string, degree : number)
  {
    this.cardService.hohoanChanges(id, degree);
  }

}
