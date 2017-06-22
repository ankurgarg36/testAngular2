import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ProductCategory} from '../../../app-config.constants';
import {ProductResponse} from '../../../response/product.response';

@Component({
  moduleId: module.id,
  selector: 'home-tab',
  templateUrl: 'home-tab.component.html',
  providers: [ProductService]
})

export class HomeTabComponent implements OnInit {

  public pSaree: ProductResponse;
  public pSuit: ProductResponse;
  public pLengha: ProductResponse;

  public productCategory: object;

  constructor(private _productService: ProductService) {
    this.productCategory = ProductCategory;
  }

  ngOnInit(): void {
    this._productService.getProducts(ProductCategory.saree, 10, 1).then(pResponse => {
      this.pSaree = pResponse.data;
    });
  }

  public getProducts(config: any): void {
    if (config.nextId === ProductCategory.saree) {
      this._productService.getProducts(ProductCategory.saree, 10, 1).then(pResponse => {
        this.pSaree = pResponse.data;
      });
    }
    if (config.nextId === ProductCategory.suit) {
      this._productService.getProducts(ProductCategory.saree, 10, 1).then(pResponse => {
        this.pSuit = pResponse.data;
      });
    }
    if (config.nextId === ProductCategory.lengha) {
      this._productService.getProducts(ProductCategory.saree, 10, 1).then(pResponse => {
        this.pLengha = pResponse.data;
      });
    }
  }

}
