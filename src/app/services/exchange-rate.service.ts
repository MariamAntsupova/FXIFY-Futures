import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ExchangeRateResponse {
  base: string;
  results: Record<string, number>;
  updated: string;
}


@Injectable({ providedIn: 'root' })
export class ExchangeRateService {
  private apiKey = 'fca_live_VRCc53BbT41LIg5ZhUQZyo5SmiayJKbUGOA9BfeV';
  private apiUrl = 'https://api.freecurrencyapi.com/v1/latest';

  constructor(private http: HttpClient) {}

  getMultiRates(from: string, to: string[]): Observable<ExchangeRateResponse> {
    const currencies = to.join(',');
    const url = `${this.apiUrl}?apikey=${this.apiKey}&base_currency=${from}&currencies=${currencies}`;

    return this.http.get<any>(url).pipe(
      map(response => ({
        base: from,
        results: response.data,
        updated: new Date().toISOString()
      }))
    );
  }
}
