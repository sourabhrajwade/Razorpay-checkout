import { Product } from './model/product-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data;
  private URL = 'https:/5ed162594e6d7200163a0830.mockapi.io/rvsp/products';
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http.get<Product>(this.URL);
  }

}
