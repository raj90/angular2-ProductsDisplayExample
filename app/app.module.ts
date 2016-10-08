import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RatingModule } from "ng2-rating";

import './rxjs-extensions';
import { AppComponent }   from './app.component';
import { routing, routedComponents } from './app.routing';
import { ProductService } from './product.service';
import { BroadcastService } from './broadcast.service';
import { DefaultImageDirective } from './defaultimage.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing, RatingModule ],
  declarations: [ AppComponent, routedComponents, DefaultImageDirective ],
  providers: 	[ ProductService, BroadcastService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }