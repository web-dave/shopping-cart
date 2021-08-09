import { BehaviorSubject } from 'rxjs';

export interface PatchItem {
  name?: string;
  anzahl?: number;
  preis?: number;
  erledigt?: boolean;
}

export interface Item extends PatchItem {
  name: string;
  anzahl: number;
  preis: number;
  erledigt: boolean;
}

export class ItemListService {
  private name: string;
  private itemList: Item[];

  public readonly itemList$: BehaviorSubject<Item[]>;

  public constructor(name = 'itemList') {
    this.name = name;
    this.itemList = this.restore();
    this.itemList$ = this.restore$();
    this.notify();
  }

  private notify() {
    this.itemList$.next(this.itemList);
  }

  private restore(): Item[] {
    const storage: string | null = localStorage.getItem(this.name);
    const json: Item[] = JSON.parse(storage || '[]') as Item[];
    return json;
  }

  private restore$(): BehaviorSubject<Item[]> {
    return new BehaviorSubject(this.restore());
  }

  private store() {
    localStorage.setItem(this.name, JSON.stringify(Array.from(this.itemList)));
  }

  private storeAndNotify() {
    this.store();
    this.notify();
  }

  public deleteItem(item: Item): boolean {
    const index = this.itemList.indexOf(item);
    if (index >= 0) {
      this.itemList.splice(index, 1);
      this.storeAndNotify();
      return true;
    }
    return false;
  }

  public addItem(item: Item): boolean {
    if (this.itemList.indexOf(item) < 0) {
      this.itemList.push(item);
      this.storeAndNotify();
      return true;
    }
    return false;
  }

  public patchItem(item: Item, patchItem: PatchItem): boolean {
    const index = this.itemList.indexOf(item);
    if (index >= 0) {
      this.itemList[index] = {
        ...this.itemList[index],
        ...patchItem,
      };
      this.storeAndNotify();
      return true;
    }
    return false;
  }
}
