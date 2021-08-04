import { JSX } from 'preact';

import { AbstractController, ViewControllerCouple } from '@leanup/lib';

import { AppState, Item } from './interfaces';

export class AppController extends AbstractController implements AppState {
  public item: Item;
  public itemList: Set<Item>;
  public modalVisible = true;

  public constructor(_props: unknown, couple: ViewControllerCouple) {
    super(couple);
    this.item = this.createItem();
    this.itemList = new Set(JSON.parse(localStorage.getItem('itemList') || '[]'));
  }

  private createItem(): Item {
    return {
      name: '',
      anzahl: 1,
      preis: 0.0,
      erledigt: false,
    };
  }

  private storeItemList(itemList: Set<Item>) {
    localStorage.setItem('itemList', JSON.stringify(Array.from(itemList)));
  }

  public deleteItem(item: Item): void {
    if (this.itemList.has(item)) {
      this.itemList.delete(item);
      this.storeItemList(this.itemList);
      this.doRender();
    }
  }

  public addItem(item: Item): void {
    this.itemList.add(item);
    this.storeItemList(this.itemList);
    this.modalVisible = false;
    this.item = this.createItem();
    this.doRender();
  }

  public setErledigt(item: Item): void {
    item.erledigt = !item.erledigt;
    this.storeItemList(this.itemList);
    this.doRender();
  }

  public handleChange(
    attrName: 'name' | 'anzahl' | 'preis',
    { currentTarget }: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void {
    switch (attrName) {
      case 'name':
        this.item.name = currentTarget.value;
        break;
      case 'preis':
        this.item.preis = parseFloat(currentTarget.value);
        break;
      case 'anzahl':
        this.item.anzahl = parseInt(currentTarget.value, 10);
        break;
    }
    this.doRender();
  }

  private toggleModal(visible: boolean): void {
    this.modalVisible = visible;
    this.doRender();
  }

  public openModal(): void {
    this.toggleModal(true);
  }

  public closeModal(): void {
    this.toggleModal(false);
  }
}
