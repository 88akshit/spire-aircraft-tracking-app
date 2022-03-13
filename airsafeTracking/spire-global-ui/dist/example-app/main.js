"use strict";
(self["webpackChunkexample_app"] = self["webpackChunkexample_app"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _maps_geo_map_type_scatter_symbol_series_map_type_scatter_symbol_series_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps/geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component */ 1838);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "navbar", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "https://camo.githubusercontent.com/3569ff448cad7c757e568aa595bae8afaf1e3075412dc08bab976eaa2a51f96b/68747470733a2f2f6175746f6d617465642d656d61696c732d7075626c69632d7265736f75726365732e73332e65752d63656e7472616c2d312e616d617a6f6e6177732e636f6d2f4c4f474f5f53706972655f4176696174696f6e5f436f6c6f722e706e67", "alt", "", "width", "400", "height", "120", 1, "d-inline-block", "align-text-top", "nav-icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-map-type-scatter-symbol-series");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_maps_geo_map_type_scatter_symbol_series_map_type_scatter_symbol_series_component__WEBPACK_IMPORTED_MODULE_0__.MapTypeScatterSymbolSeriesComponent], styles: [".nav-icon[_ngcontent-%COMP%] {\n  padding-top: 63px;\n  height: 120px;\n}\n\n.nav-heading[_ngcontent-%COMP%] {\n  align-self: center;\n  padding-right: 1496px;\n  padding-top: 27px;\n  font-size: 21px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pY29ue1xuICAgIHBhZGRpbmctdG9wOiA2M3B4O1xuICAgIGhlaWdodDogMTIwcHg7XG59XG4ubmF2LWhlYWRpbmd7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE0OTZweDtcbiAgICBwYWRkaW5nLXRvcDogMjdweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _maps_geo_map_type_scatter_symbol_series_map_type_scatter_symbol_series_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps/geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component */ 1838);
/* harmony import */ var igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! igniteui-angular-maps */ 8919);
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! igniteui-angular-charts */ 4873);
/* harmony import */ var _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-down/count-down.component */ 8279);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 833);
/* harmony import */ var _tracking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracking-service */ 6612);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_tracking_service__WEBPACK_IMPORTED_MODULE_3__.TrackingService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__.IgxGeographicMapModule,
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxDataChartInteractivityModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _maps_geo_map_type_scatter_symbol_series_map_type_scatter_symbol_series_component__WEBPACK_IMPORTED_MODULE_1__.MapTypeScatterSymbolSeriesComponent,
        _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_2__.CountDownComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__.IgxGeographicMapModule,
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxDataChartInteractivityModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule] }); })();


/***/ }),

/***/ 8279:
/*!****************************************************!*\
  !*** ./src/app/count-down/count-down.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountDownComponent": () => (/* binding */ CountDownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tracking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tracking-service */ 6612);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 833);







function CountDownComponent_mat_card_actions_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.minutesToDday, " Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.secondsToDday, " Seconds");
} }
function CountDownComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-divider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Processing Data Please wait");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
} }
class CountDownComponent {
    constructor(trackingService) {
        this.trackingService = trackingService;
        this.dateNow = new Date();
        this.dDay = new Date('Feb 26 2022 13:00:00');
        this.milliSecondsInASecond = 1000;
        this.hoursInADay = 24;
        this.minutesInAnHour = 60;
        this.SecondsInAMinute = 60;
    }
    ngOnChanges(changes) {
        this.allocateTimeUnits(changes['timeDifference'].currentValue);
    }
    ngOnInit() {
    }
    allocateTimeUnits(timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CountDownComponent.ɵfac = function CountDownComponent_Factory(t) { return new (t || CountDownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tracking_service__WEBPACK_IMPORTED_MODULE_0__.TrackingService)); };
CountDownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CountDownComponent, selectors: [["app-count-down"]], inputs: { timeDifference: "timeDifference" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 2, consts: [[1, "timer"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["mode", "indeterminate"], ["mat-button", ""], ["inset", ""]], template: function CountDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Next Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CountDownComponent_mat_card_actions_3_Template, 5, 2, "mat-card-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CountDownComponent_ng_template_4_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.timeDifference > 0)("ngIfElse", _r1);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardFooter, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar], styles: [".timer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 1.4em;\n  letter-spacing: -1px;\n  padding-top: 50px;\n}\n\n.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0 3px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50LWRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFFSiIsImZpbGUiOiJjb3VudC1kb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbiAgLnRpbWVyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogMCAzcHggMCAxNXB4O1xuICB9XG5cbiJdfQ== */"] });


/***/ }),

