import { h, render } from 'preact';

import { Log } from '@leanup/lib';

import { AppComponent } from './components/app/component';

Log.info('Test');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#app');
if (htmlDivElement instanceof HTMLDivElement) {
  render(<AppComponent />, htmlDivElement);
}
