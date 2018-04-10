import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { CheckOutModule } from './check-out/check-out.module';
import { OrderSuccessModule } from './order-success/order-success.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ProductsModule,
    CheckOutModule,
    OrderSuccessModule,
    ShoppingCartModule,
    AdminModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
