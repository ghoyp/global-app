// country.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  getCountryInfo(countryCode: string, username: string, apiKey: string) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'api.geonames.org/findNearbyPostalCodesJSON?postalcode=8775&country=CH&radius=10&username=maikins';

  constructor(private http: HttpClient) { }

  getCountryInfoByCode(countryCode: string, username: string, apiKey: string): Observable<any> {
    const url = `${this.apiUrl}/countryInfoJSON?country=${countryCode}&username=${username}`;
    return this.http.get(url);
  }

  findNearbyPostalCodes(postalCode: string, country: string, radius: number, username: string, apiKey: string): Observable<any> {
    const url = `${this.apiUrl}/findNearbyPostalCodesJSON?postalcode=${postalCode}&country=${country}&radius=${radius}&username=${username}`;
    return this.http.get(url);
  }
}
