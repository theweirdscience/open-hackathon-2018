(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2>User Profile</h2>\n  <app-profile></app-profile>\n</section>\n\n<section>\n  <h2> <mat-icon> timeline </mat-icon> Subscriptions </h2>\n  <app-subscription></app-subscription>\n</section>\n\n<section>\n  <h2> <mat-icon> apps </mat-icon> Integration </h2>\n  <app-integration></app-integration>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Digital identity protocol';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _directive_edit_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/edit.directive */ "./src/app/directive/edit.directive.ts");
/* harmony import */ var _component_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/subscription/subscription.component */ "./src/app/component/subscription/subscription.component.ts");
/* harmony import */ var _component_integration_integration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/integration/integration.component */ "./src/app/component/integration/integration.component.ts");
/* harmony import */ var _service_encryption_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/encryption.service */ "./src/app/service/encryption.service.ts");
/* harmony import */ var _component_integration_integration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/integration/integration.service */ "./src/app/component/integration/integration.service.ts");
/* harmony import */ var _component_profile_profile_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/profile/profile-dialog.component */ "./src/app/component/profile/profile-dialog.component.ts");
/* harmony import */ var _component_integration_integration_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/integration/integration-dialog.component */ "./src/app/component/integration/integration-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _directive_edit_directive__WEBPACK_IMPORTED_MODULE_6__["EditDirective"],
                _component_profile_profile_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProfileDialogComponent"],
                _component_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_7__["SubscriptionComponent"],
                _component_integration_integration_dialog_component__WEBPACK_IMPORTED_MODULE_12__["IntegrationDialogComponent"],
                _component_integration_integration_component__WEBPACK_IMPORTED_MODULE_8__["IntegrationComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            entryComponents: [_component_profile_profile_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProfileDialogComponent"], _component_integration_integration_dialog_component__WEBPACK_IMPORTED_MODULE_12__["IntegrationDialogComponent"]],
            providers: [_service_encryption_service__WEBPACK_IMPORTED_MODULE_9__["EncryptionService"], _component_integration_integration_service__WEBPACK_IMPORTED_MODULE_10__["IntegrationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/integration/integration-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/component/integration/integration-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4> Available integrations </h4>\n<div *ngFor=\"let integration of integrations | async\">\n    {{integration.label}} <mat-slide-toggle (change)=\"setSelected(integration, $event.checked)\" [color]=\"primary\"></mat-slide-toggle>\n</div>\n"

/***/ }),

/***/ "./src/app/component/integration/integration-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/integration/integration-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: IntegrationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationDialogComponent", function() { return IntegrationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integration.service */ "./src/app/component/integration/integration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var IntegrationDialogComponent = /** @class */ (function () {
    function IntegrationDialogComponent(integrationService, data) {
        this.integrationService = integrationService;
        this.data = data;
        this.integrations = this.integrationService.intergrationsPossibilities;
    }
    IntegrationDialogComponent.prototype.setSelected = function (thingy, stuff) {
        var _this = this;
        if (stuff) {
            this.integrationService.selectedServices.push(thingy);
        }
        else {
            this.integrationService.selectedServices
                .forEach(function (otherstuff, index) {
                if (thingy && otherstuff && otherstuff.label === thingy.label) {
                    _this.integrationService.selectedServices.splice(index, 1);
                }
            });
        }
    };
    IntegrationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./integration-dialog.component.html */ "./src/app/component/integration/integration-dialog.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_integration_service__WEBPACK_IMPORTED_MODULE_2__["IntegrationService"], Object])
    ], IntegrationDialogComponent);
    return IntegrationDialogComponent;
}());



/***/ }),

/***/ "./src/app/component/integration/integration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/integration/integration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\n  <mat-list-item *ngFor=\"let integration of chosenSelected\" role=\"listitem\">\n      <img width=\"40\" style=\"padding-right: 20px\" [src]=\"integration.image\" alt=\"\">{{ integration.label }}\n  </mat-list-item>\n</mat-list>\n\n<button style=\"margin-top: 20px;\" mat-raised-button (click)=\"openDialog()\">+</button>\n"

/***/ }),

/***/ "./src/app/component/integration/integration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/integration/integration.component.ts ***!
  \****************************************************************/
/*! exports provided: IntegrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationComponent", function() { return IntegrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _integration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integration.service */ "./src/app/component/integration/integration.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _integration_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integration-dialog.component */ "./src/app/component/integration/integration-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntegrationComponent = /** @class */ (function () {
    function IntegrationComponent(integrationService, dialog) {
        this.integrationService = integrationService;
        this.dialog = dialog;
        this.chosenSelected = this.integrationService.selectedServices;
    }
    IntegrationComponent.prototype.openDialog = function () {
        this.dialog.open(_integration_dialog_component__WEBPACK_IMPORTED_MODULE_3__["IntegrationDialogComponent"], {
            width: '400px',
            data: { name: 'some name', animal: 'tiger' }
        });
    };
    IntegrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-integration',
            template: __webpack_require__(/*! ./integration.component.html */ "./src/app/component/integration/integration.component.html")
        }),
        __metadata("design:paramtypes", [_integration_service__WEBPACK_IMPORTED_MODULE_1__["IntegrationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], IntegrationComponent);
    return IntegrationComponent;
}());



/***/ }),

