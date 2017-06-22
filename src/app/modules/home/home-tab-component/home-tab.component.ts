import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  moduleId: module.id,
  selector: 'home-tab',
  templateUrl: 'home-tab.component.html',
   providers: [ProductService]
})

export class HomeTabComponent implements OnInit {

  public pSaree;
  public pSuit;
  public pLengha;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProducts('saree', 10, 1).then(pResponse => {
      this.pSaree = pResponse.data;
    });
    this._productService.getProducts('suit', 10, 1).then(pResponse => {
      this.pSuit = pResponse.data;
    });
    this._productService.getProducts('lengha', 10, 1).then(pResponse => {
      this.pLengha = pResponse.data;
    });
  }

}
