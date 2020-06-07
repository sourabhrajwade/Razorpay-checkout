import { Router } from '@angular/router';
import { Product } from './model/product-model';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Razor-Pay';
  productData: Product;

  constructor(private data: DataService, private router: Router) {
    this.getData();
  }
  ngOnInit(){
  }

  getData() {
    this.data.fetchData().subscribe((item: Product) => this.productData = item);
  }
  navigate(head) {
    this.router.navigate(['/head', head.id]);
  }


}
