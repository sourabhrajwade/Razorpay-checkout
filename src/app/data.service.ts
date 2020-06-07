
import { Product } from './model/product-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;
  private URL = 'https:/5ed162594e6d7200163a0830.mockapi.io/rvsp/products';

  private dataGen = new BehaviorSubject<Product>(this.data);
  dataEmit = this.dataGen.asObservable();
  constructor(private http: HttpClient) {}
  fetchData() {
    this.data = this.http.get<Product>(this.URL);
    return this.data;
  }


}
