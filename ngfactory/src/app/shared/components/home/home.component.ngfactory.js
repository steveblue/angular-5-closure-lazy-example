/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "./home.component.css.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "./home.component";
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
export { RenderType_HomeComponent as RenderType_HomeComponent };
export function View_HomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 10, "div", [["class", "is--center"]], null, null, null, null, null)), (_l()(), i1.ɵted(null, ["\n    "])), (_l()(), i1.ɵeld(0, null, null, 7, "a", [["class", "app__icon"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(1), (_l()(), i1.ɵted(null, ["\n        "])), (_l()(), i1.ɵeld(0, null, null, 2, "img", [["src", "/assets/ng2-stealth.png"]], null, null, null, null, null)), i1.ɵdid(278528, null, 0, i3.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngClass: [0, "ngClass"] }, null), i1.ɵpod({ "is--active": 0, "is--inactive": 1 }), (_l()(), i1.ɵted(null, ["\n    "])), (_l()(), i1.ɵted(null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 4, 0, "lazy"); _ck(_v, 3, 0, currVal_2); var currVal_3 = _ck(_v, 8, 0, (_co.stealthMode === "active"), (_co.stealthMode === "inactive")); _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
export function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, "cmp-prefix1-app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(180224, null, 0, i4.HomeComponent, [], null, null)], null, null); }
var HomeComponentNgFactory = i1.ɵccf("cmp-prefix1-app-home", i4.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
export { HomeComponentNgFactory as HomeComponentNgFactory };