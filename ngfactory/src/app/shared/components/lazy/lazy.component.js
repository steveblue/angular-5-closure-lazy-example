/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
export class LazyComponent {
    constructor() {
        this.angularMode = 'active';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.angularMode = 'inactive';
    }
}
LazyComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmp-prefix1-app-lazy',
                templateUrl: 'lazy.component.html',
                styleUrls: ['lazy.component.css']
            },] },
];
/** @nocollapse */
LazyComponent.ctorParameters = () => [];
function LazyComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LazyComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LazyComponent.ctorParameters;
    /** @type {?} */
    LazyComponent.prototype.angularMode;
}
