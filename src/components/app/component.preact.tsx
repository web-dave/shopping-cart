import { Component, Fragment, h, JSX } from 'preact';

import { GenericComponent } from '@leanup/lib';

import { Item } from '../../services/item-list.service';
import { AppController } from './controller';
import { AppState } from './interfaces';

export class AppComponent extends Component<unknown, AppState> implements GenericComponent {
  public readonly ctrl: AppController;

  public state: AppState;

  public constructor(props: unknown) {
    super(props);
    this.ctrl = new AppController({
      hooks: {
        doRender: this.forceUpdate.bind(this),
      },
    });
    this.state = this.ctrl;
  }

  public handleChange(
    attrName: 'name' | 'anzahl' | 'preis',
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void {
    switch (attrName) {
      case 'name':
        this.ctrl.item.name = currentTarget.value;
        break;
      case 'preis':
        this.ctrl.item.preis = parseFloat(currentTarget.value);
        break;
      case 'anzahl':
        this.ctrl.item.anzahl = parseInt(currentTarget.value, 10);
        break;
    }
    this.forceUpdate();
  }

  public render(): JSX.Element {
    return (
      <>
        <header class="header">
          <h1>Einkaufsliste</h1>
          <button
            onClick={() => {
              this.ctrl.openModal();
            }}
          >
            +
          </button>
        </header>
        <main>
          <ul>
            {Array.from(this.state.itemList).map((item: Item, index: number) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    this.ctrl.setErledigt(item);
                  }}
                  class={item.erledigt ? 'checked' : undefined}
                >
                  {item.anzahl}x {item.name}
                  <span
                    class="close"
                    onClick={() => {
                      this.ctrl.deleteItem(item);
                    }}
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </main>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.ctrl.addItem(this.state.item);
          }}
          class="modal"
          style={{
            display: this.state.modalVisible ? 'block' : 'none',
          }}
        >
          <div class="modal-content">
            <span
              class="close"
              onClick={() => {
                this.ctrl.closeModal();
              }}
            >
              &times;
            </span>
            <label>
              <i class="fa fa-user icon"></i>
              Name:
              <br />
              <input
                autoFocus
                required
                value={this.state.item.name}
                onChange={(event) => {
                  this.handleChange('name', event);
                }}
                type="text"
                name="name"
              />
            </label>
            <label>
              <i class="fa fa-envelope icon"></i>
              Anzahl:
              <br />
              <input
                required
                type="number"
                name="anzahl"
                value={this.state.item.anzahl}
                onChange={(event) => {
                  this.handleChange('anzahl', event);
                }}
              />
            </label>
            <label>
              <i class="fa fa-key icon"></i>
              Preis:
              <br />
              <input
                required
                type="number"
                name="preis"
                value={this.state.item.preis}
                onChange={(event) => {
                  this.handleChange('preis', event);
                }}
              />
            </label>
            <button>Hinzufügen</button>
          </div>
        </form>
      </>
    );
  }
}
