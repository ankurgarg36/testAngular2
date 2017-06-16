import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {SareesComponent} from './sarees-component/sarees.component';
import {productRoutedComponents, ProductRoutingModule} from './product-routing.module';
import {ProductService} from '../../services/product.service';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  imports: [BrowserModule, FormsModule, ProductRoutingModule, Ng2PaginationModule],
  declarations: [productRoutedComponents],
  bootstrap: [SareesComponent],
  providers: [ProductService]
})

export class ProductModule {
}
