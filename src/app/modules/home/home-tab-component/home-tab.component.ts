import {Component, HostListener} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {ProductCategory} from '../../../app-config.constants';
import {ProductResponse} from '../../../response/product.response';

@Component({
  moduleId: module.id,
  selector: 'home-tab',
  templateUrl: 'home-tab.component.html',
  providers: [ProductService]
})

export class HomeTabComponent {

  public pSaree: ProductResponse;
  public pSuit: ProductResponse;
  public pLengha: ProductResponse;

  public productCategory: object;
  public loadProduct: boolean;

  constructor(private _productService: ProductService) {
    this.productCategory = ProductCategory;
    this.loadProduct = true;
  }

  @HostListener('window:scroll', ['$event']) scroll($event) {
    if (this.loadProduct === true && ((window.innerHeight + window.scrollY) >= 1400)) {
      this.loadProduct = false;
      this._productService.getProducts(ProductCategory.saree, 10, 1).then(pResponse => {
        this.pSaree = pResponse.data;
      });
    }
  }

  public getProducts(config: any): void {
    if (config.nextId === ProductCategory.saree) {
      this._productService.getProducts(ProductCategory.saree, 10, 1).then(pResponse => {
        this.pSaree = pResponse.data;
      });
    }
    if (config.nextId === ProductCategory.suit) {
      this._productService.getProducts(ProductCategory.suit, 10, 1).then(pResponse => {
        this.pSuit = pResponse.data;
      });
    }
    if (config.nextId === ProductCategory.lengha) {
      this._productService.getProducts(ProductCategory.lengha, 10, 1).then(pResponse => {
        this.pLengha = pResponse.data;
      });
    }
  }

}
