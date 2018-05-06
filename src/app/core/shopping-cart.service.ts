import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../models/product';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {
  private shoppingCartCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.shoppingCartCollection = afs.collection('shopping-carts');
  }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.shoppingCartCollection.doc(cartId).collection('items');
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    const cardId = await this.getOrCreateCartId();
    const qry: firebase.firestore.QuerySnapshot = await this.shoppingCartCollection
      .doc(`${cardId}`)
      .collection('items')
      .ref.get();
    const batch = this.afs.firestore.batch();

    // You can use the QuerySnapshot above like in the example i linked
    qry.forEach(doc => {
      batch.delete(doc.ref);
    });

    batch.commit();
  }

  private create() {
    return this.shoppingCartCollection.add({
      createdAt: new Date().getTime()
    });
  }

  private getItem(cartId: string, productId: string) {
    return this.shoppingCartCollection
      .doc(`${cartId}`)
      .collection('items')
      .doc(`${productId}`);
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }
    const result = await this.create();
    localStorage.setItem('cartId', result.id);
    return result.id;
  }

  private async updateItem(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const itemCollection = this.getItem(cartId, product.id);
    const item$: Observable<any> = itemCollection.valueChanges();

    item$.take(1).subscribe(item => {
      const quantity = ((item && item.quantity) || 0) + change;

      if (quantity === 0) {
        itemCollection.delete();
      } else {
        itemCollection.set(
          {
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: quantity
          },
          { merge: true }
        );
      }
    });
  }
}
