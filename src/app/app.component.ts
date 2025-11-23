import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A3ClassHohoan } from './A3ClassHohoan';
import { FooterHohoanComponent } from "./components/footer-hohoan/footer-hohoan.component";
import { HeaderHohoanComponent } from "./components/header-hohoan/header-hohoan.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterHohoanComponent, HeaderHohoanComponent],
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
