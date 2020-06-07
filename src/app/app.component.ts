import { Product } from './model/product-model';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Razor-Pay';
  public productData: Product;
  constructor(private data: DataService) {}
  getData() {
    this.data.fetchData().subscribe((item: Product) => this.productData = item);
    console.log(this.productData);
  }
}
