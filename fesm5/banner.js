import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/banner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BannerService = /** @class */ (function () {
    function BannerService() {
    }
    BannerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    BannerService.ctorParameters = function () { return []; };
    /** @nocollapse */ BannerService.ngInjectableDef = defineInjectable({ factory: function BannerService_Factory() { return new BannerService(); }, token: BannerService, providedIn: "root" });
    return BannerService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/banner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    /**
     * @return {?}
     */
    BannerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BannerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-banner',
                    template: "\n    <p>\n      banner works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    BannerComponent.ctorParameters = function () { return []; };
    return BannerComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/banner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BannerComponent],
                    imports: [],
                    exports: [BannerComponent]
                },] }
    ];
    return BannerModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: banner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BannerService, BannerComponent, BannerModule };

//# sourceMappingURL=banner.js.map