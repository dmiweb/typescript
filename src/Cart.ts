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
    const totalPrice = this._items.reduce((totalAmount, amount) => {
      return totalAmount + amount.price;
    }, 0)
    return totalPrice;
  }

  getDiscountTotalPrice(discount: number): number {
    let summ = this.getTotalPrice();

    return summ - (summ / 100) * discount;
  }

  deleteItem(id: number) {
   return this._items.filter(item => item.id !== id);
  }
}