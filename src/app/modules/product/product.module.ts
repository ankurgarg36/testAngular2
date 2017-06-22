import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {SareesComponent} from './sarees-component/sarees.component';
import {productRoutedComponents, ProductRoutingModule} from './product-routing.module';
import {ProductService} from '../../services/product.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, ProductRoutingModule,
    NgbPaginationModule.forRoot()],
  declarations: [productRoutedComponents],
  bootstrap: [SareesComponent],
  providers: [ProductService]
})

export class ProductModule {
}
