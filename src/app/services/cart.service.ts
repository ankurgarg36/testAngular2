/**
 * Created by ankur on 28/8/17.
 */
import {Injectable} from '@angular/core';
import {ProductResponse} from '../response/product.response';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class CartService {
    private itemsInCartSubject: BehaviorSubject<ProductResponse[]> = new BehaviorSubject([]);
    private itemsInCart: ProductResponse[] = [];
    private itemToIncreateQuantity: any;

    constructor() {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }

    public addToCart(item: ProductResponse, qty: number = 0) {
        const currentItems = [...this.itemsInCart];
        if (currentItems.filter(_ => _.productCode === item.productCode).length > 0) {
            this.itemToIncreateQuantity = currentItems.filter(_ => _.productCode === item.productCode)[0];
            const itemsWithoutRemoved = currentItems.filter(_ => _.productCode !== item.productCode);
            if (qty !== 0) {
                this.itemToIncreateQuantity.quantity = qty;
            } else {
                this.itemToIncreateQuantity.quantity = +this.itemToIncreateQuantity.quantity + 1;
            }
            this.itemsInCartSubject.next(itemsWithoutRemoved.concat(this.itemToIncreateQuantity));
        } else {
            this.itemsInCartSubject.next([...this.itemsInCart, item]);
        }
    }

    public removeFromCart(item: ProductResponse) {
        const currentItems = [...this.itemsInCart];
        const itemsWithoutRemoved = currentItems.filter(_ => _.productCode !== item.productCode);
        this.itemsInCartSubject.next(itemsWithoutRemoved);
    }

    public getItems(): Observable<ProductResponse[]> {
        return this.itemsInCartSubject.asObservable();
    }

    public getTotalAmount(): Observable<number> {
        return this.itemsInCartSubject.map((items: ProductResponse[]) => {
            return items.reduce((prev, curr: ProductResponse) => {
                return prev + (+curr.price * +curr.quantity);
            }, 0);
        });
    }
}
