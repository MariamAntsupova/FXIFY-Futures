import { Component, OnInit } from '@angular/core';
import { ExchangeRateService, ExchangeRateResponse } from '../../services/exchange-rate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  rates: Record<string, number> = {};
  rateKeys: string[] = [];

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.exchangeRateService.getMultiRates('USD', ['EUR', 'GBP', 'CHF'])
      .subscribe({
        next: (data: ExchangeRateResponse) => {
          this.rates = data.results;
          this.rateKeys = Object.keys(data.results);
        },
        error: (err: any) => {
          console.error('Error fetching rates:', err);
        }
      });
  }
}
