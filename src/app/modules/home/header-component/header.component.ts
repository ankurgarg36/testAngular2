import {Component, ViewEncapsulation} from '@angular/core';
import {MenuLinks} from '../../../app-config.constants';
import {Observable} from 'rxjs/Observable';
import {ProductResponse} from '../../../response/product.response';
import {CartService} from '../../../services/cart.service';

@Component({
  moduleId: module.id,
  selector: 'header-component',
  templateUrl: 'header.component.html',
  styles: [`.open-shopping-cart {
    background: url("../../../../assets/images/cart_icon.png") no-repeat 0 0;
    display: inline-block;
    height: 64px;
    width: 64px;
    float: right;
    text-align: center;
    padding-top: 16px;
    padding-left: 10px;
  }.cart-text {
    font-size: 16px;
    color: #FFFFFF;
   }`],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  public menuLinks;
  public shoppingCartItems$: Observable<ProductResponse[]>;
  constructor(private cartService: CartService) {
    this.menuLinks = MenuLinks;
    this.shoppingCartItems$ = this
        .cartService
        .getItems();

    this.shoppingCartItems$.subscribe(_ => _);
  }
}
