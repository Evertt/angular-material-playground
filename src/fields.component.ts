import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import 'zone.js';

const sddOptions = ['', 'Daar is de service!'] as const;

type SDD = (typeof sddOptions)[number];

type Product = {
  description?: string;
  service_direction_description: SDD;
};

@Component({
  standalone: true,
  selector: 'fields-component',
  templateUrl: 'fields.component.html',
  styleUrls: ['fields.component.css'],
  imports: [
    // CommonModule,
    // BrowserModule,
    FormsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatFormField,
    MatIconModule,
    MatInput,
    MatLabel,
    MatIconModule,
  ],
})
export class FieldsComponent {
  product: Product = {
    description: '[Dit is een product beschrijving]',
    service_direction_description: 'Daar is de service!',
  };

  query = '';
  category: 'Elektriciteit' | 'Gas' = 'Elektriciteit';

  toggleServiceDirectionDescription() {
    const sdd = this.product.service_direction_description;
    const i = sddOptions.indexOf(sdd);
    this.product.service_direction_description = sddOptions[1 - i];
  }

  clearSearch() {
    console.log('not implemented yet');
  }
}
