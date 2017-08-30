import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {ProductResponse} from '../../../response/product.response';
import {CartService} from '../../../services/cart.service';

/*import  '../../../../resources/js/jquery-1.11.3.min.js'
 import  '../../../../resources/js/cloud-zoom.1.0.2.min.js'*/

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['cloud-zoom.css'],
})

export class ProductDetailComponent implements OnInit {
  public product;
  public productSuggestions;
  // elementRef: ElementRef;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _productService: ProductService,
              private cartService: CartService
              /*@Inject(ElementRef) elementRef: ElementRef*/) {
    /*this.elementRef = elementRef;*/
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      const pCode = +params['product-code'];
      const pCategory = params['product-category'];

      this._productService
          .getProduct(pCategory, pCode)
          .subscribe(pResponse => {
            if (pResponse == null || pResponse.length === 0) {
              this.router.navigate(['**']);
            }
            this.product = pResponse.pd;
            this.productSuggestions = pResponse.ps;
          });

    });

    // jQuery(this.elementRef.nativeElement).find(".cloud-zoom").CloudZoom();
  }
    public addToCart(product: ProductResponse) {
        this.cartService.addToCart(product);
        // this.router.navigateByUrl('product/cart');
    }
}
