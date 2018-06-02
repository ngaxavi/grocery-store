import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from '@layouts/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from '@admin/admin.module';
import { CoreModule } from '@core/core.module';
import { ShoppingModule } from '@shopping/shopping.module';
import { AccountModule } from '@account/account.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AccountModule,
    CoreModule,
    ShoppingModule,
    AdminModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
