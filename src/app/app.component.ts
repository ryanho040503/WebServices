
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { A3ClassHohoan } from './A3ClassHohoan';
import { FooterHohoanComponent } from "./components/footer-hohoan/footer-hohoan.component";
import { HeaderHohoanComponent } from "./components/header-hohoan/header-hohoan.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material-ui.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterHohoanComponent, HeaderHohoanComponent, CommonModule, MaterialModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  profileHohoan = new A3ClassHohoan
  (
    'Ho Hoang Duy',
    '991794661',
    'hohoan@sheridancollege.ca',
    'hohoan'
  );

  

}
