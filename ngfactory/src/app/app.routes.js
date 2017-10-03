/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
const /** @type {?} */ routes = [
    { path: '', component: HomeComponent },
    { path: 'lazy', loadChildren: 'shared/components/lazy/lazy.module#LazyModule' }
];
export const /** @type {?} */ routing = RouterModule.forRoot(routes);
