import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardHohoanService {

  private rotations : { [id : string] : number } = {};

  hohoanChanges(id : any, deg : number) 
  {
    const card = document.getElementById(id);
    
    // Case there is no card to prevent error
    if(!card) return ; // mean return empty

    if(this.rotations[id] === undefined)
    {
      this.rotations[id] = 0;
    }

    // Reset to 0 degree
    if(deg === 0)
    {
      this.rotations[id] = 0;
    } else 
    {
      this.rotations[id] += (this.rotations[id] + deg) % 360; // if we don't use modulo, card will rotate to much
    }

    card.style.transitionDuration = '3s';
    card.style.transform = `rotate(${this.rotations[id]}deg)`;
  }
}
