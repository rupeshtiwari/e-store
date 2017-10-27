webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("../../../../../src/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__branding_branding_module__ = __webpack_require__("../../../../../src/app/branding/branding.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__branding_containers_app_component__ = __webpack_require__("../../../../../src/app/branding/containers/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branding_routes__ = __webpack_require__("../../../../../src/app/branding/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__branding_material_module__ = __webpack_require__("../../../../../src/app/branding/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_skip__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__branding_material_module__["a" /* EStoreMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__branding_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_20__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__index__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_19__ngrx_router_store__["a" /* StoreRouterConnectingModule */],
                !__WEBPACK_IMPORTED_MODULE_22__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_21__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
                __WEBPACK_IMPORTED_MODULE_18__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_1__branding_branding_module__["a" /* BrandingModule */].forRoot(),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__branding_containers_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/branding/actions/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPEN_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpenSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CloseSidenav; });
var OPEN_SIDENAV = '[Layout] Open Sidenav';
var CLOSE_SIDENAV = '[Layout] Close Sidenav';
var OpenSidenav = /** @class */ (function () {
    function OpenSidenav() {
        this.type = OPEN_SIDENAV;
    }
    return OpenSidenav;
}());

var CloseSidenav = /** @class */ (function () {
    function CloseSidenav() {
        this.type = CLOSE_SIDENAV;
    }
    return CloseSidenav;
}());

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../../../src/app/branding/branding.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_shopping_cart_container_component__ = __webpack_require__("../../../../../src/app/branding/containers/shopping-cart.container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_branding_containers_app_component__ = __webpack_require__("../../../../../src/app/branding/containers/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_branding_layout_components_nav_item__ = __webpack_require__("../../../../../src/app/branding/layout/components/nav-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_branding_layout_components_toolbar__ = __webpack_require__("../../../../../src/app/branding/layout/components/toolbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_cart_src_cart_module__ = __webpack_require__("../../../../../src/modules/cart/src/cart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_finance_src_finance_module__ = __webpack_require__("../../../../../src/modules/finance/src/finance.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_sales_src_sales_module__ = __webpack_require__("../../../../../src/modules/sales/src/sales.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_not_found_page__ = __webpack_require__("../../../../../src/app/branding/containers/not-found-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_product_list_container_component__ = __webpack_require__("../../../../../src/app/branding/containers/product-list-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layout_components__ = __webpack_require__("../../../../../src/app/branding/layout/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_module__ = __webpack_require__("../../../../../src/app/branding/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reducers_index__ = __webpack_require__("../../../../../src/app/branding/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6_app_branding_containers_app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_12__containers_not_found_page__["a" /* NotFoundPageComponent */],
    __WEBPACK_IMPORTED_MODULE_14__layout_components__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7_app_branding_layout_components_nav_item__["a" /* NavItemComponent */],
    __WEBPACK_IMPORTED_MODULE_14__layout_components__["b" /* SidenavComponent */],
    __WEBPACK_IMPORTED_MODULE_8_app_branding_layout_components_toolbar__["a" /* ToolbarComponent */],
    __WEBPACK_IMPORTED_MODULE_13__containers_product_list_container_component__["a" /* ProductListContainerComponent */],
    __WEBPACK_IMPORTED_MODULE_0__containers_shopping_cart_container_component__["a" /* ShoppingCartContainerComponent */],
];
var BrandingModule = /** @class */ (function () {
    function BrandingModule() {
    }
    BrandingModule_1 = BrandingModule;
    BrandingModule.forRoot = function () {
        return {
            ngModule: BrandingModule_1,
            providers: [],
        };
    };
    BrandingModule = BrandingModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_15__material_module__["a" /* EStoreMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_11__modules_sales_src_sales_module__["a" /* SalesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__modules_finance_src_finance_module__["a" /* FinanceModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__modules_cart_src_cart_module__["a" /* CartModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["i" /* StoreModule */].forFeature('branding', __WEBPACK_IMPORTED_MODULE_16__reducers_index__["c" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forFeature([]),
            ],
            declarations: COMPONENTS,
            exports: COMPONENTS,
        })
    ], BrandingModule);
    return BrandingModule;
    var BrandingModule_1;
}());

//# sourceMappingURL=branding.module.js.map

/***/ }),

/***/ "../../../../../src/app/branding/containers/app.component.html":
/***/ (function(module, exports) {

module.exports = "<es-layout>\n    <es-sidenav [open]=\"showSidenav$ | async\">\n        <es-nav-item (navigate)=\"closeSidenav()\" routerLink=\"/products\" icon=\"dashboard\" hint=\"click to see all of our products\">\n            Browse Products\n        </es-nav-item>\n        <es-nav-item (navigate)=\"closeSidenav()\" routerLink=\"/cart\" icon=\"shopping cart\" hint=\"click to see shopping cart\">\n            Shopping cart\n        </es-nav-item>\n    </es-sidenav>\n    <es-toolbar (openMenu)=\"openSidenav()\">\n        <es-cart-icon (showCart)=\"onShowCart($event)\" > </es-cart-icon>\n    </es-toolbar>\n\n    <div *ngIf=\"showSpinner$|async\">\n        <mat-spinner strokeWidth=\"3\" [diameter]=\"50\"></mat-spinner>\n    </div>\n\n    <router-outlet></router-outlet>\n\n</es-layout>"

/***/ }),

/***/ "../../../../../src/app/branding/containers/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_index__ = __webpack_require__("../../../../../src/app/branding/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_layout__ = __webpack_require__("../../../../../src/app/branding/actions/layout.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showSidenav$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers_index__["b" /* getShowSidenav */]);
        this.showSpinner$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers_index__["d" /* showSpinner */]);
    };
    AppComponent.prototype.closeSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_layout__["b" /* CloseSidenav */]());
    };
    AppComponent.prototype.openSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_layout__["d" /* OpenSidenav */]());
    };
    AppComponent.prototype.onShowCart = function () {
        this.router.navigate(['cart']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/branding/containers/app.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
            styles: [
                "\n   .es-progress-spinner {\n      width:100%,\n      position:absolute;\n      top:500px;\n      left:500px; \n  }\n   "
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/branding/containers/not-found-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'bc-not-found-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <mat-card>\n      <mat-card-title>404: Not Found</mat-card-title>\n      <mat-card-content>\n        <p>Hey! It looks like this page doesn't exist yet.</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" routerLink=\"/\">Take Me Home</button>\n      </mat-card-actions>\n    </mat-card>\n  ",
            styles: [
                "\n    :host {\n      text-align: center;\n    }\n  ",
            ],
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());

//# sourceMappingURL=not-found-page.js.map

/***/ }),

