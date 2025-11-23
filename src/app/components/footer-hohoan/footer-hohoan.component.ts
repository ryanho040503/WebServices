import { Component, Input } from '@angular/core';
import { A3ClassHohoan } from '../../A3ClassHohoan';

@Component({
  selector: 'app-footer-hohoan',
  imports: [],
  templateUrl: './footer-hohoan.component.html',
  styleUrl: './footer-hohoan.component.css'
})
export class FooterHohoanComponent {

  @Input() HFhohoan!: A3ClassHohoan;
}
