/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LazyComponent } from "./lazy.component";
import { routing } from "./lazy.routes";
export class LazyModule {
}
LazyModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule,
                    CommonModule,
                    routing],
                declarations: [LazyComponent],
                exports: [LazyComponent]
            },] },
];
/** @nocollapse */
LazyModule.ctorParameters = () => [];
function LazyModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LazyModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LazyModule.ctorParameters;
}
