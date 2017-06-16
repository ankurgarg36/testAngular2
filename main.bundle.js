webpackJsonp([1,5],{

/***/ 158:
/***/ (function(module, exports) {

//# sourceMappingURL=app-config.interface.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SareesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SareesComponent = (function () {
    function SareesComponent(_productService) {
        this._productService = _productService;
        this.selectedColor = '';
        this.selectedMaterial = '';
        this.selectedPrice = '';
    }
    /*  constructor (private _pRequest : ProductRequest){
     _pRequest.category = "sarees";
     }*/
    SareesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].saree).then(function (pResponse) {
            _this.products = pResponse;
        });
        this._productService
            .getProductMaterial(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["e" /* ProductType */].saree)
            .subscribe(function (mResponse) { return _this.productMaterial = mResponse; }, function (error) { return console.log(error); }, function () { return console.log('Get all material complete'); });
        this._productService
            .getProductColor(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["e" /* ProductType */].saree)
            .subscribe(function (cResponse) { return _this.productColor = cResponse; }, function (error) { return console.log(error); }, function () { return console.log('Get all color complete'); });
        this.productPrice = __WEBPACK_IMPORTED_MODULE_1__app_config_constants__["f" /* PriceRange */];
    };
    SareesComponent.prototype.materialFilter = function (materialType) {
        var _this = this;
        this.selectedColor = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].saree, materialType)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    SareesComponent.prototype.colorFilter = function (colorType) {
        var _this = this;
        this.selectedMaterial = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].saree, null, colorType)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    SareesComponent.prototype.priceFilter = function (priceTag) {
        var _this = this;
        this.selectedMaterial = '';
        this.selectedColor = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].saree, null, null, priceTag)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    return SareesComponent;
}());
SareesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sarees-component',
        template: __webpack_require__(318)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], SareesComponent);

var _a;
//# sourceMappingURL=sarees.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_config_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import {Observable} from 'rxjs/Observable';

var HomeService = (function () {
    function HomeService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.headers.append('Access-Control-Allow-Origin', 'true');
    }
    HomeService.prototype.getTopArrivals = function () {
        return this.http.get(this.config.apiEndpoint + 'top-arrival.php')
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(this.handleError);
    };
    HomeService.prototype.saveContactForm = function (contact) {
        return this.http
            .post(this.config.apiEndpoint + 'save-contact.php', JSON.stringify(contact))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /*  private post(hero: Hero): Promise<Hero> {
        return this.http
          .post(this.heroesUrl, JSON.stringify(hero))
          .toPromise()
          .then(res => res.json().data)
          .catch(this.handleError);
      }*/
    HomeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return HomeService;
}());
HomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__app_config_constants__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"]) === "function" && _b || Object])
], HomeService);

var _a, _b;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiEndpoint: 'http://online.inharyanvi.com/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MenuLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ProductType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProductCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PriceRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Regex; });


var AppConfig = {
    apiEndpoint: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint
};
var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('app.config');
var MenuLinks = [
    { url: '/home', text: 'Home' },
    { url: '/about-us', text: 'About Us' },
    { url: '/sarees', text: 'Sarees' },
    { url: '/suit', text: 'Suit-Salvar' },
    { url: '/lengha', text: 'Lengha-Chunni' },
    { url: '/contact', text: 'Contact Us' },
];
var ProductType = {
    saree: 1,
    suit: 2,
    lengha: 3,
};
var ProductCategory = {
    saree: 'saree',
    suit: 'suit',
    lengha: 'lengha',
};
var PriceRange = [
    { range: '0-1000', text: 'less than 1000' },
    { range: '1000-1500', text: '1000-1500' },
    { range: '1500-2000', text: '1500-2000' },
    { range: '2000-3000', text: '2000-3000' },
    { range: '3000', text: 'Above 3000' }
];
var Regex = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};
//# sourceMappingURL=app-config.constants.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 217;


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_modules_home_home_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(161);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_modules_home_home_module__["a" /* HomeModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'about-us-component',
        template: __webpack_require__(306),
    })
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(307),
        styles: [__webpack_require__(298)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_constants__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomBlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottomBlockComponent = (function () {
    function BottomBlockComponent() {
        this.footerLinks1 = __WEBPACK_IMPORTED_MODULE_1__app_config_constants__["g" /* MenuLinks */].slice(0, 2);
        this.footerLinks2 = __WEBPACK_IMPORTED_MODULE_1__app_config_constants__["g" /* MenuLinks */].slice(2, 4);
        this.footerLinks3 = __WEBPACK_IMPORTED_MODULE_1__app_config_constants__["g" /* MenuLinks */].slice(4, 6);
    }
    return BottomBlockComponent;
}());
BottomBlockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bottom-block',
        template: __webpack_require__(308)
    }),
    __metadata("design:paramtypes", [])
], BottomBlockComponent);

//# sourceMappingURL=bottom-block.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(fb, homeService) {
        this.fb = fb;
        this.homeService = homeService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contact = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_2__app_config_constants__["c" /* Regex */].email)]],
            subject: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            message: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(10)]]
        });
    };
    ContactComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(valid);
        this.homeService
            .saveContactForm(value)
            .then(function (fResponse) { return _this.formResponse = fResponse; });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-component',
        template: __webpack_require__(309),
        styles: [__webpack_require__(299)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_home_service__["a" /* HomeService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-component',
        template: __webpack_require__(310)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_constants__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent() {
        this.menuLinks = __WEBPACK_IMPORTED_MODULE_1__app_config_constants__["g" /* MenuLinks */];
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header-component',
        template: __webpack_require__(311)
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_js_jquery_bxslider_js__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_js_jquery_bxslider_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_assets_js_jquery_bxslider_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import 'assets/js/jquery-1.11.3.min.js';


var HomeComponent = (function () {
    function HomeComponent(elementRef, router) {
        this.router = router;
        this.elementRef = elementRef;
        router.events.subscribe(function (myEvent) {
            if (myEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        $(this.elementRef.nativeElement).find('.bxslider').bxSlider({
            infiniteLoop: true,
            hideControlOnEnd: false,
            auto: true
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-component',
        styles: [__webpack_require__(300)],
        template: __webpack_require__(312),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component_home_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_component_page_not_found_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_component_contact_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_us_component_about_us_component__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_4__contact_component_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about-us',
        component: __WEBPACK_IMPORTED_MODULE_5__about_us_component_about_us_component__["a" /* AboutUsComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_component_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], HomeRoutingModule);

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__home_component_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__contact_component_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_5__about_us_component_about_us_component__["a" /* AboutUsComponent */], __WEBPACK_IMPORTED_MODULE_3__page_not_found_component_page_not_found_component__["a" /* PageNotFoundComponent */]];
//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeTabComponent = (function () {
    function HomeTabComponent(_productService) {
        this._productService = _productService;
    }
    HomeTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts('saree', 10).then(function (pResponse) {
            _this.pSaree = pResponse;
        });
        this._productService.getProducts('suit', 10).then(function (pResponse) {
            _this.pSuit = pResponse;
        });
        this._productService.getProducts('lengha', 10).then(function (pResponse) {
            _this.pLengha = pResponse;
        });
    };
    return HomeTabComponent;
}());
HomeTabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-tab',
        template: __webpack_require__(313),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], HomeTabComponent);

var _a;
//# sourceMappingURL=home-tab.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component_app_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_routing_module__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_component_header_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_component_footer_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bottom_block_component_bottom_block_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__top_arrival_component_top_arrival_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_tab_component_home_tab_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_module__ = __webpack_require__(243);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_component_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_component_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bottom_block_component_bottom_block_component__["a" /* BottomBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_9__top_arrival_component_top_arrival_component__["a" /* TopArrivalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_routing_module__["a" /* routedComponents */],
            __WEBPACK_IMPORTED_MODULE_11__home_tab_component_home_tab_component__["a" /* HomeTabComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__product_product_module__["a" /* ProductModule */],
            __WEBPACK_IMPORTED_MODULE_5__home_routing_module__["b" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_10__app_config_constants__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_10__app_config_constants__["b" /* AppConfig */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component_app_component__["a" /* AppComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-not-found-component',
        template: __webpack_require__(314),
    })
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopArrivalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopArrivalComponent = (function () {
    function TopArrivalComponent(_homeService) {
        this._homeService = _homeService;
    }
    TopArrivalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.getTopArrivals().then(function (topArr) {
            _this.topArrivals = topArr;
        });
    };
    return TopArrivalComponent;
}());
TopArrivalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'top-arrival',
        template: __webpack_require__(315),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]) === "function" && _a || Object])
], TopArrivalComponent);

var _a;
//# sourceMappingURL=top-arrival.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LenghaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LenghaComponent = (function () {
    function LenghaComponent(_productService) {
        this._productService = _productService;
        this.selectedColor = '';
        this.selectedMaterial = '';
        this.selectedPrice = '';
    }
    LenghaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].lengha).then(function (pResponse) {
            _this.products = pResponse;
        });
        this._productService
            .getProductMaterial(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["e" /* ProductType */].lengha)
            .subscribe(function (mResponse) { return _this.productMaterial = mResponse; }, function (error) { return console.log(error); }, function () { return console.log('Get all material complete'); });
        this._productService
            .getProductColor(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["e" /* ProductType */].lengha)
            .subscribe(function (cResponse) { return _this.productColor = cResponse; }, function (error) { return console.log(error); }, function () { return console.log('Get all color complete'); });
        this.productPrice = __WEBPACK_IMPORTED_MODULE_1__app_config_constants__["f" /* PriceRange */];
    };
    LenghaComponent.prototype.materialFilter = function (materialType) {
        var _this = this;
        this.selectedColor = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].lengha, materialType)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    LenghaComponent.prototype.colorFilter = function (colorType) {
        var _this = this;
        this.selectedMaterial = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].lengha, null, colorType)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    LenghaComponent.prototype.priceFilter = function (priceTag) {
        var _this = this;
        this.selectedMaterial = '';
        this.selectedColor = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].lengha, null, null, priceTag)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    return LenghaComponent;
}());
LenghaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'lengha-component',
        template: __webpack_require__(316)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], LenghaComponent);