/***/ "../../../../../src/app/branding/containers/product-list-container.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngFor=\"let id of productIds$ | async; trackBy:trackProduct\">\r\n    <mat-card-header>\r\n        <mat-card-title>\r\n            <es-product-name [id]=\"id\"></es-product-name>\r\n        </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <es-product-price [id]=\"id\"></es-product-price>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <es-add-to-cart [id]=\"id\"></es-add-to-cart>\r\n    </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/branding/containers/product-list-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_e_store_typings__ = __webpack_require__("../../../../../src/e-store-typings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/branding/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListContainerComponent = /** @class */ (function () {
    function ProductListContainerComponent(store) {
        this.store = store;
    }
    ProductListContainerComponent.prototype.trackProduct = function (index, product) {
        return product;
    };
    ProductListContainerComponent.prototype.ngOnInit = function () {
        this.productIds$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getAllProducts */]);
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2_e_store_typings__["b" /* NAVIGATE_PRODUCTS_PAGE */] });
    };
    ProductListContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: '<product-list-container></product-list-container>',
            template: __webpack_require__("../../../../../src/app/branding/containers/product-list-container.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
    ], ProductListContainerComponent);
    return ProductListContainerComponent;
    var _a;
}());

//# sourceMappingURL=product-list-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/branding/containers/shopping-cart.container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartContainerComponent = /** @class */ (function () {
    function ShoppingCartContainerComponent(store) {
        this.store = store;
    }
    ShoppingCartContainerComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-shopping-cart-page',
            template: "coming soon",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
    ], ShoppingCartContainerComponent);
    return ShoppingCartContainerComponent;
    var _a;
}());

//# sourceMappingURL=shopping-cart.container.component.js.map

/***/ }),

/***/ "../../../../../src/app/branding/layout/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__("../../../../../src/app/branding/layout/components/layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_item__ = __webpack_require__("../../../../../src/app/branding/layout/components/nav-item.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav__ = __webpack_require__("../../../../../src/app/branding/layout/components/sidenav.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__sidenav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbar__ = __webpack_require__("../../../../../src/app/branding/layout/components/toolbar.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/branding/layout/components/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-layout',
            template: "\n    <mat-sidenav-container fullscreen>\n      <ng-content></ng-content>\n    </mat-sidenav-container>\n  ",
            styles: [
                "\n    mat-sidenav-container {\n      background: rgba(0, 0, 0, 0.03);\n    }\n    *, /deep/ * {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n  ",
            ],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        })
    ], LayoutComponent);
    return LayoutComponent;
}());

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../../../src/app/branding/layout/components/nav-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
        this.icon = '';
        this.hint = '';
        this.routerLink = '/';
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "hint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "routerLink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "navigate", void 0);
    NavItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-nav-item',
            template: "\n    <a mat-list-item [routerLink]=\"routerLink\"\n     (click)=\"navigate.emit()\">\n      <mat-icon mat-list-icon>{{ icon }}</mat-icon>\n      <span mat-line><ng-content></ng-content></span>\n      <span mat-line class=\"secondary\">{{ hint }}</span>\n    </a>\n  ",
            styles: [
                "\n    .secondary {\n      color: rgba(0, 0, 0, 0.54);\n    }\n  ",
            ],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        })
    ], NavItemComponent);
    return NavItemComponent;
}());

//# sourceMappingURL=nav-item.js.map

/***/ }),

/***/ "../../../../../src/app/branding/layout/components/sidenav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.open = false;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        console.log(open);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "open", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-sidenav',
            template: "\n    <mat-sidenav [opened]=\"open\">\n      <mat-nav-list>\n        <ng-content></ng-content>\n      </mat-nav-list>\n    </mat-sidenav>\n  ",
            styles: [
                "\n    mat-sidenav {\n      width: 300px;\n    }\n  ",
            ],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        })
    ], SidenavComponent);
    return SidenavComponent;
}());

//# sourceMappingURL=sidenav.js.map

/***/ }),

