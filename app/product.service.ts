import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {
	private productsURL = 'https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals';

	constructor(private http: Http) { }

	getProducts(): Promise<Product[]> {
			return this.http
			.get(this.productsURL)
			.toPromise()
			.then(response => response.json().deals as Product[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error);
    	return Promise.reject(error.message || error);
  	}

}