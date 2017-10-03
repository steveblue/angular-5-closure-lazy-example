# angular-5-closure-lazy-example
Reproduce an issue with lazyloading with closure compiler in angular 5.0.0-rc.0

To reproduce:

- $`npm install`
- $`java -jar node_modules/google-closure-compiler/compiler.jar --flagfile ./tmp/closure.lazy.conf --entry_point=./main.prod --entry_point=././ngfactory/src/app/shared/components/lazy/lazy.module.ngfactory --output_manifest=closure/manifest.MF --module_output_path_prefix=build/ "--module_wrapper=lazy.module.bundle:(self._S=self._S||[]).push((function(){%s})); //# sourceMappingURL=%basename%.map"`

Results in error with lazyloaded bundle. The bundle file (build/lazy.module.ngfactory.js) has no content, just the sourcemap the script is appending to it:

```
(self._S=self._S||[]).push((function(){})); //# sourceMappingURL=lazy.module.bundle.js.map

```

Using this conf for lazyloading a single module:

tmp/closure.lazy.conf

```
--compilation_level=ADVANCED_OPTIMIZATIONS
--language_in=ES6_STRICT
--language_out=ES5
--variable_renaming_report=closure/variable_renaming_report
--property_renaming_report=closure/property_renaming_report
--create_source_map=%outname%.map

--warning_level=QUIET
--dependency_mode=STRICT
--rewrite_polyfills=false
--module_resolution=node
--jscomp_off=checkVars

--externs closure.externs.js
--externs node_modules/zone.js/dist/zone_externs.js
--externs node_modules/@angular/core/src/testability/testability.externs.js

--js node_modules/rxjs/util/root.js
--js node_modules/rxjs/symbol/observable.js
--js node_modules/rxjs/symbol/rxSubscriber.js
--js node_modules/rxjs/util/isFunction.js
--js node_modules/rxjs/Observer.js
--js node_modules/rxjs/util/isObject.js
--js node_modules/rxjs/util/UnsubscriptionError.js
--js node_modules/rxjs/util/errorObject.js
--js node_modules/rxjs/util/isArray.js
--js node_modules/rxjs/util/tryCatch.js
--js node_modules/rxjs/Subscription.js
--js node_modules/rxjs/Subscriber.js
--js node_modules/rxjs/util/toSubscriber.js
--js node_modules/rxjs/Observable.js
--js node_modules/rxjs/util/ObjectUnsubscribedError.js
--js node_modules/rxjs/SubjectSubscription.js
--js node_modules/rxjs/Subject.js
--js node_modules/rxjs/BehaviorSubject.js
--js node_modules/rxjs/InnerSubscriber.js
--js node_modules/rxjs/Notification.js
--js node_modules/rxjs/OuterSubscriber.js
--js node_modules/rxjs/operator/observeOn.js
--js node_modules/rxjs/util/isPromise.js
--js node_modules/rxjs/util/isArrayLike.js
--js node_modules/rxjs/symbol/iterator.js
--js node_modules/rxjs/util/subscribeToResult.js
--js node_modules/rxjs/util/EmptyError.js
--js node_modules/rxjs/operator/first.js
--js node_modules/rxjs/util/isScheduler.js
--js node_modules/rxjs/observable/ScalarObservable.js
--js node_modules/rxjs/observable/EmptyObservable.js
--js node_modules/rxjs/observable/ArrayObservable.js
--js node_modules/rxjs/operator/map.js
--js node_modules/rxjs/operator/mergeAll.js
--js node_modules/rxjs/operator/merge.js
--js node_modules/rxjs/observable/ConnectableObservable.js
--js node_modules/rxjs/operator/multicast.js
--js node_modules/rxjs/operator/mergeMap.js
--js node_modules/rxjs/observable/of.js
--js node_modules/rxjs/observable/PromiseObservable.js
--js node_modules/rxjs/observable/ArrayLikeObservable.js
--js node_modules/rxjs/observable/IteratorObservable.js
--js node_modules/rxjs/observable/FromObservable.js
--js node_modules/rxjs/operator/every.js
--js node_modules/rxjs/operator/share.js
--js node_modules/rxjs/operator/concatMap.js
--js node_modules/rxjs/operator/filter.js
--js node_modules/rxjs/operator/catch.js
--js node_modules/rxjs/operator/concatAll.js
--js node_modules/rxjs/operator/reduce.js
--js node_modules/rxjs/observable/fromPromise.js
--js node_modules/rxjs/operator/last.js
--js node_modules/rxjs/observable/from.js
--js node_modules/rxjs/observable/merge.js
--js node_modules/@angular/core/package.json
--js node_modules/@angular/core/esm2015/core.js
--js node_modules/@angular/core/core.ngsummary.js
--js node_modules/@angular/common/package.json
--js node_modules/@angular/common/esm2015/common.js
--js node_modules/@angular/common/common.ngsummary.js
--js node_modules/@angular/platform-browser/package.json
--js node_modules/@angular/platform-browser/esm2015/platform-browser.js
--js node_modules/@angular/platform-browser/platform-browser.ngsummary.js
--js node_modules/@angular/router/package.json
--js node_modules/@angular/router/esm2015/router.js
--js node_modules/@angular/router/router.ngsummary.js
--module=vendor:66

--js ngfactory/src/app/app.component.css.shim.ngstyle.js
--js ngfactory/src/app/app.component.js
--js ngfactory/src/app/app.component.ngfactory.js
--js ngfactory/src/app/shared/components/home/home.component.js
--js ngfactory/src/app/app.routes.js
--js ngfactory/src/app/shared/components/home/home.module.js
--js ngfactory/src/app/app.module.js
--js ngfactory/src/app/shared/components/home/home.component.css.shim.ngstyle.js
--js ngfactory/src/app/shared/components/home/home.component.ngfactory.js
--js ngfactory/src/app/app.module.ngfactory.js
--js main.prod.js
--module=bundle:11:vendor

--js ngfactory/src/app/shared/components/lazy/lazy.component.css.shim.ngstyle.js
--js ngfactory/src/app/shared/components/lazy/lazy.component.js
--js ngfactory/src/app/shared/components/lazy/lazy.component.ngfactory.js
--js ngfactory/src/app/shared/components/lazy/lazy.routes.js
--js ngfactory/src/app/shared/components/lazy/lazy.module.js
--js ngfactory/src/app/shared/components/lazy/lazy.module.ngfactory.js
--module=lazy.module.bundle:6:bundle

--package_json_entry_names es2015
--process_common_js_modules
```

