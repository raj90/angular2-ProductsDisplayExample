import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RatingModule} from "ng2-rating";

import { Product } from './product';
import { ProductService } from './product.service';  
import { BroadcastService } from './broadcast.service';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})
export class ProductsComponent implements OnInit {
	products: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private broadcastService: BroadcastService) {
    broadcastService.onevent$.subscribe(tagName => this.filterByTagName(tagName));
    broadcastService.onsortevent$.subscribe(sortBy => this.sortProducts(sortBy));
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products);
  }

  filterByTagName(tagName: string) {
    this.productService.getProducts()
      .then(products => this.products = products.filter(product => (product.tags.filter(tag => tag.startsWith(tagName))).length != 0));
  }

  sortProducts(sortBy: string) {
    switch(sortBy) {
      case 'price':
        this.productService.getProducts()
          .then(products => this.products = products.sort((p1,p2) => p1.price - p2.price));
      break;
      case 'rating':
        this.productService.getProducts()
            .then(products => this.products = products.sort((p1,p2) => p1.rating - p2.rating));
      break;
    }
    
  }

}