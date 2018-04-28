import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  private categoryCollection: AngularFirestoreCollection<Category>;
  constructor(private afs: AngularFirestore) {
    this.categoryCollection = this.afs.collection<Category>('categories');
  }

  getCategories() {
    return this.categoryCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