/***/ "../../../../../src/app/branding/layout/components/toolbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.openMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "openMenu", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-toolbar',
            template: "\n    <mat-toolbar color=\"primary\">\n      <button mat-icon-button (click)=\"openMenu.emit()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      \n      <ng-content></ng-content>\n    </mat-toolbar>\n  ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());

//# sourceMappingURL=toolbar.js.map

/***/ }),

/***/ "../../../../../src/app/branding/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EStoreMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MODULES = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatProgressSpinnerModule */],
];
var EStoreMaterialModule = /** @class */ (function () {
    function EStoreMaterialModule() {
    }
    EStoreMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: MODULES,
            exports: MODULES,
        })
    ], EStoreMaterialModule);
    return EStoreMaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/branding/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllProducts; });
/* unused harmony export getBrandingState */
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getShowSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_cart_src_reducers__ = __webpack_require__("../../../../../src/modules/cart/src/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_sales_src_reducers__ = __webpack_require__("../../../../../src/modules/sales/src/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_layout__ = __webpack_require__("../../../../../src/app/branding/reducers/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_e_store_typings__ = __webpack_require__("../../../../../src/e-store-typings/index.ts");
/* unused harmony namespace reexport */






var reducers = {
    layout: __WEBPACK_IMPORTED_MODULE_4__reducers_layout__["b" /* reducer */],
    routerReducer: __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["b" /* routerReducer */]
};
var getAllProducts = __WEBPACK_IMPORTED_MODULE_3__modules_sales_src_reducers__["a" /* getAllProductIds */];
var getBrandingState = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["l" /* createFeatureSelector */])('branding');
var getLayoutState = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["m" /* createSelector */])(getBrandingState, function (state) { return state.layout; });
var getShowSidenav = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["m" /* createSelector */])(getLayoutState, __WEBPACK_IMPORTED_MODULE_4__reducers_layout__["a" /* getShowSidenav */]);
var showSpinner = __WEBPACK_IMPORTED_MODULE_2__modules_cart_src_reducers__["b" /* isLoading */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/branding/reducers/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getShowSidenav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout__ = __webpack_require__("../../../../../src/app/branding/actions/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");


var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* CLOSE_SIDENAV */]:
            return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["d" /* assoc */])('showSidenav', false, state);
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["c" /* OPEN_SIDENAV */]:
            return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["d" /* assoc */])('showSidenav', true, state);
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../../../src/app/branding/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_shopping_cart_container_component__ = __webpack_require__("../../../../../src/app/branding/containers/shopping-cart.container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_product_list_container_component__ = __webpack_require__("../../../../../src/app/branding/containers/product-list-container.component.ts");


var routes = [
    // { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_1__containers_product_list_container_component__["a" /* ProductListContainerComponent */]
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_0__containers_shopping_cart_container_component__["a" /* ShoppingCartContainerComponent */]
    },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('------------------------');
        console.log('stateBefore', state);
        console.log('action', action);
        var newState = reducer(state, action);
        console.log('stateAfter', newState);
        console.log('------------------------');
        return newState;
    };
}
var reducers = {};
var metaReducers = !__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production
    ? [logger]
    : [];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/e-store-typings/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART_SUCCESS; });
var ADD_TO_CART_SUCCESS = '[Cart] add success';
//# sourceMappingURL=cart.js.map

/***/ }),

/***/ "../../../../../src/e-store-typings/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Dictionary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NAVIGATE_PRODUCTS_PAGE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart__ = __webpack_require__("../../../../../src/e-store-typings/cart.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cart__["a"]; });
var Dictionary = /** @class */ (function () {
    function Dictionary() {
    }
    return Dictionary;
}());

;
;
var NAVIGATE_PRODUCTS_PAGE = 'NAVIGATE_PRODUCTS_PAGE';

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/actions/cart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART; });
/* unused harmony export ADD_TO_CART_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddToCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddToCartSuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_e_store_typings__ = __webpack_require__("../../../../../src/e-store-typings/index.ts");

var ADD_TO_CART = '[Cart] Add to cart';
var ADD_TO_CART_FAIL = '[Cart] Add to Fail';
var AddToCart = /** @class */ (function () {
    function AddToCart(payload) {
        this.payload = payload;
        this.type = ADD_TO_CART;
    }
    return AddToCart;
}());

var AddToCartFail = /** @class */ (function () {
    function AddToCartFail(payload) {
        this.payload = payload;
        this.type = ADD_TO_CART_FAIL;
    }
    return AddToCartFail;
}());

var AddToCartSuccess = /** @class */ (function () {
    function AddToCartSuccess(payload) {
        this.payload = payload;
        this.type = __WEBPACK_IMPORTED_MODULE_0_e_store_typings__["a" /* ADD_TO_CART_SUCCESS */];
    }
    return AddToCartSuccess;
}());

//# sourceMappingURL=cart-item.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/cart.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartApi = /** @class */ (function () {
    function CartApi() {
        this.cartItemRepository = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    CartApi.prototype.addToCart = function (cartItem) {
        var _this = this;
        setTimeout(function () { return _this.cartItemRepository.next(cartItem); }, 1000);
        return this.cartItemRepository;
    };
    CartApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])()
    ], CartApi);
    return CartApi;
}());

