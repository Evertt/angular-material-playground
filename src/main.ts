import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FieldsComponent } from './fields.component';
import 'zone.js';

// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { FormsModule } from '@angular/forms';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <fields-component></fields-component>
  `,
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatFormField,
    MatIconModule,
    MatInput,
    MatLabel,
    FieldsComponent,
  ],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient(withJsonpSupport()), provideAnimationsAsync()],
});