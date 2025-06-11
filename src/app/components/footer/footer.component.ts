import { Component } from '@angular/core';
import { ExchangeRateComponent } from '../exchange-rate/exchange-rate.component';

@Component({
  selector: 'app-footer',
  imports: [ExchangeRateComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
