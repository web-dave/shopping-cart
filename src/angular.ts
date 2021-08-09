// Polyfills
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular.module';

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#app');
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.appendChild(document.createElement('ng-app'));

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {})
    .catch(() => {});
}
