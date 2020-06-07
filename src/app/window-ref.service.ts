import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ICustomeWindow extends Window {
  _window_global: string;
}

function getWindow(): any {
  // return the global native browser window object
  return window;
}


@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor(private http: HttpClient) { }

  get nativeWindow(): any {
    return getWindow();
  }

  getOrderId(amount, id): Observable<any>{
    const data = {
      amount: 'amount',
      currency: 'INR',
      reciept: `rcpti_${id}`,
      payment_capture: 1,
    };
    const credential = window.btoa('key_id:key_secret');
    return this.http.post('https://api.razorpay.com/v1/orders', data, {
      headers: new HttpHeaders({
        Authorization: `Basic ${credential}`
      })
    });
  }

  getOrderDetail(orderId) {
    const credential = window.btoa('key_id:key_secret');
    return this.http.get(`https://api.razorpay.com/v1/orders/${orderId}/payments`, {
      headers: new HttpHeaders({
        Authorization: `basic ${credential}`
      }),
    });
  }
}
