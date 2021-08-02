import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Item {
  name: string;
  anzahl: number;
  preis: number;
  erledigt: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  itemListBS$ = new BehaviorSubject<Item[]>([]);
  itemList$ = this.itemListBS$
    .asObservable()
    .pipe(
      tap((data) => localStorage.setItem('itemList', JSON.stringify(data)))
    );
  title = 'shopping-cart';
  modalVisible = 'none';
  items: Item[] = [];

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('itemList') || '[]');
    this.itemListBS$.next(this.items);
  }
  deleteItem(i: number) {
    this.items.splice(i, 1);

    this.itemListBS$.next(this.items);
  }

  addItem(name: string, anzahl: string, preis: string) {
    this.items.push({
      name,
      anzahl: parseInt(anzahl, 10),
      preis: parseFloat(preis),
      erledigt: false,
    });
    this.modalVisible = 'none';
    this.itemListBS$.next(this.items);
  }

  setErledigt(item: Item) {
    item.erledigt = !item.erledigt;
    this.itemListBS$.next(this.items);
  }
}