var _a;
//# sourceMappingURL=lengha.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = (function () {
    // elementRef: ElementRef;
    function ProductDetailComponent(route, router, _productService) {
        this.route = route;
        this.router = router;
        this._productService = _productService;
        /*this.elementRef = elementRef;*/
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var pCode = +params['product-code'];
            var pCategory = params['product-category'];
            _this._productService
                .getProduct(pCategory, pCode)
                .subscribe(function (pResponse) {
                if (pResponse == null || pResponse.length === 0) {
                    _this.router.navigate(['**']);
                }
                _this.product = pResponse.pd;
                _this.productSuggestions = pResponse.ps;
            });
        });
        // jQuery(this.elementRef.nativeElement).find(".cloud-zoom").CloudZoom();
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-detail',
        template: __webpack_require__(317),
        styles: [__webpack_require__(301)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sarees_component_sarees_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_component_product_detail_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__suit_salvar_component_suit_salvar_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lengha_component_lengha_component__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return productRoutedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'sarees',
        component: __WEBPACK_IMPORTED_MODULE_2__sarees_component_sarees_component__["a" /* SareesComponent */]
    },
    {
        path: 'suit',
        component: __WEBPACK_IMPORTED_MODULE_4__suit_salvar_component_suit_salvar_component__["a" /* SuitSalvarComponent */]
    },
    {
        path: 'lengha',
        component: __WEBPACK_IMPORTED_MODULE_5__lengha_component_lengha_component__["a" /* LenghaComponent */]
    },
    {
        path: 'product/:product-category/:product-title/:product-code',
        component: __WEBPACK_IMPORTED_MODULE_3__product_detail_component_product_detail_component__["a" /* ProductDetailComponent */]
    },
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ProductRoutingModule);

var productRoutedComponents = [__WEBPACK_IMPORTED_MODULE_2__sarees_component_sarees_component__["a" /* SareesComponent */], __WEBPACK_IMPORTED_MODULE_3__product_detail_component_product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_4__suit_salvar_component_suit_salvar_component__["a" /* SuitSalvarComponent */], __WEBPACK_IMPORTED_MODULE_5__lengha_component_lengha_component__["a" /* LenghaComponent */]];
//# sourceMappingURL=product-routing.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sarees_component_sarees_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_routing_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pagination__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__product_routing_module__["a" /* ProductRoutingModule */], __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__["Ng2PaginationModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__product_routing_module__["b" /* productRoutedComponents */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__sarees_component_sarees_component__["a" /* SareesComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */]]
    })
], ProductModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuitSalvarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuitSalvarComponent = (function () {
    function SuitSalvarComponent(_productService) {
        this._productService = _productService;
        this.selectedColor = '';
        this.selectedMaterial = '';
        this.selectedPrice = '';
    }
    SuitSalvarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].suit).then(function (pResponse) {
            _this.products = pResponse;
        });
        this._productService
            .getProductMaterial(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["e" /* ProductType */].suit)
            .subscribe(function (mResponse) { return _this.productMaterial = mResponse; }, function (error) { return console.log(error); }, function () { return console.log('Get all material complete'); });
        this._productService
            .getProductColor(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["e" /* ProductType */].suit)
            .subscribe(function (cResponse) { return _this.productColor = cResponse; }, function (error) { return console.log(error); }, function () { return console.log('Get all color complete'); });
        this.productPrice = __WEBPACK_IMPORTED_MODULE_1__app_config_constants__["f" /* PriceRange */];
    };
    SuitSalvarComponent.prototype.materialFilter = function (materialType) {
        var _this = this;
        this.selectedColor = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].suit, materialType)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    SuitSalvarComponent.prototype.colorFilter = function (colorType) {
        var _this = this;
        this.selectedMaterial = '';
        this.selectedPrice = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].suit, null, colorType)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    SuitSalvarComponent.prototype.priceFilter = function (priceTag) {
        var _this = this;
        this.selectedMaterial = '';
        this.selectedColor = '';
        this._productService
            .getSearchBasedProducts(__WEBPACK_IMPORTED_MODULE_1__app_config_constants__["d" /* ProductCategory */].suit, null, null, priceTag)
            .subscribe(function (cResponse) {
            _this.products = cResponse.products;
            _this.searchTerm = cResponse.searchTitle;
        }, function (error) { return console.log(error); });
    };
    return SuitSalvarComponent;
}());
SuitSalvarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'suit-salvar-component',
        template: __webpack_require__(319)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], SuitSalvarComponent);

var _a;
//# sourceMappingURL=suit-salvar.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)(false);
// imports


