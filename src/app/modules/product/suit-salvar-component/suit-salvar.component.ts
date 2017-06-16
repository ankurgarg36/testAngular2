import {Component, OnInit} from '@angular/core';
import {ProductMaterialResponse} from '../../../response/product-material.response';
import {ProductColorResponse} from '../../../response/product-color.response';
import {PriceRange, ProductCategory, ProductType} from '../../../app-config.constants';
import {SearchBasedProductResponse} from '../../../response/search-based-product.response';
import {ProductService} from '../../../services/product.service';

@Component({
    moduleId: module.id,
    selector: 'suit-salvar-component',
    templateUrl: 'suit-salvar.component.html'
})

export class SuitSalvarComponent implements OnInit {
    public products;
    public productMaterial;
    public productColor;
    public productPrice: any;
    public searchTerm: any;

    public selectedColor = '';
    public selectedMaterial = '';
    public selectedPrice = '';

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this._productService.getProducts(ProductCategory.suit).then(pResponse => {
            this.products = pResponse;
        });

        this._productService
            .getProductMaterial(ProductType.suit)
            .subscribe((mResponse: ProductMaterialResponse[]) => this.productMaterial = mResponse,
                error => console.log(error),
                () => console.log('Get all material complete'));

        this._productService
            .getProductColor(ProductType.suit)
            .subscribe((cResponse: ProductColorResponse[]) => this.productColor = cResponse,
                error => console.log(error),
                () => console.log('Get all color complete'));
        this.productPrice = PriceRange;
    }

    materialFilter(materialType: number) {
        this.selectedColor = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(ProductCategory.suit, materialType)
            .subscribe((cResponse: SearchBasedProductResponse) => {
                    this.products = cResponse.products;
                    this.searchTerm = cResponse.searchTitle;
                },
                error => console.log(error));
    }

    colorFilter(colorType: number) {
        this.selectedMaterial = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(ProductCategory.suit, null, colorType)
            .subscribe((cResponse: SearchBasedProductResponse) => {
                    this.products = cResponse.products;
                    this.searchTerm = cResponse.searchTitle;
                },
                error => console.log(error));
    }

    priceFilter(priceTag: string) {
        this.selectedMaterial = '';
        this.selectedColor = '';
        this._productService
            .getSearchBasedProducts(ProductCategory.suit, null, null, priceTag)
            .subscribe((cResponse: SearchBasedProductResponse) => {
                    this.products = cResponse.products;
                    this.searchTerm = cResponse.searchTitle;
                },
                error => console.log(error));
    }

}
