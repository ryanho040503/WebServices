import { Component, Input } from '@angular/core';
import { A3ClassHohoan } from '../../A3ClassHohoan';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material-ui.module';

@Component({
  selector: 'app-header-hohoan',
  imports: [CommonModule,MaterialModule],
  templateUrl: './header-hohoan.component.html',
  styleUrl: './header-hohoan.component.css'
})
export class HeaderHohoanComponent {

  @Input() HFhohoan!: A3ClassHohoan;
  
}
