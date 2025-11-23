import { Component, Input } from '@angular/core';
import { A3ClassHohoan } from '../../A3ClassHohoan';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material-ui.module';

@Component({
  selector: 'app-footer-hohoan',
  imports: [CommonModule,MaterialModule],
  templateUrl: './footer-hohoan.component.html',
  styleUrl: './footer-hohoan.component.css'
})
export class FooterHohoanComponent {

  @Input() HFhohoan!: A3ClassHohoan;
}