In @angular 4.x this works, but with 5.0.0-rc.0 and the closure compiler fork `--js_module_root` can no longer be specified:


```
--compilation_level=ADVANCED_OPTIMIZATIONS
--language_out=ES5
--variable_renaming_report=closure/variable_renaming_report
--property_renaming_report=closure/property_renaming_report
--create_source_map=%outname%.map

--warning_level=QUIET
--dependency_mode=STRICT
--rewrite_polyfills=false
--module_resolution=node

closure.externs.js
node_modules/zone.js/dist/zone_externs.js
node_modules/@angular/core/src/testability/testability.externs.js

--process_common_js_modules

--js_module_root=node_modules/@angular/core
--js_module_root=node_modules/@angular/common
--js_module_root=node_modules/@angular/platform-browser
--js_module_root=node_modules/@angular/forms
--js_module_root=node_modules/@angular/http
--js_module_root=node_modules/@angular/router
--js_module_root=node_modules/@angular/animations
--js_module_root=node_modules/@angular/animations/browser
--js_module_root=node_modules/@angular/platform-browser/animations

node_modules/rxjs/util/root.js
node_modules/rxjs/symbol/observable.js
node_modules/rxjs/symbol/rxSubscriber.js
node_modules/rxjs/util/isFunction.js
node_modules/rxjs/Observer.js
node_modules/rxjs/util/isObject.js
node_modules/rxjs/util/UnsubscriptionError.js
node_modules/rxjs/util/errorObject.js
node_modules/rxjs/util/isArray.js
node_modules/rxjs/util/tryCatch.js
node_modules/rxjs/Subscription.js
node_modules/rxjs/Subscriber.js
node_modules/rxjs/util/toSubscriber.js
node_modules/rxjs/Observable.js
node_modules/rxjs/util/ObjectUnsubscribedError.js
node_modules/rxjs/SubjectSubscription.js
node_modules/rxjs/Subject.js
node_modules/rxjs/BehaviorSubject.js
node_modules/rxjs/InnerSubscriber.js
node_modules/rxjs/Notification.js
node_modules/rxjs/OuterSubscriber.js
node_modules/rxjs/operator/observeOn.js
node_modules/rxjs/util/isPromise.js
node_modules/rxjs/util/isArrayLike.js
node_modules/rxjs/symbol/iterator.js
node_modules/rxjs/util/subscribeToResult.js
node_modules/rxjs/util/EmptyError.js
node_modules/rxjs/operator/first.js
node_modules/rxjs/util/isScheduler.js
node_modules/rxjs/observable/ScalarObservable.js
node_modules/rxjs/observable/EmptyObservable.js
node_modules/rxjs/observable/ArrayObservable.js
node_modules/rxjs/observable/ForkJoinObservable.js
node_modules/rxjs/observable/forkJoin.js
node_modules/rxjs/operator/map.js
node_modules/rxjs/operator/mergeAll.js
node_modules/rxjs/operator/merge.js
node_modules/rxjs/observable/ConnectableObservable.js
node_modules/rxjs/operator/multicast.js
node_modules/rxjs/operator/mergeMap.js
node_modules/rxjs/observable/of.js
node_modules/rxjs/observable/PromiseObservable.js
node_modules/rxjs/observable/ArrayLikeObservable.js
node_modules/rxjs/observable/IteratorObservable.js
node_modules/rxjs/observable/FromObservable.js
node_modules/rxjs/operator/every.js
node_modules/rxjs/operator/share.js
node_modules/rxjs/operator/concatMap.js
node_modules/rxjs/operator/filter.js
node_modules/rxjs/operator/catch.js
node_modules/rxjs/operator/concatAll.js
node_modules/rxjs/operator/reduce.js
node_modules/rxjs/observable/fromPromise.js
node_modules/rxjs/operator/last.js
node_modules/rxjs/observable/from.js
node_modules/rxjs/observable/merge.js
node_modules/@angular/core/@angular/core.js
node_modules/@angular/common/@angular/common.js
node_modules/@angular/platform-browser/@angular/platform-browser.js
node_modules/@angular/router/@angular/router.js
node_modules/@angular/http/@angular/http.js
node_modules/@angular/forms/@angular/forms.js
node_modules/@angular/animations/@angular/animations.js
node_modules/@angular/animations/@angular/animations/browser.js
node_modules/@angular/platform-browser/@angular/platform-browser/animations.js
--module=vendor:68

ngfactory/src/app/app.component.css.shim.ngstyle.js
ngfactory/src/app/app.component.js
ngfactory/src/app/app.component.ngfactory.js
ngfactory/src/app/shared/components/home/home.component.js
ngfactory/src/app/app.routes.js
ngfactory/src/app/shared/components/home/home.module.js
ngfactory/src/app/app.module.js
ngfactory/src/app/shared/components/home/home.component.css.shim.ngstyle.js
ngfactory/src/app/shared/components/home/home.component.ngfactory.js
ngfactory/src/app/app.module.ngfactory.js
main.prod.js
--module=bundle:11:vendor

ngfactory/src/app/shared/components/lazy/lazy.component.css.shim.ngstyle.js
ngfactory/src/app/shared/components/lazy/lazy.component.js
ngfactory/src/app/shared/components/lazy/lazy.component.ngfactory.js
ngfactory/src/app/shared/components/lazy/lazy.routes.js
ngfactory/src/app/shared/components/lazy/lazy.module.js
ngfactory/src/app/shared/components/lazy/lazy.module.ngfactory.js
--module=lazy.module.bundle:6:bundle

```
