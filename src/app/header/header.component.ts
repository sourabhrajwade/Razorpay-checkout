import { Product } from './../model/product-model';

import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public productData: Product;

  constructor(private data: DataService) { }

  ngOnInit(){
  }
  getData() {
    this.data.fetchData().subscribe((item: Product) => this.productData = item);
    console.log(this.productData);

  }


}
