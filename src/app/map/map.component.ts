// map.component.ts

import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true,
  imports: []
})
export class MapComponent implements OnInit {
  countryInfo: any;
  hoveredCountry: string | null = null;
class: any;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void { }

  onMouseOver(event: MouseEvent): void {
    const target = event.target as SVGElement;
    this.hoveredCountry = target ? target.id : null;
  }

  onMouseOut(): void {
    this.hoveredCountry = null;
  }

  onClick(event: MouseEvent): void {
    const countryName = this.getCountryNameFromEvent(event);
    if (countryName) {
      this.countryService.getCountryInfo(countryName).subscribe(data => {
        this.countryInfo = data;
      });
    }
  }

  getCountryNameFromEvent(event: MouseEvent): string | null {
    const target = event.target as SVGElement;
    return target ? target.id : null;
  }

  isHovered(countryId: string): boolean {
    return this.hoveredCountry === countryId;
  }
}
