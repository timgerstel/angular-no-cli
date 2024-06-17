import * as __WEBPACK_EXTERNAL_MODULE__angular_core_bcead0df__ from "@angular/core";
/******/ var __webpack_modules__ = ({

/***/ "./src/plugin/plugin.component.ts":
/*!****************************************!*\
  !*** ./src/plugin/plugin.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginComponent: () => (/* binding */ PluginComponent)
/* harmony export */ });
/* harmony import */ var _subcomponent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcomponent.component */ "./src/plugin/subcomponent.component.ts");
/* harmony import */ var _shared_inject_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/inject-resources */ "./src/shared/inject-resources.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
let PluginComponent=/*#__PURE__*/(()=>{class PluginComponent{testDef;title='This is a plugin';identifier;constructor(testDef){this.testDef=testDef;this.identifier=this.testDef.getIdentifier();console.log('testDef=',this.testDef);}static ɵfac=function PluginComponent_Factory(t){return new(t||PluginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_inject_resources__WEBPACK_IMPORTED_MODULE_1__.Angular2InjectionTokens.PLUGIN_DEFINITION));};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({type:PluginComponent,selectors:[["app-plugin"]],standalone:true,features:[_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],decls:10,vars:1,consts:[[2,"background-color","lightblue"],[1,"pluginId"],[2,"color","black","background-color","white"]],template:function PluginComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0,"main",0);_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1,"This is a plugin");_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2,"div");_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3,"Styles work, too");_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4,"div",1);_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6,"p",2);_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7,"Here is my sub-component content:");_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8,"br")(9,"sub-component");_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Plugin was given injectable pluginDefinition with ID=",ctx.identifier,"");}},dependencies:[_subcomponent_component__WEBPACK_IMPORTED_MODULE_0__.PluginSubComponent],styles:["[_nghost-%COMP%] {\n  width: 30rem;\n  display: flex;\n  flex-direction: column;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: lime;\n  background-color: lightcoral;\n}\n\n.pluginId[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black;\n    font-weight: bold;\n}"]});}return PluginComponent;})();

/***/ }),

/***/ "./src/plugin/subcomponent.component.ts":
/*!**********************************************!*\
  !*** ./src/plugin/subcomponent.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginSubComponent: () => (/* binding */ PluginSubComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
let PluginSubComponent=/*#__PURE__*/(()=>{class PluginSubComponent{title='This is a component within the main plugin component.';static ɵfac=function PluginSubComponent_Factory(t){return new(t||PluginSubComponent)();};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:PluginSubComponent,selectors:[["sub-component"]],standalone:true,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],decls:4,vars:0,template:function PluginSubComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1," Hello world from a component within the plugin. ");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2,"marquee");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3,"Can't believe browsers still support this!");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();}},styles:["marquee[_ngcontent-%COMP%] {\n    color: yellow;\n    background-color: pink;\n}"]});}return PluginSubComponent;})();

/***/ }),

/***/ "./src/shared/inject-resources.ts":
/*!****************************************!*\
  !*** ./src/shared/inject-resources.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Angular2InjectionTokens: () => (/* binding */ Angular2InjectionTokens)
/* harmony export */ });
const Angular2InjectionTokens={/* Module level resources */PLUGIN_DEFINITION:'virtualdesktop-ng2.0-0-0.plugin-definition',LOGGER:'virtualdesktop-ng2.0-0-0.logger',VIEWPORT_EVENTS:'virtualdesktop-ng2.0-0-0.viewport-events',WINDOW_ACTIONS:'virtualdesktop-ng2.0-0-0.window-actions',/* optional */LAUNCH_METADATA:'virtualdesktop-ng2.0-0-0.launch-metadata'};

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core_bcead0df__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/plugin/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pluginComponent: () => (/* reexport safe */ _plugin_component__WEBPACK_IMPORTED_MODULE_0__.PluginComponent)
/* harmony export */ });
/* harmony import */ var _plugin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin.component */ "./src/plugin/plugin.component.ts");

})();

var __webpack_exports__pluginComponent = __webpack_exports__.pluginComponent;
export { __webpack_exports__pluginComponent as pluginComponent };

//# sourceMappingURL=index.mjs.map