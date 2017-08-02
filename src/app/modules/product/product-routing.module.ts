import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SareesComponent} from './sarees-component/sarees.component';
import {ProductDetailComponent} from './product-detail-component/product-detail.component';
import {SuitSalvarComponent} from './suit-salvar-component/suit-salvar.component';
import {LenghaComponent} from './lengha-component/lengha.component';
import {UploadComponent} from './upload-component/upload-component';
import {ProductComponent} from './product-component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
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
        path: ':product-category/:product-title/:product-code',
        component: ProductDetailComponent
      },
      {
        path: 'upload',
        component: UploadComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}


export const productRoutedComponents = [SareesComponent, ProductDetailComponent, SuitSalvarComponent, LenghaComponent, UploadComponent];
