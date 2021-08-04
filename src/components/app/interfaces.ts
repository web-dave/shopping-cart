export interface Item {
  name: string;
  anzahl: number;
  preis: number;
  erledigt: boolean;
}

export interface AppState {
  item: Item;
  itemList: Set<Item>;
  modalVisible: boolean;
}