/***/ 1838:
/*!*****************************************************************************************************!*\
  !*** ./src/app/maps/geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapTypeScatterSymbolSeriesComponent": () => (/* binding */ MapTypeScatterSymbolSeriesComponent)
/* harmony export */ });
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! igniteui-angular-charts */ 4873);
/* harmony import */ var igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular-maps */ 8919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_tracking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/tracking-service */ 6612);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../count-down/count-down.component */ 8279);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











const _c0 = ["map"];
const _c1 = ["template"];
function MapTypeScatterSymbolSeriesComponent_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function MapTypeScatterSymbolSeriesComponent_ng_template_6_ng_template_5_Template(rf, ctx) { }
function MapTypeScatterSymbolSeriesComponent_ng_template_6_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
} }
function MapTypeScatterSymbolSeriesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MapTypeScatterSymbolSeriesComponent_ng_template_6_div_1_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MapTypeScatterSymbolSeriesComponent_ng_template_6_ng_template_5_Template, 0, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MapTypeScatterSymbolSeriesComponent_ng_template_6_ng_template_7_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const series_r4 = ctx.series;
    const item_r5 = ctx.item;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r5.org)("ngIfThen", _r7)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", series_r4.brush);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.name);
} }
function MapTypeScatterSymbolSeriesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aircraft Tracking Stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-divider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Total Number of Aircraft");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Average Number of Target Updates Per Aircraft");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Aircraft with Least Target Updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Aircraft with Most Target Updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.totalNumberOfAircraft);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.averageTargetUpdatesPerAircraft);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.leastTargetUpdatesAircraft);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.mostTargetUpdatesAircraft);
} }
class MapTypeScatterSymbolSeriesComponent {
    constructor(trackingService) {
        this.trackingService = trackingService;
        this.dDay = new Date('Feb 26 2022 21:00:00');
        this.timeDifference = 0;
        this.totalNumberOfAircraft = 0;
        this.leastTargetUpdatesAircraft = '';
        this.mostTargetUpdatesAircraft = '';
        this.averageTargetUpdatesPerAircraft = 0;
        this.updatesAvailable = false;
        this.sendRequest = false;
        this.symbolSeries = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_3__.IgxGeographicSymbolSeriesComponent();
        this.symbolMaxSeries = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_3__.IgxGeographicSymbolSeriesComponent();
        this.symbolMinSeries = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_3__.IgxGeographicSymbolSeriesComponent();
    }
    ngOnInit() {
        this.trackingService.getTrackingData().subscribe((data) => {
            console.log(data);
            if (data['updates_available']) {
                this.updatesAvailable = true;
                this.totalNumberOfAircraft = data['details'].total_number_of_aircrafts;
                let minAircraft = data['details'].minimum_target_updates_aircraft;
                this.leastTargetUpdatesAircraft = minAircraft[0]['name'];
                let maxAircraft = data['details'].maximum_target_updates_aircraft;
                this.mostTargetUpdatesAircraft = maxAircraft[0]['name'];
                this.averageTargetUpdatesPerAircraft = data['details'].average_target_updates_per_aircraft;
                this.addSeriesWith(data['details'].aircraft_details, "rgb(32, 146, 252)", this.symbolSeries);
                this.addSeriesWith(data['details'].minimum_target_updates_aircraft, "red", this.symbolMinSeries);
                this.addSeriesWith(data['details'].maximum_target_updates_aircraft, "green", this.symbolMaxSeries);
            }
            this.dDay = new Date(data['next_update']);
            console.log(this.dDay.toUTCString());
        }, error => {
            this.subscription.unsubscribe();
        });
    }
    getTimeDifference() {
        let currentTime = new Date().getTime();
        this.timeDifference = this.dDay.getTime() - new Date().getTime();
        if (this.timeDifference < 0 && !this.sendRequest) {
            this.sendRequest = true;
            this.trackingService.getTrackingData().subscribe((data) => {
                this.sendRequest = true;
                if (data['updates_available']) {
                    this.sendRequest = false;
                    this.updatesAvailable = true;
                    console.log(data['next_update']);
                    console.log(data);
                    console.log(data['details'].total_number_of_aircrafts);
                    this.totalNumberOfAircraft = data['details'].total_number_of_aircrafts;
                    let minAircraft = data['details'].minimum_target_updates_aircraft;
                    this.leastTargetUpdatesAircraft = minAircraft[0]['name'];
                    let maxAircraft = data['details'].maximum_target_updates_aircraft;
                    this.mostTargetUpdatesAircraft = maxAircraft[0]['name'];
                    this.averageTargetUpdatesPerAircraft = data['details'].average_target_updates_per_aircraft;
                    this.addSeriesWith(data['details'].aircraft_details, "rgb(32, 146, 252)", this.symbolSeries);
                    this.addSeriesWith(data['details'].minimum_target_updates_aircraft, "red", this.symbolMinSeries);
                    this.addSeriesWith(data['details'].maximum_target_updates_aircraft, "green", this.symbolMaxSeries);
                }
                this.dDay = new Date(data['next_update']);
                console.log("Response : " + this.dDay.toUTCString());
            }, error => {
                this.subscription.unsubscribe();
            });
        }
    }
    ngAfterViewInit() {
        this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000)
            .subscribe(x => {
            this.getTimeDifference();
        });
    }
    addSeriesWith(locations, brush, series) {
        series.dataSource = locations;
        series.markerType = igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__.MarkerType.Circle;
        series.latitudeMemberPath = "lat";
        series.longitudeMemberPath = "lon";
        series.markerBrush = "White";
        series.markerOutline = brush;
        series.tooltipTemplate = this.tooltip;
        this.map.series.add(series);
    }
}
MapTypeScatterSymbolSeriesComponent.ɵfac = function MapTypeScatterSymbolSeriesComponent_Factory(t) { return new (t || MapTypeScatterSymbolSeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_tracking_service__WEBPACK_IMPORTED_MODULE_0__.TrackingService)); };
MapTypeScatterSymbolSeriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MapTypeScatterSymbolSeriesComponent, selectors: [["app-map-type-scatter-symbol-series"]], viewQuery: function MapTypeScatterSymbolSeriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, decls: 13, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-sm-8"], [1, "container", "sample"], ["width", "1300px", "height", "800px", "zoomable", "true"], ["map", ""], ["template", ""], [1, "col-sm-4"], [1, "count-down"], [3, "timeDifference"], ["class", "detail-card", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["hasOrg", ""], ["notOrg", ""], [1, "detail-card"], [1, "timer"], ["inset", ""], [1, "details-data"], ["mat-button", "", "color", "primary"]], template: function MapTypeScatterSymbolSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "igx-geographic-map", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MapTypeScatterSymbolSeriesComponent_ng_template_6_Template, 9, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-count-down", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MapTypeScatterSymbolSeriesComponent_div_12_Template, 27, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("timeDifference", ctx.timeDifference);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.updatesAvailable);
    } }, directives: [igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_3__.IgxGeographicMapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_1__.CountDownComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton], styles: [".count-down[_ngcontent-%COMP%] {\n  padding-right: 34px;\n  padding-top: 70px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.details-data[_ngcontent-%COMP%] {\n  font-size: 10px;\n  display: inline-flex;\n  padding-right: 43px;\n  padding-bottom: 10px;\n}\n.timer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Arial, sans-serif;\n  font-size: 1.4em;\n  letter-spacing: -1px;\n  padding-top: 50px;\n}\n.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0 3px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC10eXBlLXNjYXR0ZXItc3ltYm9sLXNlcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUE7RUFDSSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBRUoiLCJmaWxlIjoibWFwLXR5cGUtc2NhdHRlci1zeW1ib2wtc2VyaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVzIGFyZSBsb2FkZWQgdGhlIFNoYXJlZCBDU1MgZmlsZSBsb2NhdGVkIGF0OlxyXG5odHRwczovL3N0YXRpYy5pbmZyYWdpc3RpY3MuY29tL3hwbGF0Zm9ybS9jc3Mvc2FtcGxlcy9cclxuKi9cclxuLmNvdW50LWRvd257XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAuZGV0YWlscy1kYXRhe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0M3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGltZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC50aW1lciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiAwIDNweCAwIDE1cHg7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ 6612:
/*!*************************************!*\
  !*** ./src/app/tracking-service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingService": () => (/* binding */ TrackingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class TrackingService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)('Something bad happened; please try again later.');
    }
    getTrackingData() {
        let endpoint = "http://127.0.0.1:8000/v1/targets/aircrafts";
        return this.http.get(endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
}
TrackingService.ɵfac = function TrackingService_Factory(t) { return new (t || TrackingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TrackingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TrackingService, factory: TrackingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 7435);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/object */ 7156);
/* harmony import */ var core_js_es7_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/reflect */ 4100);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es7/reflect */ 2294);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hammerjs_hammer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs/hammer */ 5977);
/* harmony import */ var hammerjs_hammer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs_hammer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js */ 4924);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_4__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
* BROWSER POLYFILLS
*/
 // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */

/* Evergreen browsers require these. */
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
 // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */

 // Included with Angular CLI.
/***************************************************************************************************
 * @angular/animations polyfill
 */
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import "intl";  // Run `npm install --save intl`.
// import "intl/locale-data/jsonp/de";
/**
 * Need to import at least one locale-data with intl.
 */
// import "intl/locale-data/jsonp/en";


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map