//# sourceMappingURL=cart.api.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/cart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_api__ = __webpack_require__("../../../../../src/modules/cart/src/cart.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_add_to_cart_container_component__ = __webpack_require__("../../../../../src/modules/cart/src/containers/add-to-cart.container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_cart_icon_container_component__ = __webpack_require__("../../../../../src/modules/cart/src/containers/cart-icon-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects_cart_item__ = __webpack_require__("../../../../../src/modules/cart/src/effects/cart-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/modules/cart/src/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_index__ = __webpack_require__("../../../../../src/modules/cart/src/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__containers_add_to_cart_container_component__["a" /* AddToCartContainerComponent */],
    __WEBPACK_IMPORTED_MODULE_6__containers_cart_icon_container_component__["a" /* CartIconContainerComponent */]
];
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule_1 = CartModule;
    CartModule.forRoot = function () {
        return {
            ngModule: CartModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__cart_api__["a" /* CartApi */]
            ]
        };
    };
    CartModule = CartModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* EStoreMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('cart', __WEBPACK_IMPORTED_MODULE_9__reducers_index__["c" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_7__effects_cart_item__["a" /* CartItemEffects */]]),
            ],
            exports: COMPONENTS,
        })
    ], CartModule);
    return CartModule;
    var CartModule_1;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/containers/add-to-cart.container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartContainerComponent; });
/* unused harmony export guid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_cart_item__ = __webpack_require__("../../../../../src/modules/cart/src/actions/cart-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cart_item__ = __webpack_require__("../../../../../src/modules/cart/src/models/cart-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddToCartContainerComponent = /** @class */ (function () {
    function AddToCartContainerComponent(store) {
        this.store = store;
    }
    AddToCartContainerComponent.prototype.ngOnInit = function () {
    };
    AddToCartContainerComponent.prototype.addToCart = function (event) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_cart_item__["b" /* AddToCart */](new __WEBPACK_IMPORTED_MODULE_3__models_cart_item__["a" /* CartItem */](guid(), this.id, 1)));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], AddToCartContainerComponent.prototype, "id", void 0);
    AddToCartContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-add-to-cart',
            template: "\n        <button (click)=\"addToCart($event)\" mat-button mat-raised-button color=\"primary\"> Add To Cart </button>\n    ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
    ], AddToCartContainerComponent);
    return AddToCartContainerComponent;
    var _a;
}());

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
//# sourceMappingURL=add-to-cart.container.component.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/containers/cart-icon-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartIconContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/modules/cart/src/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartIconContainerComponent = /** @class */ (function () {
    function CartIconContainerComponent(store) {
        this.store = store;
        this.showCart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CartIconContainerComponent.prototype.ngOnInit = function () {
        this.count$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getTotalCount */]);
    };
    CartIconContainerComponent.prototype.onShowCartClick = function (event) {
        event.preventDefault();
        this.showCart.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], CartIconContainerComponent.prototype, "showCart", void 0);
    CartIconContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-cart-icon',
            template: "\n    <button mat-icon-button color=\"accent\" (click)=\"onShowCartClick($event)\">\n        <mat-icon>shopping cart</mat-icon>\n        {{count$|async}}\n    </button>\n    ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
    ], CartIconContainerComponent);
    return CartIconContainerComponent;
    var _a, _b;
}());

//# sourceMappingURL=cart-icon-container.component.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/effects/cart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_cart_item__ = __webpack_require__("../../../../../src/modules/cart/src/actions/cart-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_api__ = __webpack_require__("../../../../../src/modules/cart/src/cart.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartItemEffects = /** @class */ (function () {
    function CartItemEffects(actions$, cartApi) {
        var _this = this;
        this.actions$ = actions$;
        this.cartApi = cartApi;
        this.addToCart = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_cart_item__["a" /* ADD_TO_CART */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (cartItem) {
            return _this.cartApi.addToCart(cartItem)
                .map(function (cartItem) { return new __WEBPACK_IMPORTED_MODULE_2__actions_cart_item__["d" /* AddToCartSuccess */](cartItem); })
                .catch(function (e) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_2__actions_cart_item__["c" /* AddToCartFail */](e)); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CartItemEffects.prototype, "addToCart", void 0);
    CartItemEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__cart_api__["a" /* CartApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cart_api__["a" /* CartApi */]) === "function" && _b || Object])
    ], CartItemEffects);
    return CartItemEffects;
    var _a, _b;
}());

//# sourceMappingURL=cart-item.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EStoreMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MODULES = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */],
];
var EStoreMaterialModule = /** @class */ (function () {
    function EStoreMaterialModule() {
    }
    EStoreMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: MODULES,
            exports: MODULES,
        })
    ], EStoreMaterialModule);
    return EStoreMaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/models/cart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(id, productId, quantity) {
        this.id = id;
        this.productId = productId;
        this.quantity = quantity;
    }
    return CartItem;
}());

