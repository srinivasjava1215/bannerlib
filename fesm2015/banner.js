import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/banner.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerService {
    constructor() { }
}
BannerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
BannerService.ctorParameters = () => [];
/** @nocollapse */ BannerService.ngInjectableDef = defineInjectable({ factory: function BannerService_Factory() { return new BannerService(); }, token: BannerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/banner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-banner',
                template: `
    <p>
      banner works!
    </p>
  `
            }] }
];
/** @nocollapse */
BannerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/banner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BannerModule {
}
BannerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BannerComponent],
                imports: [],
                exports: [BannerComponent]
            },] }
];

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