/***/ "./src/app/component/integration/integration.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/integration/integration.service.ts ***!
  \**************************************************************/
/*! exports provided: IntegrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationService", function() { return IntegrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntegrationService = /** @class */ (function () {
    function IntegrationService() {
        this.selectedServices = [];
        this.integrations = [
            {
                service: 'post_nl',
                label: 'Post NL',
                image: 'https://seeklogo.com/images/P/postnl-logo-4DA6C08E55-seeklogo.com.png',
                url: 'post nl url'
            },
            {
                service: 'politie',
                label: 'Politie',
                image: 'https://seeklogo.com/images/P/Politie-logo-269952DA5A-seeklogo.com.png',
                url: 'politie url'
            },
            {
                service: 'kadester',
                label: 'Kadester',
                image: 'https://yt3.ggpht.com/a-/AJLlDp1aFV3E5R1dHen8Vph5n47AZc8Ujl5hglhF0Q=s900-mo-c-c0xffffffff-rj-k-no',
                url: 'kadester url'
            }
        ];
        this.intergrationsPossibilities = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.integrations);
    }
    IntegrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], IntegrationService);
    return IntegrationService;
}());



/***/ }),

/***/ "./src/app/component/profile/profile-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/profile/profile-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> Edit user information </h3>\n<div class=\"example-container\">\n\n  <mat-form-field>\n    <input matInput placeholder=\"Firstname\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Lastname\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Address\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"City\">\n  </mat-form-field>\n\n  <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/component/profile/profile-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/profile/profile-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDialogComponent", function() { return ProfileDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProfileDialogComponent = /** @class */ (function () {
    function ProfileDialogComponent(data) {
        this.data = data;
    }
    ProfileDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./profile-dialog.component.html */ "./src/app/component/profile/profile-dialog.component.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ProfileDialogComponent);
    return ProfileDialogComponent;
}());



/***/ }),

/***/ "./src/app/component/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n\n  <img class=\"big-burd\" src=\"https://cdn.shopify.com/s/files/1/1291/5963/products/B00GSYZTUI.01-A2PJJEAW2GV0DY.MAIN._SS1000_SCRMZZZZZZZ_large.jpeg?v=1466143362\"\n  />\n\n  <mat-list role=\"list\">\n    <button mat-button (click)=\"openDialog()\">\n      <mat-icon> edit </mat-icon>\n    </button>\n    <mat-list-item role=\"listitem\"> Firstname: Big </mat-list-item>\n    <mat-list-item role=\"listitem\"> Lastname: Bird </mat-list-item>\n    <mat-list-item role=\"listitem\"> Address: Sesame Street </mat-list-item>\n    <mat-list-item role=\"listitem\"> City: Manhatten </mat-list-item>\n  </mat-list>\n\n</div>\n"

/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/encryption.service */ "./src/app/service/encryption.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _profile_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-dialog.component */ "./src/app/component/profile/profile-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(rsa, dialog) {
        this.rsa = rsa;
        this.dialog = dialog;
    }
    ProfileComponent.prototype.openDialog = function () {
        this.dialog.open(_profile_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProfileDialogComponent"], {
            width: '400px',
            data: { name: 'some name', animal: 'tiger' }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/component/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [_service_encryption_service__WEBPACK_IMPORTED_MODULE_1__["EncryptionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/component/subscription/subscription.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/subscription/subscription.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\n  <mat-list-item *ngFor=\"let integration of chosenSelected\" role=\"listitem\">\n    <img width=\"40\" style=\"padding-right: 20px\" [src]=\"integration.image\" alt=\"\">{{ integration.label }}\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/component/subscription/subscription.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/subscription/subscription.component.ts ***!
  \******************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _integration_integration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../integration/integration.service */ "./src/app/component/integration/integration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(integrationService) {
        this.integrationService = integrationService;
        this.chosenSelected = this.integrationService.selectedServices;
    }
    SubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.component.html */ "./src/app/component/subscription/subscription.component.html")
        }),
        __metadata("design:paramtypes", [_integration_integration_service__WEBPACK_IMPORTED_MODULE_1__["IntegrationService"]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/directive/edit.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/directive/edit.directive.ts ***!
  \*********************************************/
/*! exports provided: EditDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDirective", function() { return EditDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditDirective = /** @class */ (function () {
    function EditDirective() {
    }
    EditDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appEdit]'
        }),
        __metadata("design:paramtypes", [])
    ], EditDirective);
    return EditDirective;
}());



/***/ }),

/***/ "./src/app/service/encryption.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/encryption.service.ts ***!
  \***********************************************/
/*! exports provided: EncryptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionService", function() { return EncryptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EncryptionService = /** @class */ (function () {
    function EncryptionService() {
        var somePassphrase = 'The Moon is a Harsh Mistress.';
        var privateKey = cryptico.generateRSAKey(somePassphrase, 512);
        var publicKey = cryptico.publicKeyString(privateKey);
        console.log(publicKey);
    }
    EncryptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EncryptionService);
    return EncryptionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oscarlodriguez/go/src/github.com/theweirdscience/open-hackathon-2018/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map