//# sourceMappingURL=cart-item.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/reducers/cart-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* unused harmony export getEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTotalCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_e_store_typings__ = __webpack_require__("../../../../../src/e-store-typings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_cart_item__ = __webpack_require__("../../../../../src/modules/cart/src/actions/cart-item.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var initialState = {
    entities: [],
    loading: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_3__actions_cart_item__["a" /* ADD_TO_CART */]: {
            return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["d" /* assoc */])('loading', true, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1_e_store_typings__["a" /* ADD_TO_CART_SUCCESS */]: {
            var entityIndex_1 = Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["h" /* findIndex */])(Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["k" /* propEq */])('productId', action.payload.productId), state.entities);
            if (entityIndex_1 < 0) {
                return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* evolve */])({
                    entities: function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["c" /* append */])(__assign({}, action.payload), entities); },
                    loading: function (_) { return false; }
                }, state);
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* evolve */])({
                    entities: function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["b" /* adjust */])(Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["g" /* evolve */])({
                        quantity: function (q) { return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["i" /* inc */])(q); }
                    }), entityIndex_1, entities); },
                    loading: function (_) { return false; }
                }, state);
            }
        }
        default: {
            return state;
        }
    }
}
var getEntities = function (state) { return state.entities; };
var getTotalCount = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getEntities, function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["l" /* reduce */])(function (count, cartItem) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_ramda__["a" /* add */])(count, cartItem.quantity);
}, 0, entities); });
var isLoading = function (state) { return state.loading; };
//# sourceMappingURL=cart-item.js.map

/***/ }),

/***/ "../../../../../src/modules/cart/src/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* unused harmony export getCartState */
/* unused harmony export getCartItemsState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTotalCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_item__ = __webpack_require__("../../../../../src/modules/cart/src/reducers/cart-item.ts");


var reducers = {
    cartItems: __WEBPACK_IMPORTED_MODULE_1__cart_item__["c" /* reducer */],
};
var getCartState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('cart');
var getCartItemsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getCartState, function (state) { return state.cartItems; });
var getTotalCount = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getCartItemsState, __WEBPACK_IMPORTED_MODULE_1__cart_item__["a" /* getTotalCount */]);
var isLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getCartItemsState, __WEBPACK_IMPORTED_MODULE_1__cart_item__["b" /* isLoading */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/actions/price.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_PRICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_PRICES_SUCCESS; });
/* unused harmony export LOAD_PRICES_FAIL */
/* unused harmony export LoadPrices */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadPricesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadPricesFail; });
var LOAD_PRICES = '[Finance] Load Prices';
var LOAD_PRICES_SUCCESS = '[Finance] Load Prices Success';
var LOAD_PRICES_FAIL = '[Finance] Load Prices Fail';
var LoadPrices = /** @class */ (function () {
    function LoadPrices() {
        this.type = LOAD_PRICES;
    }
    return LoadPrices;
}());

var LoadPricesSuccess = /** @class */ (function () {
    function LoadPricesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRICES_SUCCESS;
    }
    return LoadPricesSuccess;
}());

var LoadPricesFail = /** @class */ (function () {
    function LoadPricesFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRICES_FAIL;
    }
    return LoadPricesFail;
}());

//# sourceMappingURL=price.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/containers/product-price-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPriceContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/modules/finance/src/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPriceContainerComponent = /** @class */ (function () {
    function ProductPriceContainerComponent(store) {
        this.store = store;
    }
    ProductPriceContainerComponent.prototype.ngOnInit = function () {
        this.price$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getProductPriceById */](this.id));
    };
    ProductPriceContainerComponent.prototype.trackProduct = function (index, price) {
        return price.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProductPriceContainerComponent.prototype, "id", void 0);
    ProductPriceContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-product-price',
            template: "\n    <span>{{price$|async|currency:'USD':true}}</span>\n    ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
    ], ProductPriceContainerComponent);
    return ProductPriceContainerComponent;
    var _a;
}());

//# sourceMappingURL=product-price-container.component.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/effects/finance.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_e_store_typings__ = __webpack_require__("../../../../../src/e-store-typings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_price__ = __webpack_require__("../../../../../src/modules/finance/src/actions/price.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finance_api__ = __webpack_require__("../../../../../src/modules/finance/src/finance.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







function firstSegment(r) {
    return r.payload.routerState.root.firstChild;
}
var FinanceEffects = /** @class */ (function () {
    function FinanceEffects(actions$, store, financeApi) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.financeApi = financeApi;
        this.loadProduct$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3_e_store_typings__["b" /* NAVIGATE_PRODUCTS_PAGE */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (_) {
            return _this.financeApi.getAllProducts()
                .map(function (prods) { return new __WEBPACK_IMPORTED_MODULE_5__actions_price__["d" /* LoadPricesSuccess */](prods); })
                .catch(function (e) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_price__["c" /* LoadPricesFail */](e)); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FinanceEffects.prototype, "loadProduct$", void 0);
    FinanceEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__finance_api__["a" /* FinanceApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__finance_api__["a" /* FinanceApi */]) === "function" && _c || Object])
    ], FinanceEffects);
    return FinanceEffects;
    var _a, _b, _c;
}());

//# sourceMappingURL=finance.effects.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/finance.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_price__ = __webpack_require__("../../../../../src/modules/finance/src/models/price.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FinanceApi = /** @class */ (function () {
    function FinanceApi() {
        this.products = [
            __WEBPACK_IMPORTED_MODULE_2__models_price__["a" /* Price */].create({
                id: '1',
                productId: '1',
                price: '3'
            }),
            __WEBPACK_IMPORTED_MODULE_2__models_price__["a" /* Price */].create({
                id: '2',
                productId: '2',
                price: '2'
            }),
            __WEBPACK_IMPORTED_MODULE_2__models_price__["a" /* Price */].create({
                id: '3',
                productId: '3',
                price: '600'
            })
        ];
    }
    FinanceApi.prototype.getAllProducts = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.products);
    };
    FinanceApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FinanceApi);
    return FinanceApi;
}());

