import { Subscription } from 'rxjs';
import { Product } from './../model/product-model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public productId;
  public title;
  private productData: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productId = id;

  }

  ngOnInit() {
    this.data.fetchData().subscribe(item => this.productData = item);
    console.log(this.productId);
  }
}
