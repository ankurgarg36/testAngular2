import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import {productRoutedComponents, ProductRoutingModule} from './product-routing.module';
import {ProductService} from '../../services/product.service';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product-component';

@NgModule({
  imports: [
    FormsModule,
    ProductRoutingModule,
    CommonModule,
    NgbPaginationModule.forRoot()],
  declarations: [productRoutedComponents, ProductComponent],
  providers: [ProductService]
})

export class ProductModule {
}
