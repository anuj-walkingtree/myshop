import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([ 
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      // { 
      //   path: 'cart', 
      //   component: CartComponent,
      //   children: [
      //     { path: 'shipping', component: ShippingComponent }
      //   ]
      // },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: '**', component: ErrorComponent }
    ])  
  ],
  declarations: [AppComponent, TopBarComponent, ProductListComponent, ProductAlertsComponent, ProductDetailsComponent, ShippingComponent, CartComponent,ErrorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

