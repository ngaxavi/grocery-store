import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '@shared/models/product';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private productCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore) {
    this.productCollection = this.afs.collection<Product>('products');
  }

  create(product) {
    this.productCollection.add(product);
  }

  getAll() {
    return this.productCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  get(productId) {
    return this.productCollection.doc<Product>(productId).valueChanges();
  }

  update(productId, product) {
    return this.productCollection.doc<Product>(productId).set(product, { merge: true });
  }

  delete(productId) {
    return this.productCollection.doc(productId).delete();
  }
}
