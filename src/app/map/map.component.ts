import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  countryInfo: any;
  hoveredCountry: string | null = null;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void { }

  onMouseOver(event: MouseEvent): void {
    const target = event.target as SVGElement;
    this.hoveredCountry = target.id;
  }

  onMouseOut(event: MouseEvent): void {
    this.hoveredCountry = null;
  }

  onClick(event: MouseEvent): void {
    const countryName = this.getCountryNameFromEvent(event);
    console.log('Country clicked:', countryName);
    this.countryService.getCountryInfo(countryName).subscribe(data => {
      this.countryInfo = data;
    });
  }

  getCountryNameFromEvent(event: MouseEvent): string {
    const target = event.target as SVGElement;
    return target.id;
  }

  isHovered(countryId: string): boolean {
    return this.hoveredCountry === countryId;
  }
}
