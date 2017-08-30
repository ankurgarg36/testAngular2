/**
 * Created by ankur on 28/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {of} from 'rxjs/observable/of';
import {ProductResponse} from '../../../response/product.response';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'spa-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    public shoppingCartItems$: Observable<ProductResponse[]> = of([]);
    public shoppingCartItems: ProductResponse[] = [];

    constructor(private cartService: CartService) {
        this.shoppingCartItems$ = this
            .cartService
            .getItems();

        this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    }

    ngOnInit() {
    }

    public getTotal(): Observable<number> {
        return this.cartService.getTotalAmount();
    }

    public removeItem(item: ProductResponse) {
        this.cartService.removeFromCart(item);
    }

    public updateQuantity(item: ProductResponse, qty: number) {
        this.cartService.addToCart(item, qty);
    }
}
