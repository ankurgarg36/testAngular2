import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SareesComponent} from './sarees-component/sarees.component';
import {ProductDetailComponent} from './product-detail-component/product-detail.component';
import {SuitSalvarComponent} from './suit-salvar-component/suit-salvar.component';
import {LenghaComponent} from './lengha-component/lengha.component';

const routes: Routes = [
  {
    path: 'sarees',
    component: SareesComponent
  },
  {
    path: 'suit',
    component: SuitSalvarComponent
  },
  {
    path: 'lengha',
    component: LenghaComponent
  },
  {
    path: 'product/:product-category/:product-title/:product-code',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}

export const productRoutedComponents = [SareesComponent, ProductDetailComponent, SuitSalvarComponent, LenghaComponent];
