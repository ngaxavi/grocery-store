import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(afs: AngularFirestore) {
    const firestore = afs.firestore.settings({ timestampsInSnapshots: true });
  }
}
