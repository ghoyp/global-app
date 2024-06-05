// country.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'http://api.geonames.org/postalCodeCountryInfo?username=demo';

  constructor(private http: HttpClient) { }

  getCountryInfo(countryName: string): Observable<any> {
    const url = `${this.apiUrl}&country=${countryName}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        // Assuming the response is structured in a way we need to extract relevant info
        // Adjust this mapping based on the actual API response
        return {
          countryName: response.geonames[0].countryName,
        };
      })
    );
  }
}
