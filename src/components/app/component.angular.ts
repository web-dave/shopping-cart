import { Component } from '@angular/core';
import { GenericComponent } from '@leanup/lib';

import { AppController } from './controller';
import { AppState } from './interfaces';

@Component({
  selector: 'ng-app',
  templateUrl: './component.angular.html',
})
export class AppComponent implements GenericComponent {
  public readonly ctrl: AppController;

  public state: AppState;

  public getModalDisplayStyle(): 'block' | 'none' {
    return this.ctrl.modalVisible ? 'block' : 'none';
  }

  public addItem(name: string, anzahl: string, preis: string): void {
    this.ctrl.addItem({
      ...this.ctrl.item,
      name,
      anzahl: parseInt(anzahl),
      preis: parseFloat(preis),
    });
  }

  public constructor() {
    this.ctrl = new AppController({
      hooks: {
        doRender: () => {},
      },
    });
    this.state = this.ctrl;
  }
}
