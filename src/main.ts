import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { FieldsComponent } from './fields.component';
import { Component } from '@angular/core';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <fields-component class="block min-h-full"></fields-component>
  `,
  imports: [
    FieldsComponent,
  ],
})
export class App {
  name = 'Angular';
}

try {
  bootstrapApplication(App, {
    providers: [provideHttpClient(withJsonpSupport()), provideAnimationsAsync()],
  });
} catch (error) {
  const pre = document.createElement("pre")
  pre.innerHTML = JSON.stringify(error, null, 2)
  document.body.appendChild(pre)
}
