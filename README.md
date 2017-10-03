# angular-5-closure-lazy-example
Reproduce an issue with lazyloading with closure compiler in angular 5.0.0-rc.0

To reproduce:

$`npm install`
$`java -jar node_modules/google-closure-compiler/compiler.jar --flagfile ./tmp/closure.lazy.conf --entry_point=./main.prod --entry_point=././ngfactory/src/app/shared/components/lazy/lazy.module.ngfactory --output_manifest=closure/manifest.MF --module_output_path_prefix=build/ "--module_wrapper=lazy.module.bundle:(self._S=self._S||[]).push((function(){%s})); //# sourceMappingURL=%basename%.map"`

Results in error with lazyloaded bundle. The bundle file (build/lazy.module.ngfactory.js) has no content:

```
(self._S=self._S||[]).push((function(){})); //# sourceMappingURL=lazy.module.bundle.js.map

```

A similar conf works in 4.4.4 but fails in 5.0.0-rc.0.

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
