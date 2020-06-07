import { HttpClient } from '@angular/common/http';
import { Product } from './../model/product-model';

import { DataService } from './../data.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRefService, ICustomeWindow } from '../window-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [WindowRefService]
})
export class HeaderComponent implements OnInit {
  productData: Product;
  private _window: ICustomeWindow;
  public rzp;
  public options: any = {
    key: 'rzp_test_XU7Z8imHkxH25o', // add razorpay key here
    name: 'RazorPay Payment',
    description: 'Make Payment',
    amount: 5000, // razorpay takes amount in paisa
    // order_id: "order_EzPOcsMLDnuBa9",
    prefill: {
      name: 'sourabh',
      email: 'rajwadesourabh@gmail.com', // add your email id
    },
    notes: {},
    theme: {
      color: '#0c238a'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          alert('Payment Failled....Retry after some time');
          this.router.navigate(['/head']);
          // add current page routing if payment fails
        });
      })
    }
  };
  constructor(private data: DataService, private router: Router, private windwoRef: WindowRefService, private zone: NgZone) {
    this.getData();
    this._window = this.windwoRef.nativeWindow;
  }
  ngOnInit(){}

  createRazoPay(price, id) {
    this.options.amount = parseFloat(price) * 100;
    this.rzp = new this.windwoRef.nativeWindow.Razorpay(this.options);
    this.rzp.open();
  }
  paymentHandler() {
    this.zone.run(() => {
      this.router.navigate(['/sucess']);
    });
  }
  getData() {
    this.data.fetchData().subscribe((item: Product) => this.productData = item);
  }



}

