/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class HomeComponent {
    constructor() {
        this.stealthMode = 'active';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stealthMode = 'inactive';
    }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmp-prefix1-app-home',
                templateUrl: 'home.component.html',
                styleUrls: ['home.component.css']
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [];
function HomeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HomeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HomeComponent.ctorParameters;
    /** @type {?} */
    HomeComponent.prototype.stealthMode;
}
