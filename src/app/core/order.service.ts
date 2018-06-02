import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {
  private orderCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore, private cartService: ShoppingCartService) {
    this.orderCollection = this.afs.collection('orders');
  }

  async placeOrder(order) {
    const result = await this.orderCollection.add({ ...order });
    this.cartService.clearCart();
    return result;
  }

  getOrders() {
    return this.orderCollection.valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.afs.collection('orders', ref => ref.where('userId', '==', userId)).valueChanges();
  }
}
