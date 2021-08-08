import { JSX } from 'preact';

import { AbstractController, DI, ViewControllerCouple } from '@leanup/lib';

import { Item, ItemListService } from '../../services/item-list.service';
import { AppState } from './interfaces';

export class AppController extends AbstractController implements AppState {
  private readonly itemListService: ItemListService = DI.get<ItemListService>('ItemListService');

  public itemList: Item[] = [];
  public item: Item;
  public modalVisible = true;

  public constructor(_props: unknown, couple: ViewControllerCouple) {
    super(couple);
    this.itemListService.itemList$.subscribe({
      next: (itemList: Item[]) => {
        this.itemList = itemList;
        console.log(this.itemList);
        this.doRender();
      },
    });
    this.item = this.createItem();
  }

  private createItem(): Item {
    return {
      name: '',
      anzahl: 1,
      preis: 0.0,
      erledigt: false,
    };
  }

  public deleteItem(item: Item): void {
    this.itemListService.deleteItem(item);
  }

  public addItem(item: Item): void {
    if (this.itemListService.addItem(item)) {
      this.item = this.createItem();
      this.toggleModal(false);
    }
  }

  public setErledigt(item: Item): void {
    this.itemListService.patchItem(item, {
      erledigt: !item.erledigt,
    });
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
