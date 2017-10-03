/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { routing } from "./app.routes";
import { HomeModule } from "./shared/components/home/home.module";
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule,
                    CommonModule,
                    HomeModule,
                    routing],
                declarations: [AppComponent],
                bootstrap: [AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = () => [];
function AppModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppModule.ctorParameters;
}
