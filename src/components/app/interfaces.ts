import { Item } from '../../services/item-list.service';

export interface AppState {
  item: Item;
  itemList: Item[];
  modalVisible: boolean;
}
