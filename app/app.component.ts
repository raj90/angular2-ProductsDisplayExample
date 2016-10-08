import { Component } from '@angular/core';

import { BroadcastService } from './broadcast.service';

@Component({
  selector: 'my-app',
  template: `
  	                   <div class="row">
  			           <div id="custom-search-input" class="m-a-1 col-sm-6">
                            <div class="input-group col-md-12">
                                <input #searchBox (keyup)="searchValueChanged(searchBox.value)" (change)="searchValueChanged(searchBox.value)" (enter)="searchValueChanged(searchBox.value)" type="text" class="search-query form-control" placeholder="Search (By tag name)" />
                                <span class="input-group-btn">
                                    <button class="btn btn-inverse" type="button" (click)="searchValueChanged(searchBox.value)">
                                        <span class=" fa fa-search"></span>
                                    </button>
                                </span>
                            </div>
                        </div>

                        <div class="d-inline-block m-t-1 col-sm-3">
                        	<strong><span class="text-muted">Sort By:</span></strong>
                        	
                        	<label class="radio-inline"><input type="radio" name="sortby" (click)="sortProducts('rating')">Rating</label>
							<label class="radio-inline"><input type="radio" name="sortby" (click)="sortProducts('price')">Price</label>


                        </div>

                        </div>

  			<router-outlet></router-outlet>`,
  styleUrls: ['style.css']
})
export class AppComponent { 
	title = 'Sapient eCom';

	constructor(private broadcastService: BroadcastService) {
        
    }

	searchValueChanged(searchString: string) : void {
		this.broadcastService.broadcast(searchString);
	}

	sortProducts(sortBy: string) : void {
		this.broadcastService.broadcastSort(sortBy);
	}

}