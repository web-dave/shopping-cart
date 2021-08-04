import './style.css';

import { Component, Fragment, h, JSX } from 'preact';

import { GenericComponent } from '@leanup/lib';

import { AppController } from './controller';
import { AppState, Item } from './interfaces';

export class AppComponent extends Component<unknown, AppState> implements GenericComponent {
  public readonly ctrl: AppController;

  public state: AppState;

  public constructor(props: unknown) {
    super(props);
    this.ctrl = new AppController(props, {
      hooks: {
        doRender: this.forceUpdate.bind(this),
      },
    });
    this.state = this.ctrl;
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
        <div
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
                value={this.state.item.name}
                onChange={(event) => {
                  this.ctrl.handleChange('name', event);
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
                type="number"
                name="anzahl"
                value={this.state.item.anzahl}
                onChange={(event) => {
                  this.ctrl.handleChange('anzahl', event);
                }}
              />
            </label>
            <label>
              <i class="fa fa-key icon"></i>
              Preis:
              <br />
              <input
                type="number"
                name="preis"
                value={this.state.item.preis}
                onChange={(event) => {
                  this.ctrl.handleChange('preis', event);
                }}
              />
            </label>
            <button
              onClick={() => {
                this.ctrl.addItem(this.state.item);
              }}
              class="addBtn"
            >
              Add
            </button>
          </div>
        </div>
      </>
    );
  }
}
