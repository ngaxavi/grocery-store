import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];
  constructor(items: any[]) {
    for (const item of items) {
      this.items.push(new ShoppingCartItem({ ...item }));
    }
  }

  get totalPrice() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.totalPrice;
    }
    return sum;
  }

  getQuantity(product: Product) {
    const index = this.items.findIndex(element => element.id === product.id);
    const item = this.items[index];
    return item ? item.quantity : 0;
  }

  get totalItemsCount() {
    let count = 0;
    for (const item of this.items) {
      count += item.quantity;
    }
    return count;
  }
}