// module
exports.push([module.i, "/****Form****/\n\n#form {\npadding-top: 3px;\n}\n\n#form input {\n\tcolor:#263555;\n\t border: 1px solid #d4d0d0;\n padding: 4px 10px 6px;\n\twidth: 100%;\n\tbackground-color: #fcfafa;\n\ttext-transform: uppercase;\n\theight: 28px;\n\tfloat:left;\n\tfont: 13px/18px  Arial, Helvetica, sans-serif;\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box; /*Firefox 1-3*/\n\t-webkit-box-sizing: border-box; /* Safari */\n}\n\n#form textarea {\n\tcolor:#263555;\n\theight: 233px;\n\ttext-transform: uppercase;\n\toverflow: auto;\n\tbackground-color: #fcfafa;\n\n\t border: 1px solid #d4d0d0;\n padding: 15px 10px 6px;\n\twidth: 100%;\n\tposition: relative;\n\tresize:none;\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box; /*Firefox 1-3*/\n\t-webkit-box-sizing: border-box; /* Safari */\n\tfloat:left;\n\tfont: 13px/18px  Arial, Helvetica, sans-serif;\n\tmargin: 0;\n\n}\n#form label {\n\tposition:relative;\n\tdisplay: block;\n\tmin-height: 45px;\n\twidth: 100%;\n\tfloat: left;\n}\n\n\n\n\n\n#form .error, #form .empty {\n\tcolor: #FF0000;\n\tdisplay: block;\n\tfont-size: 11px;\n\tline-height:14px;\n\twidth:auto;\n\tposition: absolute;\n\tz-index: 999;\n\tright: 5px;\n\ttop: 7px;\n\tfloat:left;\n}\n\n\n/*#form .error-empty {\n\tdisplay:none;\n\tfloat:left;\n}*/\n\n.btns {\n\tposition:relative;\n\tpadding-top: 22px;\n\ttext-align: right;\n\n}\n\n\n.btns .btn {\n\tmargin: 0 !important;\n\tpadding-left: 20px;\n\tpadding-right: 20px;\n\tcursor: pointer;\n}\n\n.btns .btn {\n\tmargin-left: 18px !important;\n}\n\n#form .message {\n\twidth: 100%;\n\tmargin-top: -3px;\n}\n\n#form .btns span {\n\tdisplay: inline-block;\n\twidth: 13px;\n}\n\n\n.message br {\n\theight: 0;\n\tline-height: 0;\n}\n\n#form .success {\n\ttext-transform: uppercase;\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 100%;\n\tfont-size: 16px;\n\tbackground: #fcfafa;\n\tcolor:#263555;\n\tborder: 1px solid #d4d0d0;\n\ttext-align: center;\n\tfont-size: 11px;\n\tpadding: 20px 10px;\n\tz-index: 999;\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box; /*Firefox 1-3*/\n\t-webkit-box-sizing: border-box; /* Safari */\n}\n\n\n\n.success_wrapper {\n\tposition: relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)(false);
// imports


// module
exports.push([module.i, "/** VARIABLES\n===================================*/\n/** RESET AND LAYOUT\n===================================*/\n.bx-wrapper {\n  position: relative;\n  margin: 0 auto 60px;\n  padding: 0;\n  *zoom: 1;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n.bx-wrapper img {\n  max-width: 100%;\n  display: block;\n}\n.bxslider {\n  margin: 0;\n  padding: 0;\n}\nul.bxslider {\n  list-style: none;\n}\n.bx-viewport {\n  /*fix other elements on the page moving (on Chrome)*/\n  -webkit-transform: translatez(0);\n}\n/** THEME\n===================================*/\n.bx-wrapper {\n  box-shadow: 0 0 5px #ccc;\n  border: 5px solid #fff;\n  background: #fff;\n}\n.bx-wrapper .bx-pager,\n.bx-wrapper .bx-controls-auto {\n  position: absolute;\n  bottom: -30px;\n  width: 100%;\n}\n/* LOADER */\n.bx-wrapper .bx-loading {\n  min-height: 50px;\n  background: url(" + __webpack_require__(585) + ") center center no-repeat #ffffff;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n}\n/* PAGER */\n.bx-wrapper .bx-pager {\n  text-align: center;\n  font-size: .85em;\n  font-family: Arial;\n  font-weight: bold;\n  color: #666;\n  padding-top: 20px;\n}\n.bx-wrapper .bx-pager.bx-default-pager a {\n  background: #666;\n  text-indent: -9999px;\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin: 0 5px;\n  outline: 0;\n  border-radius: 5px;\n}\n.bx-wrapper .bx-pager.bx-default-pager a:hover,\n.bx-wrapper .bx-pager.bx-default-pager a.active,\n.bx-wrapper .bx-pager.bx-default-pager a:focus {\n  background: #000;\n}\n.bx-wrapper .bx-pager-item,\n.bx-wrapper .bx-controls-auto .bx-controls-auto-item {\n  display: inline-block;\n  *zoom: 1;\n  *display: inline;\n}\n.bx-wrapper .bx-pager-item {\n  font-size: 0;\n  line-height: 0;\n}\n/* DIRECTION CONTROLS (NEXT / PREV) */\n.bx-wrapper .bx-prev {\n  left: 10px;\n  background: url(" + __webpack_require__(68) + ") no-repeat 0 -32px;\n}\n.bx-wrapper .bx-prev:hover,\n.bx-wrapper .bx-prev:focus {\n  background-position: 0 0;\n}\n.bx-wrapper .bx-next {\n  right: 10px;\n  background: url(" + __webpack_require__(68) + ") no-repeat -43px -32px;\n}\n.bx-wrapper .bx-next:hover,\n.bx-wrapper .bx-next:focus {\n  background-position: -43px 0;\n}\n.bx-wrapper .bx-controls-direction a {\n  position: absolute;\n  top: 50%;\n  margin-top: -16px;\n  outline: 0;\n  width: 32px;\n  height: 32px;\n  text-indent: -9999px;\n  z-index: 9999;\n}\n.bx-wrapper .bx-controls-direction a.disabled {\n  display: none;\n}\n/* AUTO CONTROLS (START / STOP) */\n.bx-wrapper .bx-controls-auto {\n  text-align: center;\n}\n.bx-wrapper .bx-controls-auto .bx-start {\n  display: block;\n  text-indent: -9999px;\n  width: 10px;\n  height: 11px;\n  outline: 0;\n  background: url(" + __webpack_require__(68) + ") -86px -11px no-repeat;\n  margin: 0 3px;\n}\n.bx-wrapper .bx-controls-auto .bx-start:hover,\n.bx-wrapper .bx-controls-auto .bx-start.active,\n.bx-wrapper .bx-controls-auto .bx-start:focus {\n  background-position: -86px 0;\n}\n.bx-wrapper .bx-controls-auto .bx-stop {\n  display: block;\n  text-indent: -9999px;\n  width: 9px;\n  height: 11px;\n  outline: 0;\n  background: url(" + __webpack_require__(68) + ") -86px -44px no-repeat;\n  margin: 0 3px;\n}\n.bx-wrapper .bx-controls-auto .bx-stop:hover,\n.bx-wrapper .bx-controls-auto .bx-stop.active,\n.bx-wrapper .bx-controls-auto .bx-stop:focus {\n  background-position: -86px -33px;\n}\n/* PAGER WITH AUTO-CONTROLS HYBRID LAYOUT */\n.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager {\n  text-align: left;\n  width: 80%;\n}\n.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-controls-auto {\n  right: 0;\n  width: 35px;\n}\n/* IMAGE CAPTIONS */\n.bx-wrapper .bx-caption {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: #666;\n  background: rgba(80, 80, 80, 0.75);\n  width: 100%;\n}\n.bx-wrapper .bx-caption span {\n  color: #fff;\n  font-family: Arial;\n  display: block;\n  font-size: .85em;\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)(false);
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\r\n/* 这是下方的鼠标指针的移动镜头平方米。 */\r\n.cloud-zoom-lens {border: 4px solid #888;margin:-4px;background-color:#fff;cursor:move;}\r\n/* 这是标题文本 */\r\n.cloud-zoom-title {font-family:Arial, Helvetica, sans-serif;position:absolute !important;background-color:#000;color:#fff;padding:3px;width:100%;text-align:center;font-weight:bold;font-size:10px;top:0px;}\r\n/* 这是缩放窗口。 */\r\n.cloud-zoom-big {border:4px solid #ccc;overflow:hidden;}\r\n/* 这是加载消息。 */\r\n.cloud-zoom-loading {color:white;background:#222;padding:3px;border:1px solid #000;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_9\">\n    <div class=\"\">\n      <h3>Agency Profile</h3>\n      <img src=\"../../../../assets/images/page2_img1.jpg\" alt=\"\" class=\"img_inner fleft\">\n      <p class=\"text1\"><a href=\"#\">Gellentesque imperdiet gerti loki holewvelit neque. Ut vestibulum mi sit amet ornare. </a></p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse jew wligulawe dolor, condimentum ac justo sed, tincidunt commodo molity wer massarete. Nulla non urnatr nisi. Donec varius lectus in vestibulum auctor. Spendisse magna veliternowe dignissim eu commodo ut vestibulum nectro quam. Pellentesque imperdiet velit neque. Ut vestibulum mi sit ametwertilo ornare consectetur. Quisque sed quamhy loi justo. Nulla congue sed turpis nec lacinia. Nulla facilisi. Ut sit amet gravidatylo wtellus. Morbi id wer nolit consequat eros. </p>\n      <p>Vivamus imperdiet ante vitae lorem varius tristique meli. Phasellus tristique lectus id volutpat condimentum. Mauris quam lectus cursus at congue nec ultrices luctus orci quam lectus cursus at congue.</p>\n      <div class=\"clear\"></div>\n      Duis ac iaculis odio, sed tristique arcu. Cras consequat semper augue. Praesent ut facilisis nisi. Pellentesque consequat felis leorew qwertil condimentumo placerat eros mollis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent iaculis nisl mattis facilisis enim vitae dictumi magna. Pellentesque laoreet purus congue justo laoreet, blandit tempor leo molestie. Vivamus orci sem molestie actre pharetra non scelerisque sit amet orci. Nulla consequat neque pretium sagittis vulputate. Fusce dictum velit at diam facilisis consectetur.\n    </div>\n  </div>\n  <div class=\"grid_3\">\n    <h3>Our Principles</h3>\n    <ul class=\"list1\">\n      <li>\n        <div class=\"count\">1</div>\n        <div class=\"extra_wrapper\">\n          <div class=\"text1\"><a href=\"#\">Pellentesque imperdiet. </a></div>Quisque sed quam justo. Nulla kilor congue sed turpis nec lacinia. Nulla facilisi. Ut sit amet gravida telluswil. Morbi id consequat erosivamus.\n        </div>\n      </li>\n      <li>\n        <div class=\"count\">2</div>\n        <div class=\"extra_wrapper\">\n          <div class=\"text1\"><a href=\"#\">Aellentesque omperdie. </a></div>Fuisque sed quam justo. Cngueteri sed turpis nec lacinia. Nulla facilisi. Ut sit amet gravida tellus. Morbi idy consequat eros. Vivamus imperdiet\n        </div>\n      </li>\n      <li>\n        <div class=\"count\">3</div>\n        <div class=\"extra_wrapper\">\n          <div class=\"text1\"><a href=\"#\">Grellentesque imperdik. </a></div>Yisque sed quam justo. Nullaongue sed turpis nec lacinia. Julla facilisi. Ut sit amet gravida tellus. Morbi idy consequat erosamus imperdiet.\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"clear\"></div>\n  <div class=\"grid_12\">\n    <div class=\"hor_sep\"></div>\n  </div>\n  <div class=\"clear\"></div>\n  <div class=\"grid_9\">\n    <h3 class=\"head1\">What We Offer</h3>\n    <p class=\"text1 tx2\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vehicula eu nislew teget convallis. Vivamus sit amet fringilla nibh, et fringilla elit. Ut in lacus in nulla varius pulvinar. Donec eu magna pretiu yue facilisis sem a, rutrum magna.  Fet fringilla elit. Ut in lacus in nulla varius pulvinar.</p>\n    <p>Sed dignissim est mauris. Praesent pulvinar vestibulum lorem tristique faucibus. Quisque at tincidunt sapien. Fusce scelerisque dolor nec justo tempus, sed cursus nisl interdum. Vivamus justo mi, semper non semper nec, commodo et ipsum. Integer a porta erat. Pellentesque eu egestas purus, vitae feugiat augue. Sed lobortis tristique convallis. Mauris in diam tempor, imperdiet massa ut, euismod risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sollicitudin pretium eros ac semper. Aenean nec bibendum mauris, eget luctus velit. Sed sodales lectus imperdiet neque pretium ultrices. Nulla nec urna nec erat elementum tempor.</p>\n    <ul class=\"list2\">\n      <li><a href=\"#\">Fgo psu dr sit amek </a></li>\n      <li><a href=\"#\">Sem psum dr sit ametre conse</a></li>\n      <li><a href=\"#\">Rame sum dr sit ame consec</a></li>\n      <li><a href=\"#\">Bem psum dr sit ameteko </a></li>\n      <li><a href=\"#\">Nem dsum dr sit amewas </a></li>\n    </ul>\n    <ul class=\"list2\">\n      <li><a href=\"#\">Vcem psum dr sit </a></li>\n      <li><a href=\"#\">Zdfem psum dr sittr amewe </a></li>\n      <li><a href=\"#\">Game sum dr sit ame conse</a></li>\n      <li><a href=\"#\">Dem psum dr sit ametekot </a></li>\n    </ul>\n    <div class=\"clear\"></div>\n  </div>\n  <div class=\"grid_3\">\n    <h3 class=\"head1\">testimonial</h3>\n    <blockquote>\n      <p class=\"text1\"> “ Nnatoque penatibus tkamet magnis dis parturient montes, nascetur ridiculus mustro lito. Quisque vehicula eu nisleweri teget convallis. Vivamus sit amet fringilla nibt fringilla. ”</p>\n      <div class=\"bq_bot\">\n        <div class=\"text1\">Mark Johnson</div>Director of Product Management\n      </div>\n    </blockquote>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<div class=\"main\">\n  <div class=\"content\">\n    <div class=\"ic\"></div>\n    <router-outlet></router-outlet>\n  </div>\n  <bottom-block></bottom-block>\n</div>\n<footer-component></footer-component>"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom_block\">\n  <div class=\"container_12\">\n  <div class=\"grid_2 prefix_2\">\n    <ul>\n      <li *ngFor=\"let fFink1 of footerLinks1\"><a  [routerLink]=\"fFink1.url\">{{fFink1.text}}</a></li>\n    </ul>\n  </div>\n  <div class=\"grid_2\">\n    <ul>\n      <li *ngFor=\"let fFink2 of footerLinks2\"><a  [routerLink]=\"fFink2.url\">{{fFink2.text}}</a></li>\n    </ul>\n  </div>\n  <div class=\"grid_2\">\n    <ul>\n      <li *ngFor=\"let fFink3 of footerLinks3\"><a  [routerLink]=\"fFink3.url\">{{fFink3.text}}</a></li>\n    </ul>\n  </div>\n  <div class=\"grid_2\">\n    <h4>Contact Us:</h4>\n    TEL: 1-800-234-5678<br><a href=\"#\">info@demolink.org</a>\n\n  </div>\n  <div class=\"clear\"></div>\n</div>\n</div>\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_9\">\n    <h3>Stay in Touch</h3>\n    <div class=\"map\">\n      <figure class=\"img_inner fleft\">\n        <iframe width=\"425\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps/ms?msa=0&amp;msid=203713593458754817008.0004ee93021186694bc6a&amp;ie=UTF8&amp;t=m&amp;ll=28.570813,77.326112&amp;spn=0.013191,0.018282&amp;z=15&amp;output=embed\"></iframe><br /><small>View <a href=\"https://maps.google.com/maps/ms?msa=0&amp;msid=203713593458754817008.0004ee93021186694bc6a&amp;ie=UTF8&amp;t=m&amp;ll=28.570813,77.326112&amp;spn=0.013191,0.018282&amp;z=15&amp;source=embed\" style=\"color:#0000FF;text-align:left\">28.551957, 77.388954</a> in a larger map</small>\n      </figure>\n      <address>\n        <dl>\n          <dt>\n            8901 Marmora Road,<br>\n            Glasgow, D04 89GR.\n          </dt>\n          <dd><span>Freephone:</span>+1 800 559 6580</dd>\n          <dd><span>Telephone:</span>+1 800 603 6035</dd>\n          <dd><span>FAX:</span>+1 800 889 9898</dd>\n          <dd>E-mail: <a href=\"#\" class=\"link-1\">mail@demolink.org</a></dd>\n        </dl>\n      </address>\n      <address class=\"mb0\">\n        <dl>\n          <dt>\n            9870 St Vincent Place,<br>\n            Glasgow, DC 45 Fr 45.\n          </dt>\n          <dd><span>Freephone:</span>+1 800 559 6580</dd>\n          <dd><span>Telephone:</span>+1 800 603 6035</dd>\n          <dd><span>FAX:</span>+1 800 889 9898</dd>\n          <dd>E-mail: <a href=\"#\" class=\"link-1\">mail@demolink.org</a></dd>\n        </dl>\n      </address>\n    </div>\n  </div>\n  <div class=\"grid_3\">\n    <h3>Contact Us</h3>\n      <form novalidate (ngSubmit)=\"onSubmit(contact)\" [formGroup]=\"contact\" id=\"form\">\n      <div class=\"success_wrapper\">\n        <div class=\"success\">Contact form submitted!<br>\n          <strong>We will be in touch soon.</strong> </div></div>\n      <fieldset>\n        <label class=\"name\">\n          <input type=\"text\" placeholder=\"Your full name\" formControlName=\"name\">\n          <br class=\"clear\">\n          <span class=\"error error-empty\" *ngIf=\"contact.get('name').hasError('required') && contact.get('name').touched\">*This field is required.</span>\n        </label>\n        <label class=\"email\">\n          <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\n          <br class=\"clear\">\n          <!--<span class=\"error error-empty\"></span>-->\n          <span class=\"error error-empty\"  *ngIf=\"contact.get('email').hasError('required') && contact.get('email').touched\">*This field is required.</span>\n          <span class=\"error error-empty\"  *ngIf=\"contact.get('email').hasError('pattern') && contact.get('email').touched\">*This is not a valid email address.</span> </label>\n        <label class=\"subject\">\n          <input type=\"text\" placeholder=\"Subject\" formControlName=\"subject\">\n          <br class=\"clear\">\n          <span class=\"error error-empty\" *ngIf=\"contact.get('subject').hasError('required') && contact.get('subject').touched\">*This field is required.</span> </label>\n        <label class=\"message\">\n          <textarea formControlName=\"message\" placeholder=\"Message\">Message</textarea>\n          <br class=\"clear\">\n          <!--<span class=\"error\">*The message is too short.</span> -->\n          <span class=\"error error-empty\" *ngIf=\"contact.get('message').hasError('required') && contact.get('message').touched\">*This field is required.</span>\n          <span class=\"error error-empty\" *ngIf=\"contact.get('message').hasError('minlength') && contact.get('message').touched\">*The message is too short.</span>\n        </label>\n        <div class=\"clear\"></div>\n        <div class=\"btns\">\n          <a data-type=\"reset\" class=\"btn\">Clear</a>\n          <div class=\"none\"></div>\n          <button type=\"submit\" class=\"btn mybtn\" [disabled]=\"contact.invalid\">Send</button>\n          <div class=\"clear\"></div>\n        </div></fieldset></form>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "\n<footer>\n  <div class=\"container_12\">\n    <div class=\"grid_12\">\n      <div class=\"socials\">\n        <a href=\"#\"></a>\n        <a href=\"#\"></a>\n        <a href=\"#\"></a>\n        <a href=\"#\"></a>\n      </div>\n      <div class=\"copy\">\n        YourCompany &copy; 2014| <a href=\"#\">Privacy Policy</a> | Website designed & developed  by <a href=\"http://www.ssoftware.in/\" rel=\"nofollow\" target=\"_blank\">Sun Software Remedies </a>.\n      </div></div>\n    <div class=\"clear\"></div>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container_12\">\n    <div style=\"margin:10px 0px 0px 0px;\">\n      <img src=\"../../../../assets/images/logo.jpeg\" alt=\"wholesalesarees logo\" style=\"height:120px;\"></div>\n    <div class=\"menu_block\">\n      <nav>\n        <ul class=\"sf-menu\">\n          <li *ngFor=\"let menu of menuLinks\">\n            <a  [routerLink]=\"menu.url\" routerLinkActive=\"current\" >{{menu.text}}</a>\n          </li>\n        </ul>\n      </nav>\n      <div class=\"clear\"></div>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</header>\n"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_12\">\n    <div class=\"slider-relative\">\n      <div class=\"slider-block\">\n        <div>\n          <ul class=\"bxslider\">\n            <li><img src=\"../../../../assets/images/saree1.jpg\" alt=\"\" height=\"400\" width=\"1024\"></li>\n            <li><img src=\"../../../../assets/images/saree3.jpg\" alt=\"\" height=\"400\" width=\"1024\"></li>\n            <li><img src=\"../../../../assets/images/saree4.jpg\" alt=\"\" height=\"400\" width=\"1024\"></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clear\"></div>\n\n<top-arrival></top-arrival>\n<home-tab></home-tab>\n\n  <!--<div class=\"grid_12\">\n    <div id=\"tabs\" class=\"ui-tabs ui-widget ui-widget-content ui-corner-all\">\n      <ul class=\"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all\" role=\"tablist\">\n        <li class=\"ui-state-default ui-corner-top ui-tabs-active ui-state-active\" role=\"tab\" tabindex=\"0\" aria-controls=\"tabs-1\" aria-labelledby=\"ui-id-1\" aria-selected=\"true\"><a href=\"#tabs-1\" class=\"ui-tabs-anchor\" role=\"presentation\" tabindex=\"-1\" id=\"ui-id-1\">Sarees</a></li>\n        <li class=\"ui-state-default ui-corner-top\" role=\"tab\" tabindex=\"-1\" aria-controls=\"tabs-2\" aria-labelledby=\"ui-id-2\" aria-selected=\"false\"><a href=\"#tabs-2\" class=\"ui-tabs-anchor\" role=\"presentation\" tabindex=\"-1\" id=\"ui-id-2\">Suit-Salvar</a></li>\n        <li class=\"ui-state-default ui-corner-top\" role=\"tab\" tabindex=\"-1\" aria-controls=\"tabs-3\" aria-labelledby=\"ui-id-3\" aria-selected=\"false\"><a href=\"#tabs-3\" class=\"ui-tabs-anchor\" role=\"presentation\" tabindex=\"-1\" id=\"ui-id-3\">Lengha-Chunni</a></li>\n      </ul>\n      <div class=\"clear\"></div>\n\n      &lt;!&ndash; Saree Start &ndash;&gt;\n\n      <div class=\"tab_cont ui-tabs-panel ui-widget-content ui-corner-bottom\" id=\"tabs-1\" aria-labelledby=\"ui-id-1\" role=\"tabpanel\" aria-expanded=\"true\" aria-hidden=\"false\">\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-saree-detail&amp;product_code=100000003\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/saree/100000003@s40.jpg\" alt=\"Simple Net Saree\" title=\"Simple Net Saree\">\n            </a>\n            <p class=\"pro-info\">Simple Net Saree <a href=\"index.php?page=wholesalesarees-saree-detail&amp;product_code=100000003\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 8,000.00</div>\n          </div>\n        </div>\n        <div class=\"clear cl1\"></div>\n\n      </div>\n      &lt;!&ndash; Saree End &ndash;&gt;\n\n\n      &lt;!&ndash; Suit Start &ndash;&gt;\n      <div class=\"tab_cont ui-tabs-panel ui-widget-content ui-corner-bottom\" id=\"tabs-2\" aria-labelledby=\"ui-id-2\" role=\"tabpanel\" aria-expanded=\"false\" aria-hidden=\"true\" style=\"display: none;\">\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000013\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000013@su9.jpg\" alt=\"yellow Color Radymade Salwar Suit\" title=\"yellow Color Radymade Salwar Suit\">\n            </a>\n            <p class=\"pro-info\">yellow Color Radymade Salwar Suit <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000013\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 4,000.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000021\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000021@su14.jpg\" alt=\"Yellow Colour Cotton Readymade Anarkali Salwar Suits (Size - 40-Large / 42-X-Large) : Festive Collection\" title=\"Yellow Colour Cotton Readymade Anarkali Salwar Suits (Size - 40-Large / 42-X-Large) : Festive Collection\">\n            </a>\n            <p class=\"pro-info\">Yellow Colour Cotton Readymade Anar <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000021\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 2,845.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000014\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000014@ss7.jpg\" alt=\"Shades of Pink Colour Georgette Designer Anarkali Salwar Suits\" title=\"Shades of Pink Colour Georgette Designer Anarkali Salwar Suits\">\n            </a>\n            <p class=\"pro-info\">Shades of Pink Colour Georgette Des <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000014\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 2,990.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000019\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000019@su12.jpg\" alt=\"Yellow Colour Mal Cotton Readymade Salwar Suits (Size - 40-Large, 42-X-Large) : Festive Collection\" title=\"Yellow Colour Mal Cotton Readymade Salwar Suits (Size - 40-Large, 42-X-Large) : Festive Collection\">\n            </a>\n            <p class=\"pro-info\">Yellow Colour Mal Cotton Readymade  <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000019\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 2,400.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000015\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000015@su10.jpg\" alt=\"Red color Churidar Salwar Suit\" title=\"Red color Churidar Salwar Suit\">\n            </a>\n            <p class=\"pro-info\">Red color Churidar Salwar Suit <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000015\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 5,220.00</div>\n          </div>\n        </div>\n        <div class=\"clear cl1\"></div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000006\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000006@su6.jpg\" alt=\"Shades of Pink Colour Anaarkali\" title=\"Shades of Pink Colour Anaarkali\">\n            </a>\n            <p class=\"pro-info\">Shades of Pink Colour Anaarkali <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000006\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 3,500.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000009\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000009@su4.jpg\" alt=\"Blue and Golden Colour Chanderi Cotton Readymade Salwar Suits (Size - 40-Large, 42-X-Large) : Festive Collection\" title=\"Blue and Golden Colour Chanderi Cotton Readymade Salwar Suits (Size - 40-Large, 42-X-Large) : Festive Collection\">\n            </a>\n            <p class=\"pro-info\">Blue and Golden Colour Chanderi Cot <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000009\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 3,300.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000002\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000002@su3.jpg\" alt=\"Suit Salwar\" title=\"Suit Salwar\">\n            </a>\n            <p class=\"pro-info\">Suit Salwar <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000002\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 900.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000005\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000005@su5.jpg\" alt=\"Red color Patilia Suit\" title=\"Red color Patilia Suit\">\n            </a>\n            <p class=\"pro-info\">Red color Patilia Suit <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000005\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 2,000.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000020\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/suit/110000020@su13.jpg\" alt=\"Black and Silvar Colour cotton Readymade Salwar Suits (Size - 40-Large, 42-X-Large) : KIYA Collection \" title=\"Black and Silvar Colour cotton Readymade Salwar Suits (Size - 40-Large, 42-X-Large) : KIYA Collection \">\n            </a>\n            <p class=\"pro-info\">Black and Silvar Colour cotton Read <a href=\"index.php?page=wholesalesarees-suit-detail&amp;product_code=110000020\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 4,500.00</div>\n          </div>\n        </div>\n\n      </div>\n      &lt;!&ndash; Suit End &ndash;&gt;\n\n\n\n      &lt;!&ndash; Suit Start &ndash;&gt;\n      <div class=\"tab_cont ui-tabs-panel ui-widget-content ui-corner-bottom\" id=\"tabs-3\" aria-labelledby=\"ui-id-3\" role=\"tabpanel\" aria-expanded=\"false\" aria-hidden=\"true\" style=\"display: none;\">\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000013\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000013@len13.jpg\" alt=\"Attractive Gathered Pattern Lehenga\" title=\"Attractive Gathered Pattern Lehenga\">\n            </a>\n            <p class=\"pro-info\">Attractive Gathered Pattern Lehenga <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000013\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 9,000.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000005\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000005@len5.jpg\" alt=\"Maroon Net Lehenga Chunni With Patch Work\" title=\"Maroon Net Lehenga Chunni With Patch Work\">\n            </a>\n            <p class=\"pro-info\">Maroon Net Lehenga Chunni With Patc <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000005\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 26,940.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000004\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000004@len1.jpg\" alt=\"Maroon Net Lehenga Chunni With Patch Work\" title=\"Maroon Net Lehenga Chunni With Patch Work\">\n            </a>\n            <p class=\"pro-info\">Maroon Net Lehenga Chunni With Patc <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000004\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 9,600.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000014\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000014@len14.jpg\" alt=\"Graceful off white net lehenga choli\" title=\"Graceful off white net lehenga choli\">\n            </a>\n            <p class=\"pro-info\">Graceful off white net lehenga chol <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000014\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 15,840.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000015\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000015@len15.jpeg\" alt=\"Bridal Lehenga Choli. A Kurti style hip-hop Choli in dark bright shades\" title=\"Bridal Lehenga Choli. A Kurti style hip-hop Choli in dark bright shades\">\n            </a>\n            <p class=\"pro-info\">Bridal Lehenga Choli. A Kurti style <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000015\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 39,000.00</div>\n          </div>\n        </div>\n        <div class=\"clear cl1\"></div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000002\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000002@len3.jpg\" alt=\"Dark Blue Net Lehenga Chunni With Velvet Border\" title=\"Dark Blue Net Lehenga Chunni With Velvet Border\">\n            </a>\n            <p class=\"pro-info\">Dark Blue Net Lehenga Chunni With V <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000002\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 15,240.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000003\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000003@len2.jpg\" alt=\"Blue Net Lehenga Chunni With Patch Work.\" title=\"Blue Net Lehenga Chunni With Patch Work.\">\n            </a>\n            <p class=\"pro-info\">Blue Net Lehenga Chunni With Patch  <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000003\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 7,800.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000008\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000008@len8.jpg\" alt=\"Glamorous Mehendi Green Fish Cut Lehenga Choli\" title=\"Glamorous Mehendi Green Fish Cut Lehenga Choli\">\n            </a>\n            <p class=\"pro-info\">Glamorous Mehendi Green Fish Cut Le <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000008\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 25,380.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000017\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000017@saree6.jpg\" alt=\"Bollywood saree designer party wear bridal wedding lehenga choli\" title=\"Bollywood saree designer party wear bridal wedding lehenga choli\">\n            </a>\n            <p class=\"pro-info\">Bollywood saree designer party wear <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000017\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 67,000.00</div>\n          </div>\n        </div>\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000012\">\n              <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/lengha/120000012@len12.jpg\" alt=\"INDIAN BOLLYWOOD STYLE DESIGNER PARTY WEAR BRIDAL WEDDING LEHENGA CHOLI \" title=\"INDIAN BOLLYWOOD STYLE DESIGNER PARTY WEAR BRIDAL WEDDING LEHENGA CHOLI \">\n            </a>\n            <p class=\"pro-info\">INDIAN BOLLYWOOD STYLE DESIGNER PAR <a href=\"index.php?page=wholesalesarees-lengha-detail&amp;product_code=120000012\" style=\"color:red;\">Read More..</a></p>\n            <div class=\"price_tag\">Rs. 7,600.00</div>\n          </div>\n        </div>\n\n      </div>\n      &lt;!&ndash; Suit End &ndash;&gt;\n\n\n    </div>\n  </div>\n-->\n\n\n\n  <div class=\"clear\"></div>\n\n\n</div>\n<!-- Slider Starts -->\n<!-- Slider Ends -->\n"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n  <ngb-tab title=\"Sarees\">\n    <ng-template ngbTabContent>\n      <span *ngFor=\"let tabSaree of pSaree;let i=index;\">\n      <div class=\"product_box\" >\n        <div class=\"thumb_wrapper\">\n          <a routerLink=\"{{tabSaree.url}}\" title=\"{{tabSaree.productTitle}};\">\n            <img [src]=\"'//' +tabSaree.imagePath\" alt=\"{{tabSaree.productTitle}}\" title=\"{{tabSaree.productTitle}}\" height=\"240\" width=\"200\">\n          </a>\n          <p class=\"pro-info\">{{tabSaree.productTitle | slice:0:18}}\n            <a routerLink=\"{{tabSaree.url}}\" title=\"{{tabSaree.productTitle}}\" style=\"color:red;\">Read More</a>\n          </p>\n          <div class=\"price_tag\">{{tabSaree.price | currency:'INR':true}}</div>\n        </div>\n      </div>\n      <div class=\"clear cl1\" *ngIf=\"(i+1)%5==0 && i!=0\">{{i%5}}</div>\n        </span>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle>Suit Salvar</ng-template>\n    <ng-template ngbTabContent>\n      <span *ngFor=\"let tabSuit of pSuit;let i=index;\">\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a routerLink=\"{{tabSuit.url}}\" title=\"{{tabSuit.productTitle}};\">\n              <img [src]=\"'//' +tabSuit.imagePath\" alt=\"{{tabSuit.productTitle}}\" title=\"{{tabSuit.productTitle}}\"\n                   height=\"240\" width=\"200\">\n            </a>\n            <p class=\"pro-info\">{{tabSuit.productTitle | slice:0:18}}\n              <a routerLink=\"{{tabSuit.url}}\" title=\"{{tabSuit.productTitle}}\" style=\"color:red;\">Read More</a>\n            </p>\n            <div class=\"price_tag\">{{tabSuit.price | currency:'INR':true}}</div>\n          </div>\n        </div>\n        <div class=\"clear cl1\" *ngIf=\"(i+1)%5==0 && i!=0\">{{i%5}}</div>\n    </span>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Lengha\">\n    <ng-template ngbTabContent>\n      <span *ngFor=\"let tabLengha of pLengha;let i=index;\">\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a routerLink=\"{{tabLengha.url}}\" title=\"{{tabLengha.productTitle}};\">\n              <img [src]=\"'//' +tabLengha.imagePath\" alt=\"{{tabLengha.productTitle}}\" title=\"{{tabLengha.productTitle}}\"\n                   height=\"240\" width=\"200\">\n            </a>\n            <p class=\"pro-info\">{{tabLengha.productTitle | slice:0:18}}\n              <a routerLink=\"{{tabLengha.url}}\" title=\"{{tabLengha.productTitle}}\" style=\"color:red;\">Read More</a>\n            </p>\n            <div class=\"price_tag\">{{tabLengha.price | currency:'INR':true}}</div>\n          </div>\n        </div>\n        <div class=\"clear cl1\" *ngIf=\"(i+1)%5==0 && i!=0\">{{i%5}}</div>\n    </span>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n<!--<ng2-tab\n  selected=\"saree\"\n  selected-index-class=\"selected\"\n  selected-contents-class=\"fadeIn animated\">\n  <div class=\"tabs\" id=\"tabs\">\n    <div index=\"saree\">Sarees</div>\n    <div index=\"suit\">Suit Salvar</div>\n    <div index=\"lengha\">Lengha</div>\n  </div>\n  <div class=\"tab-contents\">\n\n    &lt;!&ndash;Saree Start&ndash;&gt;\n    <div class=\"tab_cont\" contents=\"saree\">\n      <span *ngFor=\"let tabSaree of pSaree;let i=index;\">\n      <div class=\"product_box\" >\n        <div class=\"thumb_wrapper\">\n          <a routerLink=\"{{tabSaree.url}}\" title=\"{{tabSaree.productTitle}};\">\n            <img [src]=\"'//' +tabSaree.imagePath\" alt=\"{{tabSaree.productTitle}}\" title=\"{{tabSaree.productTitle}}\" height=\"240\" width=\"200\">\n          </a>\n          <p class=\"pro-info\">{{tabSaree.productTitle | slice:0:18}}\n            <a routerLink=\"{{tabSaree.url}}\" title=\"{{tabSaree.productTitle}}\" style=\"color:red;\">Read More</a>\n          </p>\n          <div class=\"price_tag\">{{tabSaree.price | currency:'INR':true}}</div>\n        </div>\n      </div>\n      <div class=\"clear cl1\" *ngIf=\"(i+1)%5==0 && i!=0\">{{i%5}}</div>\n        </span>\n    </div>\n\n    &lt;!&ndash;Suit Start&ndash;&gt;\n    <div class=\"tab_cont\" contents=\"suit\">\n     <span *ngFor=\"let tabSuit of pSuit;let i=index;\">\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a routerLink=\"{{tabSuit.url}}\" title=\"{{tabSuit.productTitle}};\">\n              <img [src]=\"'//' +tabSuit.imagePath\" alt=\"{{tabSuit.productTitle}}\" title=\"{{tabSuit.productTitle}}\"\n                   height=\"240\" width=\"200\">\n            </a>\n            <p class=\"pro-info\">{{tabSuit.productTitle | slice:0:18}}\n              <a routerLink=\"{{tabSuit.url}}\" title=\"{{tabSuit.productTitle}}\" style=\"color:red;\">Read More</a>\n            </p>\n            <div class=\"price_tag\">{{tabSuit.price | currency:'INR':true}}</div>\n          </div>\n        </div>\n        <div class=\"clear cl1\" *ngIf=\"(i+1)%5==0 && i!=0\">{{i%5}}</div>\n    </span>\n    </div>\n\n\n    &lt;!&ndash;Suit Start&ndash;&gt;\n    <div class=\"tab_cont\" contents=\"lengha\">\n       <span *ngFor=\"let tabLengha of pLengha;let i=index;\">\n        <div class=\"product_box\">\n          <div class=\"thumb_wrapper\">\n            <a routerLink=\"{{tabLengha.url}}\" title=\"{{tabLengha.productTitle}};\">\n              <img [src]=\"'//' +tabLengha.imagePath\" alt=\"{{tabLengha.productTitle}}\" title=\"{{tabLengha.productTitle}}\"\n                   height=\"240\" width=\"200\">\n            </a>\n            <p class=\"pro-info\">{{tabLengha.productTitle | slice:0:18}}\n              <a routerLink=\"{{tabLengha.url}}\" title=\"{{tabLengha.productTitle}}\" style=\"color:red;\">Read More</a>\n            </p>\n            <div class=\"price_tag\">{{tabLengha.price | currency:'INR':true}}</div>\n          </div>\n        </div>\n        <div class=\"clear cl1\" *ngIf=\"(i+1)%5==0 && i!=0\">{{i%5}}</div>\n    </span>\n    </div>\n\n  </div>\n</ng2-tab>-->\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_12\">\n    <div class=\"\">\n      <h3>Page not found(#404)</h3>\n     </div>\n  </div>\n\n  <div class=\"clear\"></div>\n\n\n\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_12\">\n    <h3>Top Arrivals</h3>\n  </div>\n  <div class=\"boxes\">\n    <div class=\"grid_4\" *ngFor=\"let tp of topArrivals\">\n      <figure>\n        <div>\n          <img [src]=\"'//' +tp.imagePath\" alt=\"{{tp.productTitle}}\" title=\"{{tp.productTitle}}\" height=\"350\" width=\"350\">\n        </div>\n        <figcaption>\n          <h3>{{tp.categoryTitle}}</h3>\n          {{tp.detail}}\n          <a routerLink=\"{{tp.url}}\" class=\"btn\">Details</a>\n        </figcaption>\n      </figure>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</div>\n<div class=\"clear\"></div>\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_9\">\n    <h3 *ngIf=\"searchTerm==null\">LENGHA-CHUNNI</h3>\n    <h3 *ngIf=\"searchTerm\">{{searchTerm|uppercase}}</h3>\n\n    <div class=\"tours gallery\">\n      <div class=\"grid_4\" *ngFor=\"let product of products | paginate: { itemsPerPage: 10, currentPage: p };let isEven = even;\" [ngClass]=\"{'omega':isEven==true,'alpha':isEven==false}\">\n        <div class=\"tour\">\n          <a routerLink=\"{{product.url}}\" title=\"{{product.productTitle}}\">\n            <img [src]=\"'//' +product.imagePath\" alt=\"{{product.productTitle}}\" title=\"{{product.productTitle}}\" height=\"240\" width=\"200\" class=\"img_inner fleft\">\n          </a>\n          <div class=\"extra_wrapper\">\n            <p class=\"text1\">{{product.productTitle | slice:0:18}}....</p>\n            <p class=\"price\">{{product.purpose}}</p>\n            <p class=\"price\">Best Price <span>{{product.price | currency:'INR':true}}</span></p>\n            <a routerLink=\"{{product.url}}\" class=\"btn\">Details</a>\n          </div>\n        </div>\n        <div class=\"clear\" *ngIf=\"isEven==false\"></div>\n      </div>\n    </div>\n    <div class='no_product' *ngIf=\"products.length==0\">There are no products in this collection.</div>\n    <div class=\"pages\" style=\"clear: both;\">\n      <pagination-controls (pageChange)=\"p = $event\" #api *ngIf=\"products.length>10\"></pagination-controls>\n    </div>\n  </div>\n\n  <div class=\"grid_3\">\n    <h3>SEARCH LENGHA-CHUNNI</h3>\n    <form method=\"post\" id=\"form2\" class=\"form1\">\n      <label for=\"productMaterial\">\n            <span class=\"col1\">All Search Operators</span><br>\n        <span>Material</span>\n        <select [(ngModel)]=\"selectedMaterial\" id=\"productMaterial\" (ngModelChange)=\"materialFilter($event)\" name=\"sel1\">\n          <option value=\"\"  selected>Select Material</option>\n          <option *ngFor=\"let pm of productMaterial\"\n                  [value]=\"pm.id\" >{{pm.materialType}}</option>\n        </select>\n        <!--<select [(ngModel)]=\"selectedMaterial\" name=\"selectedMaterial\"  id=\"productMaterial\">\n          <option *ngFor=\"let pm of productMaterial\" [value]=\"pm.id\" >{{pm.materialType}}</option>\n        </select>-->\n      </label>\n      <label for=\"productColor\">\n        <span>Color</span>\n        <select [ngModel]=\"selectedColor\" id=\"productColor\" (ngModelChange)=\"colorFilter($event)\" name=\"sel2\">\n          <option value=\"\" selected>Select Color</option>\n          <option *ngFor=\"let pc of productColor\"\n                  [value]=\"pc.id\" >{{pc.color}}</option>\n        </select>\n      </label>\n      <label>\n        <span>Price</span>\n        <select [ngModel]=\"selectedPrice\" id=\"productPrice\" (ngModelChange)=\"priceFilter($event)\" name=\"sel3\">\n          <option value=\"\" selected>Select Pice</option>\n          <option *ngFor=\"let pp of productPrice\"\n                  [value]=\"pp.range\" >{{pp.text}}</option>\n        </select>\n      </label>\n      <div class=\"clear\"></div>\n    </form>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_12\" *ngIf=\"product!=null\">\n    <h3>{{product.productTitle}}</h3>\n\n    <div class=\"tours gallery\" >\n      <div class=\"grid_12 alpha\">\n        <div class=\"zoom-section\">\n          <div class=\"zoom-small-image\">\n            <a [href]=\"'//' +product.imagePath\" class='cloud-zoom' rel=\"tint:'#ff0000',tintOpacity:0.5,smoothMove:5,zoomWidth:480,adjustY:-4,adjustX:10\">\n              <img [src]=\"'//' +product.imagePath\" alt=\"{{product.productTitle}}\" title=\"{{product.productTitle}}\" height=\"480\" width=\"320\">\n              </a>\n          </div>\n          <div class=\"zoom-desc\"></div>\n        </div>\n        <!--zoom-section end-->\n\n        <div class=\"tour\">\n          <div class=\"extra_wrapper\">\n            <p class=\"text1\">{{product.productTitle}}</p>\n            <p class=\"price\">Product Code:<span>{{product.productCode}}</span></p>\n            <p class=\"price\">Best Price:<span>{{product.price | currency:'INR':true}}</span></p>\n            <p class=\"price\">Material Type: <span>{{product.material}}</span></p>\n            <p class=\"price\">Color: <span>{{product.color}}</span></p>\n            <p class=\"price\">Purpose: <span>{{product.purpose}}</span></p>\n            <p class=\"price\">Description: <span>{{product.detail}}</span></p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"grid_12\" *ngIf=\"productSuggestions!=null\">\n        <h3>May we also suggest</h3>\n        <div class=\"product_box\" *ngFor=\"let suggestion of productSuggestions;let i=index;\">\n          <div class=\"thumb_wrapper_detail\">\n            <a routerLink=\"{{suggestion.url}}\" title=\"{{suggestion.productTitle}}; \">\n              <img [src]=\"'//' +suggestion.imagePath\" alt=\"{{suggestion.productTitle}}\" title=\"{{suggestion.productTitle}}\" height=\"240\" width=\"200\">\n            </a>\n            <div class=\"price_inner_tag\">{{product.price | currency:'INR':true}}</div>\n            <p class=\"pro-info\">{{product.productTitle | slice:0:18}}\n              <a routerLink=\"{{suggestion.url}}\" title=\"{{suggestion.productTitle}}\" style=\"color:red;\">Read More</a>\n            </p>\n          </div>\n        </div>\n        <div class=\"clear cl1\" *ngIf=\"i%5==0\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"clear\"></div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--\n\n\n\n<div class=\"container_12\">\n<div class=\"grid_12\">\n  <h3>{{product.productTitle}}</h3>\n  <div class=\"tours gallery\">\n    <div class=\"grid_12 alpha\">\n      <div class=\"zoom-section\">\n        <div class=\"zoom-small-image\">\n          <div id=\"wrap\" style=\"top:0px;z-index:9999;position:relative;\">\n            <img [src]=\"'//' +product.imagePath\" alt=\"{{product.productTitle}}\" title=\"{{product.productTitle}}\" height=\"240\" width=\"200\" class=\"img_inner fleft\">\n            &lt;!&ndash;<a href=\"resize.php?w=768&amp;h=1024&amp; img=uploads/saree/100000001@s35.jpg\" class=\"cloud-zoom\" rel=\"tint:'#ff0000',tintOpacity:0.5,smoothMove:5,zoomWidth:480,adjustY:-4,adjustX:10\" style=\"position: relative; display: block;\"><img src=\"resize.php?w=320&amp;h=480&amp;img=uploads/saree/100000001@s35.jpg\" title=\"Saffon Simple Saree\" alt=\"Saffon Simple Saree\" style=\"display: block;\"></a><div class=\"mousetrap\" style=\"background-image: url(&quot;.&quot;); z-index: 999; position: absolute; width: 320px; height: 480px; left: 0px; top: 0px; cursor: move;\"></div></div>&ndash;&gt;\n        </div>\n        <div class=\"zoom-desc\">\n        </div>\n      </div>\n\n      <div class=\"tour\">\n        <div class=\"extra_wrapper\">\n          <p class=\"text1\">Saffon Simple Saree</p>\n          <p class=\"price\">Product Code:<span>{{product.productCode}}</span></p>\n          <p class=\"price\">Best Price:<span>{{product.price | currency:'INR':true}}</span></p>\n          <p class=\"price\">Material Type: <span>{{product.material}}</span></p>\n          <p class=\"price\">Color: <span>{{product.color}}</span></p>\n          <p class=\"price\">Purpose: <span>{{product.purpose}}</span></p>\n          <p class=\"price\">Description: <span>{{product.detail}}</span></p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"grid_12\">\n      <h3>May we also suggest</h3>\n      <div class=\"product_box\">\n        <div class=\"thumb_wrapper_detail\">\n          <a href=\"index.php?page=wholesalesarees-saree-detail&amp;product_code=100000010\">\n            <img src=\"resize.php?w=200&amp;h=240&amp;img=uploads/saree/100000010@s43.jpg\" title=\"Black and Cream Colour Chiffon Material Casual Sarees : Radhe Collection\" alt=\"Black and Cream Colour Chiffon Material Casual Sarees : Radhe Collection\">\n          </a>\n          <div class=\"price_inner_tag\">Rs. 8,500.00</div>\n          <p class=\"pro-info\">Black and Cream Colour Chiffon Material  <a href=\"index.php?page=wholesalesarees-saree-detail&amp;product_code=100000010\" style=\"color:red;\">Read More..</a></p>\n\n        </div>\n      </div>\n    </div>\n\n    </div>\n  </div>\n\n  <div class=\"clear\"></div>\n</div>\n</div>\n-->\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n  <div class=\"grid_9\">\n    <h3 *ngIf=\"searchTerm==null\">Sarees</h3>\n    <h3 *ngIf=\"searchTerm\">{{searchTerm|uppercase}}</h3>\n\n    <div class=\"tours gallery\">\n      <div class=\"grid_4\" *ngFor=\"let product of products | paginate: { itemsPerPage: 10, currentPage: p };let isEven = even;\" [ngClass]=\"{'omega':isEven==true,'alpha':isEven==false}\">\n        <div class=\"tour\">\n          <a routerLink=\"{{product.url}}\" title=\"{{product.productTitle}}\">\n            <img [src]=\"'//' +product.imagePath\" alt=\"{{product.productTitle}}\" title=\"{{product.productTitle}}\" height=\"240\" width=\"200\" class=\"img_inner fleft\">\n          </a>\n          <div class=\"extra_wrapper\">\n            <p class=\"text1\">{{product.productTitle | slice:0:18}}....</p>\n            <p class=\"price\">{{product.purpose}}</p>\n            <p class=\"price\">Best Price <span>{{product.price | currency:'INR':true}}</span></p>\n            <a routerLink=\"{{product.url}}\" class=\"btn\">Details</a>\n          </div>\n        </div>\n        <div class=\"clear\" *ngIf=\"isEven==false\"></div>\n      </div>\n    </div>\n    <div class='no_product' *ngIf=\"products.length==0\">There are no products in this collection.</div>\n    <div class=\"pages\" style=\"clear: both;\">\n      <pagination-controls (pageChange)=\"p = $event\" #api *ngIf=\"products.length>10\"></pagination-controls>\n    </div>\n  </div>\n\n  <div class=\"grid_3\">\n    <h3>SEARCH Sarees</h3>\n    <form method=\"post\" id=\"form2\" class=\"form1\">\n      <label for=\"productMaterial\">\n            <span class=\"col1\">All Search Operators</span><br>\n        <span>Material</span>\n        <select [(ngModel)]=\"selectedMaterial\" id=\"productMaterial\" (ngModelChange)=\"materialFilter($event)\" name=\"sel1\">\n          <option value=\"\"  selected>Select Material</option>\n          <option *ngFor=\"let pm of productMaterial\"\n                  [value]=\"pm.id\" >{{pm.materialType}}</option>\n        </select>\n        <!--<select [(ngModel)]=\"selectedMaterial\" name=\"selectedMaterial\"  id=\"productMaterial\">\n          <option *ngFor=\"let pm of productMaterial\" [value]=\"pm.id\" >{{pm.materialType}}</option>\n        </select>-->\n      </label>\n      <label for=\"productColor\">\n        <span>Color</span>\n        <select [ngModel]=\"selectedColor\" id=\"productColor\" (ngModelChange)=\"colorFilter($event)\" name=\"sel2\">\n          <option value=\"\" selected>Select Color</option>\n          <option *ngFor=\"let pc of productColor\"\n                  [value]=\"pc.id\" >{{pc.color}}</option>\n        </select>\n      </label>\n      <label>\n        <span>Price</span>\n        <select [ngModel]=\"selectedPrice\" id=\"productPrice\" (ngModelChange)=\"priceFilter($event)\" name=\"sel3\">\n          <option value=\"\" selected>Select Pice</option>\n          <option *ngFor=\"let pp of productPrice\"\n                  [value]=\"pp.range\" >{{pp.text}}</option>\n        </select>\n      </label>\n      <div class=\"clear\"></div>\n    </form>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<div class=\"container_12\">\n\t<div class=\"grid_9\">\n\t\t<h3 *ngIf=\"searchTerm==null\">Suit Salvar</h3>\n\t\t<h3 *ngIf=\"searchTerm\">{{searchTerm|uppercase}}</h3>\n\n\t\t<div class=\"tours gallery\">\n\t\t\t<div class=\"grid_4\"\n\t\t\t     *ngFor=\"let product of products | paginate: { itemsPerPage: 10, currentPage: p };let isEven = even;\"\n\t\t\t     [ngClass]=\"{'omega':isEven==true,'alpha':isEven==false}\">\n\t\t\t\t<div class=\"tour\">\n\t\t\t\t\t<a routerLink=\"{{product.url}}\" title=\"{{product.productTitle}}\">\n\t\t\t\t\t\t<img [src]=\"'//' +product.imagePath\" alt=\"{{product.productTitle}}\"\n\t\t\t\t\t\t     title=\"{{product.productTitle}}\" height=\"240\" width=\"200\" class=\"img_inner fleft\">\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"extra_wrapper\">\n\t\t\t\t\t\t<p class=\"text1\">{{product.productTitle | slice:0:18}}....</p>\n\t\t\t\t\t\t<p class=\"price\">{{product.purpose}}</p>\n\t\t\t\t\t\t<p class=\"price\">Best Price <span>{{product.price | currency:'INR':true}}</span></p>\n\t\t\t\t\t\t<a routerLink=\"{{product.url}}\" class=\"btn\">Details</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\" *ngIf=\"isEven==false\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='no_product' *ngIf=\"products.length==0\">There are no products in this collection.</div>\n\t\t<div class=\"pages\" style=\"clear: both;\">\n\t\t\t<pagination-controls (pageChange)=\"p = $event\" #api *ngIf=\"products.length>10\"></pagination-controls>\n\t\t</div>\n\t</div>\n\n\t<div class=\"grid_3\">\n\t\t<h3>SEARCH Suit Salvar</h3>\n\t\t<form method=\"post\" id=\"form2\" class=\"form1\">\n\t\t\t<label for=\"productMaterial\">\n\t\t\t\t<span class=\"col1\">All Search Operators</span><br>\n\t\t\t\t<span>Material</span>\n\t\t\t\t<select [(ngModel)]=\"selectedMaterial\" id=\"productMaterial\" (ngModelChange)=\"materialFilter($event)\"\n\t\t\t\t        name=\"sel1\">\n\t\t\t\t\t<option value=\"\" selected>Select Material</option>\n\t\t\t\t\t<option *ngFor=\"let pm of productMaterial\"\n\t\t\t\t\t        [value]=\"pm.id\">{{pm.materialType}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\n\t\t\t\t<!--<select [(ngModel)]=\"selectedMaterial\" name=\"selectedMaterial\"  id=\"productMaterial\">\n\t\t\t\t  <option *ngFor=\"let pm of productMaterial\" [value]=\"pm.id\" >{{pm.materialType}}</option>\n\t\t\t\t</select>-->\n\t\t\t</label>\n\t\t\t<label for=\"productColor\">\n\t\t\t\t<span>Color</span>\n\t\t\t\t<select [ngModel]=\"selectedColor\" id=\"productColor\" (ngModelChange)=\"colorFilter($event)\" name=\"sel2\">\n\t\t\t\t\t<option value=\"\" selected>Select Color</option>\n\t\t\t\t\t<option *ngFor=\"let pc of productColor\"\n\t\t\t\t\t        [value]=\"pc.id\">{{pc.color}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<span>Price</span>\n\t\t\t\t<select [ngModel]=\"selectedPrice\" id=\"productPrice\" (ngModelChange)=\"priceFilter($event)\" name=\"sel3\">\n\t\t\t\t\t<option value=\"\" selected>Select Pice</option>\n\t\t\t\t\t<option *ngFor=\"let pp of productPrice\"\n\t\t\t\t\t        [value]=\"pp.range\">{{pp.text}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t\t<div class=\"clear\"></div>\n\t\t</form>\n\t</div>\n\t<div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config_interface__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__app_config_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ProductService = (function () {
    function ProductService(http, config) {
        this.http = http;
        this.config = config;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.headers.append('Access-Control-Allow-Origin', 'true');
    }
    ProductService.prototype.getProducts = function (category, limit) {
        if (limit === void 0) { limit = null; }
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        parameters.set('category', category);
        parameters.set('limit', limit);
        return this.http.get(this.config.apiEndpoint + 'products.php', { search: parameters })
            .toPromise()
            .then(function (response) {
            return response.json().data;
        })
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (category, code) {
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        parameters.set('category', category);
        parameters.set('code', code);
        return this.http.get(this.config.apiEndpoint + 'product.php', { search: parameters })
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductMaterial = function (type) {
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        parameters.set('product_type', type);
        return this.http.get(this.config.apiEndpoint + 'material.php', { search: parameters })
            .map(function (response) { return response.json().data; })
            .catch(this.handleNewError);
    };
    ProductService.prototype.getProductColor = function (type) {
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        parameters.set('product_type', type);
        return this.http.get(this.config.apiEndpoint + 'color.php', { search: parameters })
            .map(function (response) { return response.json().data; })
            .catch(this.handleNewError);
    };
    ProductService.prototype.getSearchBasedProducts = function (category, material, color, price) {
        if (material === void 0) { material = null; }
        if (color === void 0) { color = null; }
        if (price === void 0) { price = null; }
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        parameters.set('category', category);
        parameters.set('material', material);
        parameters.set('color', color);
        parameters.set('price', price);
        return this.http.get(this.config.apiEndpoint + 'search-based-products.php', { search: parameters })
            .map(function (response) { return response.json().data; })
            .catch(this.handleNewError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProductService.prototype.handleNewError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__app_config_constants__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__app_config_interface__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_config_interface__["IAppConfig"]) === "function" && _b || Object])
], ProductService);

var _a, _b;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

;(function($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; }
  };

  $.fn.bxSlider = function(options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // make modification to the wrapper (.bx-wrapper)
      if (!slider.settings.pager && !slider.settings.controls) {
        slider.viewport.parent().css({
          margin: '0 auto 0px'
        });
      }
      // apply css to all slider children
      slider.children.css({
        float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete) { $(this).load(); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth);
        }
      // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
        }
      // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
      // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      // cycle through each child
      slider.children.each(function(index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
        // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };

    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
      // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(function() {
          el.startAuto();
        }).blur(function() {
          el.stopAuto();
        });
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function() {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function() {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function(e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          //we don't go to undefined slides
          return slider.active.index;
        }
      // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
      // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        } else {
          slider.working = false;
        }
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);


/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA/CAYAAAAfQM0aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRjQ5NEM3RDI5QTkxMUUyOTc1NENCMzI4N0QwNDNCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRjQ5NEM3RTI5QTkxMUUyOTc1NENCMzI4N0QwNDNCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJGNDk0QzdCMjlBOTExRTI5NzU0Q0IzMjg3RDA0M0I5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJGNDk0QzdDMjlBOTExRTI5NzU0Q0IzMjg3RDA0M0I5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WeGRxAAAB2hJREFUeNrUXFts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"

/***/ })

},[587]);
//# sourceMappingURL=main.bundle.js.map