import './style.css';

import { AbstractController, DI, ViewControllerCouple } from '@leanup/lib';

import { Item, ItemListService } from '../../services/item-list.service';
import { AppState } from './interfaces';

export class AppController extends AbstractController implements AppState {
  private readonly itemListService: ItemListService = DI.get<ItemListService>('ItemListService');

  public itemList: Item[] = [];
  public item: Item;
  public modalVisible = true;

  public constructor(couple: ViewControllerCouple) {
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
