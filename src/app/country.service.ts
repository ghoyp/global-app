import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://api.worldbank.org/v2/country'; // Example API URL

  constructor(private http: HttpClient) { }

  // Method to fetch country information by name
  getCountryInfo(countryName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${countryName}?format=json`);
  }
}
