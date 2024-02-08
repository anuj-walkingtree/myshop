import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
// import { CurrencyPipe } from '@angular/common'; // Import CurrencyPipe if not already imported

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent {

  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    console.log("dcsdcsdddddddddddddddddd");
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