//# sourceMappingURL=finance.api.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/finance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_product_price_container_component__ = __webpack_require__("../../../../../src/modules/finance/src/containers/product-price-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_finance_effects__ = __webpack_require__("../../../../../src/modules/finance/src/effects/finance.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finance_api__ = __webpack_require__("../../../../../src/modules/finance/src/finance.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("../../../../../src/modules/finance/src/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers__ = __webpack_require__("../../../../../src/modules/finance/src/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__containers_product_price_container_component__["a" /* ProductPriceContainerComponent */]
];
var FinanceModule = /** @class */ (function () {
    function FinanceModule() {
    }
    FinanceModule_1 = FinanceModule;
    FinanceModule.forRoot = function () {
        return {
            ngModule: FinanceModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__finance_api__["a" /* FinanceApi */]
            ]
        };
    };
    FinanceModule = FinanceModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* EStoreMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('finance', __WEBPACK_IMPORTED_MODULE_8__reducers__["b" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_5__effects_finance_effects__["a" /* FinanceEffects */]]),
            ],
            exports: COMPONENTS,
        })
    ], FinanceModule);
    return FinanceModule;
    var FinanceModule_1;
}());

//# sourceMappingURL=finance.module.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EStoreMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MODULES = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */]
];
var EStoreMaterialModule = /** @class */ (function () {
    function EStoreMaterialModule() {
    }
    EStoreMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: MODULES,
            exports: MODULES,
        })
    ], EStoreMaterialModule);
    return EStoreMaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/models/price.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Price; });
var Price = /** @class */ (function () {
    function Price() {
    }
    Price.create = function (obj) {
        var price = new Price();
        return Object.assign({}, price, obj);
    };
    return Price;
}());

//# sourceMappingURL=price.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* unused harmony export getFinanceState */
/* unused harmony export getOrderEntitiesState */
/* unused harmony export getOrderEntities */
/* unused harmony export getAllOrders */
/* unused harmony export getSelectedOrderId */
/* unused harmony export getSelectedOrder */
/* unused harmony export getPriceEntitiesState */
/* unused harmony export getPriceEntities */
/* unused harmony export getAllProducts */
/* unused harmony export getAllProductIds */
/* unused harmony export getSelectedProductId */
/* unused harmony export getSelectedProduct */
/* unused harmony export getProductById */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductPriceById; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_item_price__ = __webpack_require__("../../../../../src/modules/finance/src/reducers/order-item-price.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__price__ = __webpack_require__("../../../../../src/modules/finance/src/reducers/price.ts");




var reducers = {
    orders: __WEBPACK_IMPORTED_MODULE_2__order_item_price__["c" /* reducer */],
    prices: __WEBPACK_IMPORTED_MODULE_3__price__["f" /* reducer */]
};
var getFinanceState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('finance');
//------ORDERS
var getOrderEntitiesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getFinanceState, function (state) { return state.orders; });
var getOrderEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntitiesState, __WEBPACK_IMPORTED_MODULE_2__order_item_price__["a" /* getEntities */]);
var getAllOrders = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntities, function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["m" /* values */])(entities); });
var getSelectedOrderId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntitiesState, __WEBPACK_IMPORTED_MODULE_2__order_item_price__["b" /* getSelectedId */]);
var getSelectedOrder = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntities, getSelectedOrderId, function (entities, selectedId) { return selectedId && entities[selectedId]; });
//----Prices
var getPriceEntitiesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getFinanceState, function (state) { return state.prices; });
var getPriceEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPriceEntitiesState, __WEBPACK_IMPORTED_MODULE_3__price__["b" /* getEntities */]);
var getAllProducts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPriceEntities, function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["m" /* values */])(entities); });
var getAllProductIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPriceEntitiesState, __WEBPACK_IMPORTED_MODULE_3__price__["a" /* getAllIds */]);
var getSelectedProductId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPriceEntitiesState, __WEBPACK_IMPORTED_MODULE_3__price__["e" /* getSelectedId */]);
var getSelectedProduct = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPriceEntities, getSelectedProductId, function (entities, selectedId) { return selectedId && entities[selectedId]; });
var getProductById = function (id) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPriceEntitiesState, __WEBPACK_IMPORTED_MODULE_3__price__["d" /* getProductById */](id)); };
var getProductPriceById = function (id) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPriceEntitiesState, function (state) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["e" /* compose */])(__WEBPACK_IMPORTED_MODULE_3__price__["c" /* getPrice */], __WEBPACK_IMPORTED_MODULE_3__price__["d" /* getProductById */](id))(state);
}); };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/reducers/order-item-price.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEntities; });
var initialState = {
    ids: [],
    entities: {},
    selectedOrderId: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    return state;
}
var getSelectedId = function (state) { return state.selectedOrderId; };
var getEntities = function (state) { return state.entities; };
//# sourceMappingURL=order-item-price.js.map

/***/ }),

/***/ "../../../../../src/modules/finance/src/reducers/price.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSelectedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPrice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_price__ = __webpack_require__("../../../../../src/modules/finance/src/actions/price.ts");


