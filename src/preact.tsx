import { h, render } from 'preact';

import { AppComponent } from './components/app/component.preact';

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#app');
if (htmlDivElement instanceof HTMLDivElement) {
  render(<AppComponent />, htmlDivElement);
}
