import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotalPrice(): number {
    let summ: number = 0;
    for (const item of this._items) {
      summ += item.price;
    }
    return summ;
  }

  getDiscountTotalPrice(discount: number): number {
    let summ: number = 0;
    for (const item of this._items) {
      summ += item.price;
    }
    return summ - (summ / 100) * discount;
  }

  deleteItem(id: number): void {
    for (let i: number = 0; i < this._items.length; i++) {
      if (this._items[i].id === id) {
        this._items.splice(i, 1);
      }
    }
  }
}