var initialState = {
    ids: [],
    entities: {},
    selectedProductId: null,
    loading: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_price__["a" /* LOAD_PRICES */]: {
            return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* evolve */])({ loading: function (_) { return true; } }, state);
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions_price__["b" /* LOAD_PRICES_SUCCESS */]: {
            return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["g" /* evolve */])({
                ids: function (_) { return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["j" /* map */])(function (price) { return price.id; }, action.payload); },
                entities: function (_) { return Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["l" /* reduce */])(function (products, price) {
                    products[price.id] = price;
                    return products;
                }, {}, action.payload); },
                selectedProductId: function (_) { return null; },
                loading: function (_) { return false; }
            }, state);
        }
        default: {
            return state;
        }
    }
}
var getSelectedId = function (state) { return state.selectedProductId; };
var getEntities = function (state) { return state.entities; };
var getProductById = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["f" /* curry */])(function (id, state) { return id && state.entities[id]; });
var getAllIds = function (state) { return state.ids; };
var getPrice = function (price) { return price.price; };
//# sourceMappingURL=price.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/actions/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_PRODUCTS_SUCCESS; });
/* unused harmony export LOAD_PRODUCTS_FAIL */
/* unused harmony export LoadProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadProductsFail; });
var LOAD_PRODUCTS = '[Sales] Load Products';
var LOAD_PRODUCTS_SUCCESS = '[Sales] Load Products Success';
var LOAD_PRODUCTS_FAIL = '[Sales] Load Products Fail';
var LoadProducts = /** @class */ (function () {
    function LoadProducts() {
        this.type = LOAD_PRODUCTS;
    }
    return LoadProducts;
}());

var LoadProductsSuccess = /** @class */ (function () {
    function LoadProductsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCTS_SUCCESS;
    }
    return LoadProductsSuccess;
}());

var LoadProductsFail = /** @class */ (function () {
    function LoadProductsFail(payload) {
        this.payload = payload;
        this.type = LOAD_PRODUCTS_FAIL;
    }
    return LoadProductsFail;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/containers/create-order-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreateOrderContainerComponent = /** @class */ (function () {
    function CreateOrderContainerComponent() {
    }
    CreateOrderContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-create-order',
            template: "\n        <button mat-raised-button color=\"primary\"> Create Order </button>\n    ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        })
    ], CreateOrderContainerComponent);
    return CreateOrderContainerComponent;
}());

//# sourceMappingURL=create-order-container.component.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/containers/product-name-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductNameContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/modules/sales/src/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductNameContainerComponent = /** @class */ (function () {
    function ProductNameContainerComponent(store) {
        this.store = store;
    }
    ProductNameContainerComponent.prototype.ngOnInit = function () {
        this.name$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* getProductNameById */](this.id));
    };
    ProductNameContainerComponent.prototype.trackProduct = function (index, product) {
        return product.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProductNameContainerComponent.prototype, "id", void 0);
    ProductNameContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'es-product-name',
            template: "\n    <span>{{name$|async}}</span>\n    ",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
    ], ProductNameContainerComponent);
    return ProductNameContainerComponent;
    var _a;
}());

//# sourceMappingURL=product-name-container.component.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/effects/sales.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_e_store_typings__ = __webpack_require__("../../../../../src/e-store-typings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_product__ = __webpack_require__("../../../../../src/modules/sales/src/actions/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sales_api__ = __webpack_require__("../../../../../src/modules/sales/src/sales.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







function firstSegment(r) {
    return r.payload.routerState.root.firstChild;
}
var SalesEffects = /** @class */ (function () {
    function SalesEffects(actions$, store, salesApi) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.salesApi = salesApi;
        this.loadProduct$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3_e_store_typings__["b" /* NAVIGATE_PRODUCTS_PAGE */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (_) {
            return _this.salesApi.getAllProducts()
                .map(function (prods) { return new __WEBPACK_IMPORTED_MODULE_5__actions_product__["d" /* LoadProductsSuccess */](prods); })
                .catch(function (e) { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_product__["c" /* LoadProductsFail */](e)); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], SalesEffects.prototype, "loadProduct$", void 0);
    SalesEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__sales_api__["a" /* SalesApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__sales_api__["a" /* SalesApi */]) === "function" && _c || Object])
    ], SalesEffects);
    return SalesEffects;
    var _a, _b, _c;
}());

