import { Component, Input } from '@angular/core';
import { A3ClassHohoan } from '../../A3ClassHohoan';

@Component({
  selector: 'app-header-hohoan',
  imports: [],
  templateUrl: './header-hohoan.component.html',
  styleUrl: './header-hohoan.component.css'
})
export class HeaderHohoanComponent {

  @Input() HFhohoan!: A3ClassHohoan;
  
}
