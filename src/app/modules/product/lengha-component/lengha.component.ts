import {Component, OnInit} from '@angular/core';

import {ProductMaterialResponse} from '../../../response/product-material.response';
import {ProductColorResponse} from '../../../response/product-color.response';
import {PriceRange, ProductCategory, ProductType} from '../../../app-config.constants';
import {SearchBasedProductResponse} from '../../../response/search-based-product.response';
import {ProductService} from '../../../services/product.service';

@Component({
    moduleId: module.id,
    selector: 'lengha-component',
    templateUrl: 'lengha.component.html',
})

export class LenghaComponent implements OnInit {
    public products;
    public productMaterial;
    public productColor;
    public productPrice: any;
    public searchTerm: any;

    public selectedColor = '';
    public selectedMaterial = '';
    public selectedPrice = '';

    public maxSize;  // total no of pages
    public collectionSize; // total no of items.
    public currentPage = 1; // default page
    public pageSize = 10;  // no of items per page

    constructor(private _productService: ProductService) {
    }
    public pageChanged(event: any): void {
        this._productService.getProducts(ProductCategory.lengha, this.pageSize, event).then(pResponse => {
            this.products = pResponse.data;
        });
    };
    ngOnInit(): void {
        this._productService.getProducts(ProductCategory.lengha, this.pageSize, 1).then(pResponse => {
            this.products = pResponse.data;
            this.collectionSize = pResponse.totalRecords;
            this.maxSize = Math.ceil(this.collectionSize / this.pageSize);
        });

        this._productService
            .getProductMaterial(ProductType.lengha)
            .subscribe((mResponse: ProductMaterialResponse[]) => this.productMaterial = mResponse,
                error => console.log(error),
                () => console.log('Get all material complete'));

        this._productService
            .getProductColor(ProductType.lengha)
            .subscribe((cResponse: ProductColorResponse[]) => this.productColor = cResponse,
                error => console.log(error),
                () => console.log('Get all color complete'));
        this.productPrice = PriceRange;
    }

    materialFilter(materialType: number) {
        this.selectedColor = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(ProductCategory.lengha, materialType)
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
            .getSearchBasedProducts(ProductCategory.lengha, null, colorType)
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
            .getSearchBasedProducts(ProductCategory.lengha, null, null, priceTag)
            .subscribe((cResponse: SearchBasedProductResponse) => {
                    this.products = cResponse.products;
                    this.searchTerm = cResponse.searchTitle;
                },
                error => console.log(error));
    }

}