//# sourceMappingURL=sales.effects.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EStoreMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MODULES = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
];
var EStoreMaterialModule = /** @class */ (function () {
    function EStoreMaterialModule() {
    }
    EStoreMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: MODULES,
            exports: MODULES,
        })
    ], EStoreMaterialModule);
    return EStoreMaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.create = function (obj) {
        var product = new Product();
        return Object.assign({}, product, obj);
    };
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* unused harmony export getSalesState */
/* unused harmony export getOrderEntitiesState */
/* unused harmony export getOrderEntities */
/* unused harmony export getAllOrders */
/* unused harmony export getSelectedOrderId */
/* unused harmony export getSelectedOrder */
/* unused harmony export getProductEntitiesState */
/* unused harmony export getProductEntities */
/* unused harmony export getAllProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllProductIds; });
/* unused harmony export getSelectedProductId */
/* unused harmony export getSelectedProduct */
/* unused harmony export getProductById */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductNameById; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__("../../../../../src/modules/sales/src/reducers/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product__ = __webpack_require__("../../../../../src/modules/sales/src/reducers/product.ts");




var reducers = {
    orders: __WEBPACK_IMPORTED_MODULE_2__order__["c" /* reducer */],
    products: __WEBPACK_IMPORTED_MODULE_3__product__["f" /* reducer */]
};
var getSalesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('sales');
//------ORDERS
var getOrderEntitiesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSalesState, function (state) { return state.orders; });
var getOrderEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntitiesState, __WEBPACK_IMPORTED_MODULE_2__order__["a" /* getEntities */]);
var getAllOrders = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntities, function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["m" /* values */])(entities); });
var getSelectedOrderId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntitiesState, __WEBPACK_IMPORTED_MODULE_2__order__["b" /* getSelectedId */]);
var getSelectedOrder = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getOrderEntities, getSelectedOrderId, function (entities, selectedId) { return selectedId && entities[selectedId]; });
//----Products
var getProductEntitiesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getSalesState, function (state) { return state.products; });
var getProductEntities = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getProductEntitiesState, __WEBPACK_IMPORTED_MODULE_3__product__["b" /* getEntities */]);
var getAllProducts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getProductEntities, function (entities) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["m" /* values */])(entities); });
var getAllProductIds = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getProductEntitiesState, __WEBPACK_IMPORTED_MODULE_3__product__["a" /* getAllIds */]);
var getSelectedProductId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getProductEntitiesState, __WEBPACK_IMPORTED_MODULE_3__product__["e" /* getSelectedId */]);
var getSelectedProduct = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getProductEntities, getSelectedProductId, function (entities, selectedId) { return selectedId && entities[selectedId]; });
var getProductById = function (id) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getProductEntitiesState, __WEBPACK_IMPORTED_MODULE_3__product__["d" /* getProductById */](id)); };
var getProductNameById = function (id) { return Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getProductEntitiesState, function (state) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["e" /* compose */])(__WEBPACK_IMPORTED_MODULE_3__product__["c" /* getName */], __WEBPACK_IMPORTED_MODULE_3__product__["d" /* getProductById */](id))(state);
}); };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/reducers/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEntities; });
var initialState = {
    ids: [],
    entities: {},
    selectedOrderId: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    return state;
}
var getSelectedId = function (state) { return state.selectedOrderId; };
var getEntities = function (state) { return state.entities; };
//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/reducers/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["f"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSelectedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product__ = __webpack_require__("../../../../../src/modules/sales/src/actions/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");


var initialState = {
    ids: [],
    entities: {},
    selectedProductId: null,
    loading: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_product__["a" /* LOAD_PRODUCTS */]: {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* evolve */])({ loading: function (_) { return true; } }, state);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_product__["b" /* LOAD_PRODUCTS_SUCCESS */]: {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["g" /* evolve */])({
                ids: function (_) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["j" /* map */])(function (product) { return product.id; }, action.payload); },
                entities: function (_) { return Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["l" /* reduce */])(function (products, product) {
                    products[product.id] = product;
                    return products;
                }, {}, action.payload); },
                selectedProductId: function (_) { return null; },
                loading: function (_) { return false; }
            }, state);
        }
        default: {
            return state;
        }
    }
}
var getSelectedId = function (state) { return state.selectedProductId; };
var getEntities = function (state) { return state.entities; };
var getProductById = Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["f" /* curry */])(function (id, state) { return id && state.entities[id]; });
var getAllIds = function (state) { return state.ids; };
var getName = function (product) { return product.name; };
//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/sales.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__("../../../../../src/modules/sales/src/models/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SalesApi = /** @class */ (function () {
    function SalesApi() {
        this.products = [
            __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */].create({
                id: '1',
                name: 'Ice Creame'
            }),
            __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */].create({
                id: '2',
                name: 'Parle G'
            }),
            __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */].create({
                id: '3',
                name: 'iPhone'
            })
        ];
    }
    SalesApi.prototype.getAllProducts = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.products);
    };
    SalesApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SalesApi);
    return SalesApi;
}());

//# sourceMappingURL=sales.api.js.map

/***/ }),

/***/ "../../../../../src/modules/sales/src/sales.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_create_order_container_component__ = __webpack_require__("../../../../../src/modules/sales/src/containers/create-order-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_product_name_container_component__ = __webpack_require__("../../../../../src/modules/sales/src/containers/product-name-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__effects_sales_effects__ = __webpack_require__("../../../../../src/modules/sales/src/effects/sales.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__("../../../../../src/modules/sales/src/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducers__ = __webpack_require__("../../../../../src/modules/sales/src/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sales_api__ = __webpack_require__("../../../../../src/modules/sales/src/sales.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__containers_create_order_container_component__["a" /* CreateOrderContainerComponent */],
    __WEBPACK_IMPORTED_MODULE_5__containers_product_name_container_component__["a" /* ProductNameContainerComponent */]
];
var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule_1 = SalesModule;
    SalesModule.forRoot = function () {
        return {
            ngModule: SalesModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__sales_api__["a" /* SalesApi */]
            ]
        };
    };
    SalesModule = SalesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: COMPONENTS,
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* EStoreMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forFeature('sales', __WEBPACK_IMPORTED_MODULE_8__reducers__["c" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_6__effects_sales_effects__["a" /* SalesEffects */]]),
            ],
            exports: COMPONENTS,
        })
    ], SalesModule);
    return SalesModule;
    var SalesModule_1;
}());

//# sourceMappingURL=sales.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map