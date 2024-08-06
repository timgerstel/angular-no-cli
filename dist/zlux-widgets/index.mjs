import * as __WEBPACK_EXTERNAL_MODULE__angular_common_d12e0fe1__ from "@angular/common";
import * as __WEBPACK_EXTERNAL_MODULE__angular_core_bcead0df__ from "@angular/core";
import * as __WEBPACK_EXTERNAL_MODULE_rxjs__ from "rxjs";
/******/ var __webpack_modules__ = ({

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxButtonComponent: () => (/* binding */ ZluxButtonComponent),
/* harmony export */   ZluxButtonModule: () => (/* binding */ ZluxButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/const _c0=["*"];const _c1=(a0,a1)=>({"zlux-action-button":a0,"light":a1});function ZluxButtonComponent_ng_container_1_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();}if(rf&2){const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx_r1.label," ");}}function ZluxButtonComponent_ng_template_2_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);}}let ZluxButtonComponent=/*#__PURE__*/(()=>{class ZluxButtonComponent{buttonType='button';label="";disabled=false;callToAction=false;lightSkin=false;onClick=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();static ɵfac=function ZluxButtonComponent_Factory(t){return new(t||ZluxButtonComponent)();};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxButtonComponent,selectors:[["zlux-button"]],inputs:{buttonType:"buttonType",label:"label",disabled:"disabled",callToAction:"callToAction",lightSkin:"lightSkin"},outputs:{onClick:"onClick"},ngContentSelectors:_c0,decls:4,vars:8,consts:[["contentArea",""],[1,"zlux-button",3,"click","disabled","ngClass"],[4,"ngIf","ngIfElse"]],template:function ZluxButtonComponent_Template(rf,ctx){if(rf&1){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"button",1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxButtonComponent_Template_button_click_0_listener($event){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick.emit($event));});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1,ZluxButtonComponent_ng_container_1_Template,2,1,"ng-container",2)(2,ZluxButtonComponent_ng_template_2_Template,1,0,"ng-template",null,0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const contentArea_r3=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled",ctx.disabled)("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5,_c1,ctx.callToAction,ctx.lightSkin));_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type",ctx.buttonType);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.label)("ngIfElse",contentArea_r3);}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass,_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],styles:["\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  margin: 0 0.5rem;\n  display: inline-block;\n}\n\n.zlux-button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #047cc0;\n  border-radius: 2px;\n  font-size: 14px;\n  font-family: Helvetica, Open Sans, Arial, Lucida Grande, sans-serif;\n  color: #047cc0;\n  width: 100%;\n  height: 2rem;\n  padding: 0 1rem;\n}\n\n.zlux-action-button[_ngcontent-%COMP%] {\n  background-color: #047cc0;\n  color: #f6f6f6;\n}\n\n.zlux-button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: #175d8d;\n  color: #f6f6f6;\n}\n\n.zlux-button[_ngcontent-%COMP%]:active:not([disabled]) {\n  background-color: #1c496d;\n  color: #f6f6f6;\n}\n\n.zlux-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n\n.zlux-button.light[_ngcontent-%COMP%] {\n  border-color: #98c4eb;\n  color: #98c4eb;\n}\n\n.zlux-button.light[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: #5fa8e0;\n  color: #464646;\n}\n\n.zlux-button.light[_ngcontent-%COMP%]:active:not([disabled]) {\n  background-color: #2e96d5;\n  color: #464646;\n}\n\n.zlux-action-button.light[_ngcontent-%COMP%] {\n  background-color: #98c4eb;\n  color: #464646;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxButtonComponent;})();let ZluxButtonModule=/*#__PURE__*/(()=>{class ZluxButtonModule{static ɵfac=function ZluxButtonModule_Factory(t){return new(t||ZluxButtonModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxButtonModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]});}return ZluxButtonModule;})();

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxCheckboxComponent: () => (/* binding */ ZluxCheckboxComponent),
/* harmony export */   ZluxCheckboxModule: () => (/* binding */ ZluxCheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2022/forms.mjs");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/const _c0=a0=>({"checkbox-dark":a0});function ZluxCheckboxComponent_img_4_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0,"img",6);}}function ZluxCheckboxComponent_ng_template_5_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0,"img",7);}}let ZluxCheckboxComponent=/*#__PURE__*/(()=>{class ZluxCheckboxComponent{value=false;valueChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();label="";inputId="";dark=false;disabled=false;style;styleClass="";onValueChange(model){this.value=model;this.valueChange.emit(model);}static ɵfac=function ZluxCheckboxComponent_Factory(t){return new(t||ZluxCheckboxComponent)();};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxCheckboxComponent,selectors:[["zlux-checkbox"]],inputs:{value:"value",label:"label",inputId:"inputId",dark:"dark",disabled:"disabled",style:"style",styleClass:"styleClass"},outputs:{valueChange:"valueChange"},decls:8,vars:14,consts:[["advMode","ngModel"],["imgOnLight",""],["type","checkbox",3,"ngModelChange","ngModel","disabled"],[1,"checkbox-area"],[3,"ngClass"],["src","../../assets/images/checkbox-checked-dark.png","alt"," ",4,"ngIf","ngIfElse"],["src","../../assets/images/checkbox-checked-dark.png","alt"," "],["src","../../assets/images/checkbox-checked.png","alt"," "]],template:function ZluxCheckboxComponent_Template(rf,ctx){if(rf&1){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"input",2,0);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange",function ZluxCheckboxComponent_Template_input_ngModelChange_0_listener($event){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onValueChange($event));});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2,"label",3)(3,"span",4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4,ZluxCheckboxComponent_img_4_Template,1,0,"img",5)(5,ZluxCheckboxComponent_ng_template_5_Template,1,0,"ng-template",null,1,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const imgOnLight_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel",ctx.value)("disabled",ctx.disabled);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id",ctx.inputId);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for",ctx.inputId);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12,_c0,ctx.dark));_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.dark)("ngIfElse",imgOnLight_r2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx.label,"\n");}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass,_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],styles:["\n\n\n\n\n\n\n\n\n\n\n.checkbox-area[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  white-space: nowrap;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: #5fa8e0;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display:inline-block;\n    width:16px;\n    height:16px;\n    border: 1px solid #047cc0;\n    border-radius: 2px;\n    padding: 2px;\n    margin-right: 1em;\n    vertical-align:middle;\n    background: transparent;\n    cursor: pointer;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span.checkbox-dark[_ngcontent-%COMP%] {\n    border: 1px solid #56acf2;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:hover:not(:disabled)    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: 1px solid #175d8d;\n  background-color: #C0BFC0;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:hover:not(:disabled)    + label[_ngcontent-%COMP%]   span.checkbox-dark[_ngcontent-%COMP%] {\n  border: 1px solid #009bef;\n  background-color: rgb(69, 70, 70);\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:active:not(:disabled)    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: 1px solid #1c496d;\n  background-color: #777677;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:active:not(:disabled)    + label[_ngcontent-%COMP%]   span.checkbox-dark[_ngcontent-%COMP%] {\n  border: 1px solid #047cc0;\n  background-color: rgb(51, 51, 52);\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  position: absolute;\n  display: none;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background-color: #047cc0;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span.checkbox-dark[_ngcontent-%COMP%] {\n    background-color: #56acf2;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked:hover:not(:disabled)    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background-color: #175d8d;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked:hover:not(:disabled)    + label[_ngcontent-%COMP%]   span.checkbox-dark[_ngcontent-%COMP%] {\n    background-color: #009bef;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked:active:not(:disabled)    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background-color: #1c496d;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked:active:not(:disabled)    + label[_ngcontent-%COMP%]   span.checkbox-dark[_ngcontent-%COMP%] {\n    background-color: #047cc0;\n}\n\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  display: inline;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxCheckboxComponent;})();let ZluxCheckboxModule=/*#__PURE__*/(()=>{class ZluxCheckboxModule{static ɵfac=function ZluxCheckboxModule_Factory(t){return new(t||ZluxCheckboxModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxCheckboxModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule]});}return ZluxCheckboxModule;})();

/***/ }),

/***/ "./src/app/components/error-report/error-report.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/error-report/error-report.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxErrorReportComponent: () => (/* binding */ ZluxErrorReportComponent),
/* harmony export */   ZluxErrorReportModule: () => (/* binding */ ZluxErrorReportModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "./src/app/components/button/button.component.ts");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/const _c0=["*"];function ZluxErrorReportComponent_div_7_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",8);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx_r0.timestamp.toLocaleString()," ");}}function ZluxErrorReportComponent_div_10_zlux_button_1_Template(rf,ctx){if(rf&1){const _r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"zlux-button",11);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxErrorReportComponent_div_10_zlux_button_1_Template_zlux_button_click_0_listener(){const button_r3=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.action.emit(button_r3));});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const button_r3=ctx.$implicit;const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label",button_r3)("callToAction",ctx_r0.callToAction||false);}}function ZluxErrorReportComponent_div_10_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",9);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1,ZluxErrorReportComponent_div_10_zlux_button_1_Template,1,2,"zlux-button",10);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf",ctx_r0.buttons);}}let ZluxErrorReportComponent=/*#__PURE__*/(()=>{class ZluxErrorReportComponent{severity='error';title='';theme='';style={};buttons=[];timestamp=undefined;callToAction=false;action=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();constructor(){}static ɵfac=function ZluxErrorReportComponent_Factory(t){return new(t||ZluxErrorReportComponent)();};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxErrorReportComponent,selectors:[["zlux-error-report"]],inputs:{severity:"severity",title:"title",theme:"theme",style:"style",buttons:"buttons",timestamp:"timestamp",callToAction:"callToAction"},outputs:{action:"action"},ngContentSelectors:_c0,decls:11,vars:7,consts:[[3,"ngClass","ngStyle"],[3,"ngClass"],["ngClass","mainPanel"],["ngClass","title"],["ngClass","titleText"],["class","timestamp",4,"ngIf"],["ngClass","content"],["ngClass","buttonArea",4,"ngIf"],[1,"timestamp"],["ngClass","buttonArea"],[3,"label","callToAction","click",4,"ngFor","ngForOf"],[3,"click","label","callToAction"]],template:function ZluxErrorReportComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",0)(1,"div",1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2,"div",1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3,"div",2)(4,"div",3)(5,"div",4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7,ZluxErrorReportComponent_div_7_Template,2,1,"div",5);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8,"div",6);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10,ZluxErrorReportComponent_div_10_Template,2,1,"div",7);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass","report "+ctx.severity+" "+ctx.theme)("ngStyle",ctx.style);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass","leftPanel "+ctx.theme);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass","severityIcon "+ctx.theme);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx.title," ");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.timestamp);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.buttons.length>0);}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass,_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf,_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf,_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle,_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ZluxButtonComponent],styles:["\n\n\n\n\n\n\n\n\n\n\n.report[_ngcontent-%COMP%] {\n  padding: 0;\n  border-left: none;\n  display: flex;\n  flex-direction: row;\n}\n\n.report.error[_ngcontent-%COMP%] {\n  background-color: rgba(247, 230, 230, 1);\n}\n\n.report.warning[_ngcontent-%COMP%] {\n  background-color: rgba(242, 242, 242, 1);\n}\n\n.report.warning.dark[_ngcontent-%COMP%] {\n  background-color: #24272d;\n  color: #dddee0;\n}\n\n.report.info[_ngcontent-%COMP%] {\n  background-color: rgba(242, 242, 242, 1);\n}\n\n.leftPanel[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.mainPanel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  flex-grow: 1;\n}\n\n.error[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%] {\n  border: rgba(255, 92, 73, 1) 1px solid;\n}\n\n.warning[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%] {\n  border: rgba(254, 133, 0, 1) 1px solid;\n}\n\n.info[_ngcontent-%COMP%]   .mainPanel[_ngcontent-%COMP%] {\n  border: rgba(0, 182, 203, 1) 1px solid;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 5px;\n  padding-bottom: 0;\n  user-select: text;\n  -ms-user-select: text;\n  -moz-user-select: text;\n  -webkit-user-select: text;\n}\n\n.severityIcon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin: 16px;\n  background-repeat: no-repeat;\n}\n\n.severityIcon.dark[_ngcontent-%COMP%] {\n  filter: invert(50%) sepia(50%) saturate(4000%) hue-rotate(0deg); \n\n}\n\n.error[_ngcontent-%COMP%]   .leftPanel[_ngcontent-%COMP%] {\n  background-color: rgba(255, 92, 73, 1);\n}\n\n.error[_ngcontent-%COMP%]   .severityIcon[_ngcontent-%COMP%] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKLSURBVFhH7Zc9chNBEIVXSiFDOgoQIENsIp/BPgBcwjoAgR2RihNYJgY54RD2CYgQqcz3Zt+sRp7d9WjlKqooXlXXzLzuftO72vlR9R+l2Gw2U+wcu8F+3T+AOPsUM3Xa4ZAYduV5ikHOsqSQkdtWIHBK82k0Gj2rmapC+4bmG9yPmgncPc1r7C38m0AC6DXNx/F4/Llm9gCTLyQcwfiy5IkInRB3UWfVYPzF7jIowblKvsOO7CqGcrBby5QXQeCZc5R0iw3+oJQrDctJ78yudjghfOFK1NiuwbBmKMLaE7tyELBUoDEzfTDQPbKmilia3gWOqWMUdGF6B/ALiXmYgdQZ/tbfWpq1ekD+Fgg4t1MFZK9ewvatsawIcVj8+RamG0BP5BPwz01vAbmyU+s8A3w6wZqm+YnU7/KlwBfnWJnaIhHIqzPwqQhNoDhtvRrvFKaxwzPgm8dcU1vIYZyYaoUmkIAC1Sb9ziePwH+iWMFUNXZbDLbV72y3x2isaZ/L1Md1TD9/tQnSiSP2LqADvWdKH/YugIeYYV/jk8vo67C61s9TR7WDuKzQpgCEfrt9FYgW4NPk15pQE0O9l6nvIrSRdX4H+IK2c3dB9b3LUMLJBxdWgF0PP8zOlQDfuwzDEjGynQp/3Ig0UfaU8GkR2W4Il+60rRtRGnBpegcSxt35ivGriGwXFKRZqwf99kMOx987jARVhsWd7kmOY6R0Q2qO40c1CThVsODE7vP7ESg3Ti5I265+ENjcByWA9a7vNigHu7OMdIbfCwXGRZdSxWDFl9KDr+WMf9J/QfuS4Tv66bVcm9uHQdfyCD9RujqK4JzB308GFzLHVlhYKSngmr9mDJ9u4n8cVfUHwflgtdXFrDgAAAAASUVORK5CYII=);\n}\n\n.warning[_ngcontent-%COMP%]   .leftPanel[_ngcontent-%COMP%] {\n  background-color: rgba(254, 133, 0, 1);\n}\n\n.warning[_ngcontent-%COMP%]   .leftPanel.dark[_ngcontent-%COMP%] {\n  background-color: #dddee0; \n\n}\n\n.info[_ngcontent-%COMP%]   .leftPanel[_ngcontent-%COMP%] {\n  background-color: rgba(0, 182, 203, 1);\n}\n\n.warning[_ngcontent-%COMP%]   .severityIcon[_ngcontent-%COMP%] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHYSURBVFhH7ZbRTcMwFEWbzACIEegPE9AZ2hnKCmUFBkCITgAbMEFZoAPAdyP+2v+Wc81tSBQHUjUJQuJIVp6vn+9zk9jp4J8/zXa7ndMe3O0XCg9pa9pmt9tdWO4PCj9TOKDYcj9Qc/JZusTEw93DL16qItcVLXO89HC3UOhGBQXxlHbtrvozp3UDBU5pKxfLf7Fia5lyLLcP5nMVEsQjy9JHlqXPLbcLxkPXUJHKWy/NwxofWm4PTBc239Aqt1kabe2cF8vtgGe+7TCvPfk05jTR3rbE+E2OXFeWAqEMuBtQjjSur5aOA6NZqALEY8sBy6UF0C3ereO2JQZ6rjrrZVY5aEIVcDdHudI1Vx6WD4fJj6ECEFfebA/FFlDcMU+WD6OJCboOntJ7sUdzPD26+B9h0v426pMbvY3KUXO3hObQah/fntTXEkwYJ0ly6e59mqbvjhvjOXeK5cU6mm9LFrD/wh29lfCIbuFaSLzVBFO7asZOyNVbvrEURR7BCeRtOQ4Jxee2sByFlEYLEPKy5/fbksFOPijysq1843/fGCh+Ulv/p4tn/imHK8tfkNDO6VUD1uGRuUZ5WyJMNdAnqqnaiReQsVfPFPcFa8g4K87d/ee3GAw+APlOJt5y8i66AAAAAElFTkSuQmCC);\n}\n\n.info[_ngcontent-%COMP%]   .severityIcon[_ngcontent-%COMP%] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIvSURBVFhH7Zc/UgIxFMYXWu2EO9hZqTMqcBc4gF4CDmABla2eQHoZbKz0AnICK7EFvy/7JWTdLISFtXD8zbx5m/cvj7jJxuSfWBaLRRPShzxDPpc/oE0+xjSVtjssBnnUPNEgZxzTSE06CAp0oW5rtdpBakkS1H6GmsD2klqMbQl1DmnDfmmMAOY51E29Xr9LLVuAye9Z2ILxKOYXIbSBuGGalYLxg9xxMEG5TJ5BWnJFwxzIu8rEN4HAnnKYxALHcm0N8vn++E305AqjBPOGM5FjuXLA55YZzyOZc7AGaymOtRty5UHAmIHiSuYcLKoYh1xBEN9SGJsYy5zFL4rnocxBENJII1fIVQhrKpTkVwEBfTnZwMa33S+I58I/gQVhrmnED2ReAeNUTu7zSvDmmMqU1KXJifSTdBVMpO1cqwZwgh1KuxMuBH9BCLnXYmvbuYi/ApUTanTrBtC9QcOd+dUVCDXuGsDqfEmfGUMF2NrQ/Eoa/BV4le5IV0Fb+k0604DZIlilC3RYfF6XBHu/idr2rmC34woGYGIDnmNOtgwyF8KaCmX98EkLx8aPkXyFKCwD6m7+GBF2BpkrMPg5NlXWoDAHTLwhuc9xqGYGBHQZTJRY+n1grp2csLZc60Gguw+yAKTslWymMqxT/l5IMI66lDIGEn0p3flajvEHno+gTzHseFuNPh5u16Wu5Rb9In93RKGc/Z0namQAmULMTvGBzf1rhuHeD7K/SpJ8A3hbpnaeSm0cAAAAAElFTkSuQmCC);\n}\n\n.title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-kerning: normal;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.titleText[_ngcontent-%COMP%] {\n  font-size: 150%;\n  font-size:21px;\n}\n\n.error[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-bottom-color: #AA231F;\n  color: #AA231F;\n}\n\n.warning[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-bottom-color: #e99023;\n  color: #e99023;\n}\n\n.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  border-bottom-color: #188291;\n  color: #188291;\n}\n\n.buttonArea[_ngcontent-%COMP%] {\n  margin: 36px 10px 0px 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-left: 12px;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxErrorReportComponent;})();let ZluxErrorReportModule=/*#__PURE__*/(()=>{class ZluxErrorReportModule{static ɵfac=function ZluxErrorReportModule_Factory(t){return new(t||ZluxErrorReportModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxErrorReportModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ZluxButtonModule]});}return ZluxErrorReportModule;})();

/***/ }),

/***/ "./src/app/components/flyover/flyover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/flyover/flyover.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxFlyover: () => (/* binding */ ZluxFlyover),
/* harmony export */   ZluxFlyoverComponent: () => (/* binding */ ZluxFlyoverComponent),
/* harmony export */   ZluxFlyoverModule: () => (/* binding */ ZluxFlyoverModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/const _c0=["area"];const _c1=["*"];const _c2=(a0,a1,a2,a3)=>({"top":a0,"bottom":a1,"left":a2,"right":a3});let ZluxFlyover=/*#__PURE__*/(()=>{class ZluxFlyover{el;flyover;position='top';showDelayMs=200;zluxFlyoverDisabled=false;preparingToShow=false;constructor(el){this.el=el;}onMouseEnter(e){if(this.flyover){if(this.flyover.hideTimer){clearInterval(this.flyover.hideTimer);this.flyover.forceHide();}if(!this.isEnabled()){return;}this.preparingToShow=true;setTimeout(()=>{if(this.preparingToShow){this.flyover.show(this.el.nativeElement,this.position);this.preparingToShow=false;}},this.showDelayMs);}}onMouseLeave(e){this.preparingToShow=false;this.flyover.hide();}isEnabled(){return this.zluxFlyoverDisabled!==true;}static ɵfac=function ZluxFlyover_Factory(t){return new(t||ZluxFlyover)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));};static ɵdir=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:ZluxFlyover,selectors:[["","zluxFlyover",""]],hostVars:2,hostBindings:function ZluxFlyover_HostBindings(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter",function ZluxFlyover_mouseenter_HostBindingHandler(){return ctx.onMouseEnter();})("mouseleave",function ZluxFlyover_mouseleave_HostBindingHandler(){return ctx.onMouseLeave();});}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rel-positioned",true);}},inputs:{flyover:"flyover",position:"position",showDelayMs:"showDelayMs",zluxFlyoverDisabled:"zluxFlyoverDisabled"}});}return ZluxFlyover;})();let ZluxFlyoverComponent=/*#__PURE__*/(()=>{class ZluxFlyoverComponent{el;hideDelayMs=200;top=0;left=0;hover=false;targetHover=false;active=false;arrowTopOffsetLeft=0;arrowTopOffsetBottom=0;arrowBottomOffsetLeft=0;arrowBottomOffsetBottom=0;position='top';flyoverMarginRight=15;flyoverMarginLeft=15;flyoverMarginTop=10;flyoverMarginBottom=20;hideTimer=0;constructor(el){this.el=el;}ngOnInit(){this.arrowTopOffsetLeft=this.contentArea.nativeElement.clientWidth/2-10;this.arrowTopOffsetBottom=-9;this.arrowBottomOffsetLeft=this.contentArea.nativeElement.clientWidth/2-10;this.arrowBottomOffsetBottom=-10;}contentArea;onMouseEnter(e){this.hover=true;this.active=true;}onMouseLeave(e){this.hover=false;this.hide();}show(onElement,onPosition='top'){if(this.hideTimer){this.forceHide();}this.position=onPosition;switch(onPosition){case'top':{this.setTopPosition(onElement);break;}case'bottom':{this.setBottomPosition(onElement);break;}case'left':{this.setLeftPosition(onElement);break;}case'right':{this.setRightPosition(onElement);break;}}this.targetHover=true;this.active=true;}GetRelativeShift(onEl,content){let elem=onEl.offsetParent;let rect={top:0,left:0,width:elem.clientWidth,height:elem.clientHeight};while(elem!==content.offsetParent){rect.top+=elem.offsetTop;rect.left+=elem.offsetLeft;rect.width=elem.clientWidth;rect.height=elem.clientHeight;elem=elem.offsetParent;}return rect;}setTopPosition(onEl){let content=this.contentArea.nativeElement;let rect=this.GetRelativeShift(onEl,content);this.top=rect.top+onEl.offsetTop-content.clientHeight-20;this.left=rect.left+onEl.offsetLeft-content.clientWidth/2+onEl.offsetWidth/2;this.arrowTopOffsetLeft=content.clientWidth/2-10;this.arrowTopOffsetBottom=-9;this.arrowBottomOffsetLeft=content.clientWidth/2-10;this.arrowBottomOffsetBottom=-10;this.horizontalAlign(onEl,rect);}setBottomPosition(onEl){let content=this.contentArea.nativeElement;let rect=this.GetRelativeShift(onEl,content);this.top=rect.top+onEl.offsetTop+onEl.offsetHeight+20;this.left=rect.left+onEl.offsetLeft-content.clientWidth/2+onEl.offsetWidth/2;this.arrowTopOffsetLeft=content.clientWidth/2-10;this.arrowTopOffsetBottom=content.clientHeight-12;this.arrowBottomOffsetLeft=content.clientWidth/2-10;this.arrowBottomOffsetBottom=content.clientHeight-11;this.horizontalAlign(onEl,rect);}horizontalAlign(onEl,rect){let content=this.contentArea.nativeElement;let distToRightEdge=rect.width-onEl.offsetWidth/2-onEl.offsetLeft-rect.left;if(distToRightEdge<content.clientWidth/2+this.flyoverMarginRight){let offset=content.clientWidth/2-distToRightEdge+this.flyoverMarginRight;this.left-=offset;if(distToRightEdge<this.flyoverMarginRight+15)offset=content.clientWidth/2-15;this.arrowTopOffsetLeft+=offset;this.arrowBottomOffsetLeft+=offset;}else{let distToLeftEdge=onEl.offsetWidth/2+onEl.offsetLeft+rect.left;if(distToLeftEdge<content.clientWidth/2+this.flyoverMarginLeft){let offset=content.clientWidth/2-distToLeftEdge+this.flyoverMarginLeft;this.left+=offset;if(distToLeftEdge<this.flyoverMarginLeft+15)offset=content.clientWidth/2-15;this.arrowTopOffsetLeft-=offset;this.arrowBottomOffsetLeft-=offset;}}}setLeftPosition(onEl){let content=this.contentArea.nativeElement;let rect=this.GetRelativeShift(onEl,content);this.top=rect.top+onEl.offsetTop+onEl.offsetHeight/2-content.clientHeight/2;this.left=rect.left+onEl.offsetLeft-content.clientWidth-20;this.arrowTopOffsetLeft=content.clientWidth-12;this.arrowTopOffsetBottom=content.clientHeight/2-10;this.arrowBottomOffsetLeft=content.clientWidth-11;this.arrowBottomOffsetBottom=content.clientHeight/2-10;this.verticalAlign(onEl,rect);}setRightPosition(onEl){let content=this.contentArea.nativeElement;let rect=this.GetRelativeShift(onEl,content);this.top=rect.top+onEl.offsetTop+onEl.offsetHeight/2-content.clientHeight/2;this.left=rect.left+onEl.offsetLeft+onEl.offsetWidth+20;this.arrowTopOffsetLeft=-9;this.arrowTopOffsetBottom=content.clientHeight/2-10;this.arrowBottomOffsetLeft=-10;this.arrowBottomOffsetBottom=content.clientHeight/2-10;this.verticalAlign(onEl,rect);}verticalAlign(onEl,rect){let content=this.contentArea.nativeElement;let distToBottomEdge=rect.height+onEl.offsetHeight/2-onEl.offsetTop-rect.top;if(distToBottomEdge<content.clientHeight/2+this.flyoverMarginBottom){let offset=content.clientHeight/2-distToBottomEdge+this.flyoverMarginBottom;this.top-=offset;if(distToBottomEdge<this.flyoverMarginBottom+15)offset=content.clientHeight/2-15;this.arrowTopOffsetBottom-=offset;this.arrowBottomOffsetBottom-=offset;}else{let distToTopEdge=onEl.offsetHeight/2+onEl.offsetTop+rect.top;if(distToTopEdge<content.clientHeight/2+this.flyoverMarginTop){let offset=content.clientHeight/2-distToTopEdge+this.flyoverMarginTop;this.top+=offset;if(distToTopEdge<this.flyoverMarginTop+15)offset=content.clientHeight/2-15;this.arrowTopOffsetBottom+=offset;this.arrowBottomOffsetBottom+=offset;}}}hide(){this.targetHover=false;this.hideTimer=window.setTimeout(()=>{this.forceHide();},this.hideDelayMs);}forceHide(){if(!this.targetHover&&!this.hover){this.top=0;this.left=0;this.active=false;}this.hideTimer=0;}static ɵfac=function ZluxFlyoverComponent_Factory(t){return new(t||ZluxFlyoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxFlyoverComponent,selectors:[["zlux-flyover"]],viewQuery:function ZluxFlyoverComponent_Query(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0,5);}if(rf&2){let _t;_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())&&(ctx.contentArea=_t.first);}},hostBindings:function ZluxFlyoverComponent_HostBindings(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter",function ZluxFlyoverComponent_mouseenter_HostBindingHandler(){return ctx.onMouseEnter();})("mouseleave",function ZluxFlyoverComponent_mouseleave_HostBindingHandler(){return ctx.onMouseLeave();});}},inputs:{hideDelayMs:"hideDelayMs"},ngContentSelectors:_c1,decls:6,vars:18,consts:[["area",""],[1,"zlux-flyover-area"],[1,"zlux-flyover-content"],[1,"zlux-flyover-arrow-top-layer",3,"ngClass"],[1,"zlux-flyover-arrow-bottom-layer"]],template:function ZluxFlyoverComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",1,0)(2,"div",2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4,"div",3)(5,"div",4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top",(ctx.active==true?ctx.top:-9999)+"px")("left",(ctx.active==true?ctx.left:-9999)+"px");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left",ctx.arrowTopOffsetLeft+"px")("bottom",ctx.arrowTopOffsetBottom+"px");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](13,_c2,ctx.position=="top",ctx.position=="bottom",ctx.position=="left",ctx.position=="right"));_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left",ctx.arrowBottomOffsetLeft+"px")("bottom",ctx.arrowBottomOffsetBottom+"px");}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],styles:["\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  font-family: Helvetica, Open Sans, Arial, Lucida Grande, sans-serif;\n}\n\n.rel-positioned[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.zlux-flyover-area[_ngcontent-%COMP%] {\n  position: absolute;\n  background: transparent;\n  border: transparent;\n  z-index: 1;\n}\n\n.zlux-flyover-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #21649F;\n  background: #fff;\n  box-shadow: 3px 3px 0 rgba(0,0,0,0.3);\n}\n\n.zlux-flyover-arrow-top-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  \n\n\n  width: 20px;\n  height: 20px;\n  transform: rotate(45deg);\n  background: transparent;\n}\n\n.zlux-flyover-arrow-top-layer.top[_ngcontent-%COMP%] {\n  border-top: 10px solid transparent;\n  border-left: 10px solid transparent;\n  border-bottom: 10px solid #fff;\n  border-right: 10px solid #fff;\n}\n\n.zlux-flyover-arrow-top-layer.bottom[_ngcontent-%COMP%] {\n  border-top: 10px solid #fff;\n  border-left: 10px solid #fff;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n\n.zlux-flyover-arrow-top-layer.left[_ngcontent-%COMP%] {\n  border-top: 10px solid #fff;\n  border-left: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #fff;\n}\n\n.zlux-flyover-arrow-top-layer.right[_ngcontent-%COMP%] {\n  border-top: 10px solid transparent;\n  border-left: 10px solid #fff;\n  border-bottom: 10px solid #fff;\n  border-right: 10px solid transparent;\n}\n\n.zlux-flyover-arrow-bottom-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  \n\n\n  width: 20px;\n  height: 20px;\n  background: #21649F;\n  transform: rotate(45deg);\n  box-shadow: 3px 0 0 rgba(1,1,1,0.3);\n  z-index: -1;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxFlyoverComponent;})();let ZluxFlyoverModule=/*#__PURE__*/(()=>{class ZluxFlyoverModule{static ɵfac=function ZluxFlyoverModule_Factory(t){return new(t||ZluxFlyoverModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxFlyoverModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]});}return ZluxFlyoverModule;})();

/***/ }),

/***/ "./src/app/components/inputtext/inputtext.ts":
/*!***************************************************!*\
  !*** ./src/app/components/inputtext/inputtext.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxInputText: () => (/* binding */ ZluxInputText),
/* harmony export */   ZluxInputTextModule: () => (/* binding */ ZluxInputTextModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _assets_css_inputtext_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/inputtext.module.css */ "./src/app/assets/css/inputtext.module.css");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/let ZluxInputText=/*#__PURE__*/(()=>{class ZluxInputText{element;dark=false;constructor(element){this.element=element;this.element.nativeElement.className+=' '+_assets_css_inputtext_module_css__WEBPACK_IMPORTED_MODULE_2__["default"]["text-input"];}ngOnInit(){if(this.dark){this.element.nativeElement.className+=' '+_assets_css_inputtext_module_css__WEBPACK_IMPORTED_MODULE_2__["default"]["text-input-dark"];}}static ɵfac=function ZluxInputText_Factory(t){return new(t||ZluxInputText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));};static ɵdir=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({type:ZluxInputText,selectors:[["","zluxInputText",""]],inputs:{dark:"dark"}});}return ZluxInputText;})();let ZluxInputTextModule=/*#__PURE__*/(()=>{class ZluxInputTextModule{static ɵfac=function ZluxInputTextModule_Factory(t){return new(t||ZluxInputTextModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxInputTextModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]});}return ZluxInputTextModule;})();

/***/ }),

/***/ "./src/app/components/paginator/paginator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/paginator/paginator.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxPaginatorComponent: () => (/* binding */ ZluxPaginatorComponent),
/* harmony export */   ZluxPaginatorModule: () => (/* binding */ ZluxPaginatorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _flyover_flyover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flyover/flyover.component */ "./src/app/components/flyover/flyover.component.ts");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/const _c0=a0=>({"input-error":a0});function ZluxPaginatorComponent_a_11_Template(rf,ctx){if(rf&1){const _r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"a",18);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxPaginatorComponent_a_11_Template_a_click_0_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toLastPage());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();const fetchMoreFlyover_r4=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flyover",fetchMoreFlyover_r4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx_r2.loadedPageNumber,"*");}}function ZluxPaginatorComponent_ng_template_12_Template(rf,ctx){if(rf&1){const _r5=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"a",17);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxPaginatorComponent_ng_template_12_Template_a_click_0_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toLastPage());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx_r2.loadedPageNumber,"");}}function ZluxPaginatorComponent_a_21_Template(rf,ctx){if(rf&1){const _r6=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"a",18);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxPaginatorComponent_a_21_Template_a_click_0_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toLastPage());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();const fetchMoreFlyover_r4=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flyover",fetchMoreFlyover_r4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx_r2.totalRecords,"*");}}function ZluxPaginatorComponent_ng_template_22_Template(rf,ctx){if(rf&1){const _r7=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"a",17);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxPaginatorComponent_ng_template_22_Template_a_click_0_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toLastPage());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx_r2.totalRecords,"");}}let ZluxPaginatorComponent=/*#__PURE__*/(()=>{class ZluxPaginatorComponent{rows=0;totalRecords=0;hasMoreRecords=false;onPageChange=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();onFetchMoreData=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();pageIndex=-1;loadedPageNumber=0;isInputIncorrect=false;preventEvent=false;get indexMax(){return this.totalRecords>(this.pageIndex+1)*this.rows?(this.pageIndex+1)*this.rows:this.totalRecords;}get indexMin(){return this.indexMax>0?this.pageIndex*this.rows+1:0;}ngOnChanges(changes){if(changes['rows']){this.loadedPageNumber=Math.ceil(this.totalRecords/this.rows);if(this.loadedPageNumber===0||isNaN(this.loadedPageNumber))this.loadedPageNumber=0;if(this.pageIndex>=this.loadedPageNumber){this.pageIndex=this.loadedPageNumber-1;this.pageChange();}}}ngAfterContentChecked(){this.loadedPageNumber=Math.ceil(this.totalRecords/this.rows);if(this.loadedPageNumber===0||isNaN(this.loadedPageNumber))this.loadedPageNumber=0;}onChange(event){let value=Number(event.target.value);if(value>=1&&value<=this.loadedPageNumber){if(this.pageIndex!=value-1){this.pageIndex=value-1;this.pageChange();}this.isInputIncorrect=false;}else{this.isInputIncorrect=true;}}onPrevButtonClick(){if(this.pageIndex<=0){return;}this.pageIndex--;this.isInputIncorrect=false;this.pageChange();}onNextButtonClick(){if(this.pageIndex+1>=this.loadedPageNumber&&!this.hasMoreRecords){return;}this.pageIndex++;this.isInputIncorrect=false;this.pageChange();}onFirstButtonClick(){this.pageIndex=0;this.isInputIncorrect=false;this.pageChange();}pageChange(){if(!this.preventEvent&&this.pageIndex>=0){this.onPageChange.emit({first:this.pageIndex*this.rows,rows:this.rows});}}changePage(pageIndex){this.preventEvent=true;this.pageIndex=pageIndex;this.isInputIncorrect=false;this.preventEvent=false;}toLastPage(){if(this.pageIndex!==this.loadedPageNumber-1){this.pageIndex=this.loadedPageNumber-1;this.isInputIncorrect=false;this.pageChange();}}fetchMoreData(){this.onFetchMoreData.emit();}static ɵfac=function ZluxPaginatorComponent_Factory(t){return new(t||ZluxPaginatorComponent)();};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxPaginatorComponent,selectors:[["zlux-paginator"]],inputs:{rows:"rows",totalRecords:"totalRecords",hasMoreRecords:"hasMoreRecords"},outputs:{onPageChange:"onPageChange",onFetchMoreData:"onFetchMoreData"},features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],decls:30,vars:13,consts:()=>{let i18n_0;if(typeof ngI18nClosureMode!=="undefined"&&ngI18nClosureMode){/**
           * @desc of preposition in clause n-m of total
           */const MSG_EXTERNAL_paginator$$__________________USERS_TGERSTEL_DOCUMENTS_ZLUX_ANGULAR_NO_CLI_ZLUX_WIDGETS_CONVERTED_SRC_APP_COMPONENTS_PAGINATOR_PAGINATOR_COMPONENT_TS_0=goog.getMsg("of");i18n_0=MSG_EXTERNAL_paginator$$__________________USERS_TGERSTEL_DOCUMENTS_ZLUX_ANGULAR_NO_CLI_ZLUX_WIDGETS_CONVERTED_SRC_APP_COMPONENTS_PAGINATOR_PAGINATOR_COMPONENT_TS_0;}else{i18n_0=$localize`:of preposition in clause n-m of total@@paginator␟169eed2bc3e08e1bea977bcc5d799379f6b8a758␟5881876145178332550:of`;}let i18n_1;if(typeof ngI18nClosureMode!=="undefined"&&ngI18nClosureMode){/**
           * @desc of preposition in clause n-m of total
           */const MSG_EXTERNAL_paginator$$__________________USERS_TGERSTEL_DOCUMENTS_ZLUX_ANGULAR_NO_CLI_ZLUX_WIDGETS_CONVERTED_SRC_APP_COMPONENTS_PAGINATOR_PAGINATOR_COMPONENT_TS_1=goog.getMsg("of");i18n_1=MSG_EXTERNAL_paginator$$__________________USERS_TGERSTEL_DOCUMENTS_ZLUX_ANGULAR_NO_CLI_ZLUX_WIDGETS_CONVERTED_SRC_APP_COMPONENTS_PAGINATOR_PAGINATOR_COMPONENT_TS_1;}else{i18n_1=$localize`:of preposition in clause n-m of total@@paginator␟169eed2bc3e08e1bea977bcc5d799379f6b8a758␟5881876145178332550:of`;}return[["haveNotMorePage",""],["haveNotMoreRecord",""],["fetchMoreFlyover",""],i18n_0,i18n_1,[1,"paginator-area"],["buttonType","button",1,"first-button",3,"onClick","disabled"],["width","16px","height","16px","viewBox","0 0 16 16"],[0,"xlink","href","../../assets/images/FirstPage.svg"],["buttonType","button",1,"prev-button",3,"onClick","disabled"],[0,"xlink","href","../../assets/images/PrevPage.svg"],[1,"page-area"],["type","text","zluxInputText","",1,"current-page-field",3,"change","ngClass","value"],["href","#","zluxFlyover","",3,"flyover","click",4,"ngIf","ngIfElse"],["buttonType","button",3,"onClick","disabled"],[0,"xlink","href","../../assets/images/NextPage.svg"],[1,"right-page-area"],["href","#",3,"click"],["href","#","zluxFlyover","",3,"click","flyover"]];},template:function ZluxPaginatorComponent_Template(rf,ctx){if(rf&1){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",5)(1,"zlux-button",6);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick",function ZluxPaginatorComponent_Template_zlux_button_onClick_1_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onFirstButtonClick());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2,"svg",7);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3,"use",8);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4,"zlux-button",9);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick",function ZluxPaginatorComponent_Template_zlux_button_onClick_4_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onPrevButtonClick());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5,"svg",7);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6,"use",10);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7,"div",11)(8,"input",12);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change",function ZluxPaginatorComponent_Template_input_change_8_listener($event){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onChange($event));});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10,3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11,ZluxPaginatorComponent_a_11_Template,2,2,"a",13)(12,ZluxPaginatorComponent_ng_template_12_Template,2,1,"ng-template",null,0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14,"zlux-button",14);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick",function ZluxPaginatorComponent_Template_zlux_button_onClick_14_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onNextButtonClick());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15,"svg",7);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16,"use",15);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17,"div",16);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20,4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21,ZluxPaginatorComponent_a_21_Template,2,2,"a",13)(22,ZluxPaginatorComponent_ng_template_22_Template,2,1,"ng-template",null,1,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24,"zlux-flyover",null,2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26," Not all items are loaded! ");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27,"br");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28,"a",17);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxPaginatorComponent_Template_a_click_28_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.fetchMoreData());});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29,"Load More data");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();}if(rf&2){const haveNotMorePage_r8=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);const haveNotMoreRecord_r9=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled",ctx.pageIndex<=0);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled",ctx.pageIndex<=0);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11,_c0,ctx.isInputIncorrect))("value",ctx.pageIndex+1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.hasMoreRecords)("ngIfElse",haveNotMorePage_r8);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled",ctx.pageIndex>=ctx.loadedPageNumber-1&&!ctx.hasMoreRecords);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ",ctx.indexMin,"-",ctx.indexMax," ");_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.hasMoreRecords)("ngIfElse",haveNotMoreRecord_r9);}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass,_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf,_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ZluxButtonComponent,_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__.ZluxInputText,_flyover_flyover_component__WEBPACK_IMPORTED_MODULE_4__.ZluxFlyoverComponent,_flyover_flyover_component__WEBPACK_IMPORTED_MODULE_4__.ZluxFlyover],styles:["\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  font-family: Helvetica, Open Sans, Arial, Lucida Grande, sans-serif;\n}\n\n.paginator-area[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 100%;\n  flex: none;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.page-area[_ngcontent-%COMP%] {\n  margin: 0 1rem 0 0.5rem;\n}\n\n.current-page-field[_ngcontent-%COMP%] {\n  flex: none;\n  background-color: white;\n  width: 4rem;\n  padding-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.right-page-area[_ngcontent-%COMP%] {\n  flex: auto;\n  text-align: right;\n  padding-right: 2rem;\n}\n\n.input-error[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\nzlux-button[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 32px;\n}\n\nzlux-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nzlux-button[_ngcontent-%COMP%]     button {\n  padding: 0 !important;\n  display: flex;\n  flex-direction: row;\n  fill: rgb(21, 124, 189);\n}\n\nzlux-button[_ngcontent-%COMP%]     button:hover:not([disabled]), zlux-button[_ngcontent-%COMP%]     button:active:not([disabled]) {\n  fill: rgb(255, 255, 255);\n  background-color: rgb(13, 93, 141);\n}\n\n.first-button[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: -1px;\n}\n\n.first-button[_ngcontent-%COMP%]     button {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.prev-button[_ngcontent-%COMP%]     button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxPaginatorComponent;})();let ZluxPaginatorModule=/*#__PURE__*/(()=>{class ZluxPaginatorModule{static ɵfac=function ZluxPaginatorModule_Factory(t){return new(t||ZluxPaginatorModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxPaginatorModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ZluxButtonModule,_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_3__.ZluxInputTextModule,_flyover_flyover_component__WEBPACK_IMPORTED_MODULE_4__.ZluxFlyoverModule]});}return ZluxPaginatorModule;})();

/***/ }),

/***/ "./src/app/components/popup-manager/popup-manager.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/popup-manager/popup-manager.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxPopupManagerComponent: () => (/* binding */ ZluxPopupManagerComponent),
/* harmony export */   ZluxPopupManagerModule: () => (/* binding */ ZluxPopupManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _popup_panel_popup_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup-panel/popup-panel.component */ "./src/app/components/popup-panel/popup-panel.component.ts");
/* harmony import */ var _error_report_error_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-report/error-report.component */ "./src/app/components/error-report/error-report.component.ts");
/* harmony import */ var _services_popup_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/popup-manager.service */ "./src/app/services/popup-manager.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "@angular/core");
function ZluxPopupManagerComponent_div_0_zlux_popup_panel_1_Template(rf,ctx){if(rf&1){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0,"zlux-popup-panel",4)(1,"zlux-error-report",5);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("action",function ZluxPopupManagerComponent_div_0_zlux_popup_panel_1_Template_zlux_error_report_action_1_listener($event){_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onChoose(ctx_r1.currentErrorBlocking,$event));});_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();}if(rf&2){const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modal",false)("autoShow",true)("ignoreVeil",true);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r1.currentErrorBlocking.style);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("severity",ctx_r1.currentErrorBlocking.severity)("title",ctx_r1.currentErrorBlocking.title)("timestamp",ctx_r1.currentErrorBlocking.timestamp)("buttons",ctx_r1.currentErrorBlocking.buttonCaptions)("theme",ctx_r1.currentErrorBlocking.theme)("callToAction",ctx_r1.currentErrorBlocking.callToAction);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ",ctx_r1.currentErrorBlocking.text," ");}}function ZluxPopupManagerComponent_div_0_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0,"div",2);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1,ZluxPopupManagerComponent_div_0_zlux_popup_panel_1_Template,3,12,"zlux-popup-panel",3);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();}if(rf&2){const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf",ctx_r1.currentErrorBlocking);}}function ZluxPopupManagerComponent_zlux_popup_panel_1_Template(rf,ctx){if(rf&1){const _r3=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0,"zlux-popup-panel",6)(1,"zlux-error-report",5);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("action",function ZluxPopupManagerComponent_zlux_popup_panel_1_Template_zlux_error_report_action_1_listener($event){_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onChoose(ctx_r1.currentErrorNonblocking,$event));});_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();}if(rf&2){const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modal",false)("autoShow",true)("blockDisplay",true);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r1.currentErrorNonblocking.style);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("severity",ctx_r1.currentErrorNonblocking.severity)("title",ctx_r1.currentErrorNonblocking.title)("timestamp",ctx_r1.currentErrorNonblocking.timestamp)("buttons",ctx_r1.currentErrorNonblocking.buttonCaptions)("theme",ctx_r1.currentErrorNonblocking.theme)("callToAction",ctx_r1.currentErrorNonblocking.callToAction);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ",ctx_r1.currentErrorNonblocking.text," ");}}let ZluxPopupManagerComponent=/*#__PURE__*/(()=>{class ZluxPopupManagerComponent{popupManager;static REPORT_VISIBLE_TIMEOUT=15;blockCount=0;currentErrorBlocking=null;currentErrorNonblocking=null;errors=[];constructor(popupManager){this.popupManager=popupManager;popupManager.on('block',this.block.bind(this));popupManager.on('unblock',this.unblock.bind(this));popupManager.on('createReport',error=>this.createReport(error));popupManager.on('removeReport',id=>this.removeReport(id));}updateErrors(){if(this.currentErrorBlocking==null){const found=this.errors.find(elem=>elem.modal);if(found){this.currentErrorBlocking=found;this.errors=this.errors.filter(i=>i!==found);}}if(this.currentErrorNonblocking==null){const found=this.errors.find(elem=>!elem.modal);if(found){this.currentErrorNonblocking=found;this.errors=this.errors.filter(i=>i!==found);}}}createReport(error){error=Object.assign({},error);error.buttonCaptions=error.buttons.map(b=>b.caption);this.errors.push(error);if(error.modal){this.block();}this.updateErrors();}removeReport(id){if(this.currentErrorBlocking&&this.currentErrorBlocking.id===id){this.closeForegroundError(this.currentErrorBlocking);}else if(this.currentErrorNonblocking&&this.currentErrorNonblocking.id===id){this.closeForegroundError(this.currentErrorNonblocking);}else{for(let i=0;i<this.errors.length;i++){if(this.errors[i].id===id){this.errors.splice(i,1);}}}}block(){this.blockCount++;}unblock(){this.blockCount--;}closeForegroundError(error){if(error===this.currentErrorBlocking){this.unblock();this.currentErrorBlocking=null;}else{this.currentErrorNonblocking=null;}this.updateErrors();}onChoose(error,buttonCaption){const button=error.buttons.find(b=>b.caption===buttonCaption);if(button.closeReport){this.closeForegroundError(error);}error.subject.next(buttonCaption);}getClass(){const _class='popup-shadow-hover';if(this.blockCount===0){return _class+' hidden';}}static ɵfac=function ZluxPopupManagerComponent_Factory(t){return new(t||ZluxPopupManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_popup_manager_service__WEBPACK_IMPORTED_MODULE_3__.ZluxPopupManagerService));};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({type:ZluxPopupManagerComponent,selectors:[["zlux-popup-manager"]],decls:2,vars:2,consts:[["ngClass","popup-shadow-hover",4,"ngIf"],["ngClass","attachToCorner",3,"modal","autoShow","blockDisplay",4,"ngIf"],["ngClass","popup-shadow-hover"],["ngClass","attachToCenter",3,"modal","autoShow","ignoreVeil",4,"ngIf"],["ngClass","attachToCenter",3,"modal","autoShow","ignoreVeil"],[3,"action","severity","title","timestamp","buttons","theme","callToAction"],["ngClass","attachToCorner",3,"modal","autoShow","blockDisplay"]],template:function ZluxPopupManagerComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0,ZluxPopupManagerComponent_div_0_Template,2,1,"div",0)(1,ZluxPopupManagerComponent_zlux_popup_panel_1_Template,3,12,"zlux-popup-panel",1);}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf",ctx.blockCount>0);_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf",ctx.currentErrorNonblocking);}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass,_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf,_popup_panel_popup_panel_component__WEBPACK_IMPORTED_MODULE_1__.ZluxPopupPanelComponent,_error_report_error_report_component__WEBPACK_IMPORTED_MODULE_2__.ZluxErrorReportComponent],styles:["\n\n\n\n\n\n\n\n\n\n\n.popup-shadow-hover[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.attachToCenter[_ngcontent-%COMP%] {\n  min-width: 400px;\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.attachToCorner[_ngcontent-%COMP%] {\n  min-width: 400px;\n  max-width: 650px;\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxPopupManagerComponent;})();let ZluxPopupManagerModule=/*#__PURE__*/(()=>{class ZluxPopupManagerModule{static ɵfac=function ZluxPopupManagerModule_Factory(t){return new(t||ZluxPopupManagerModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({type:ZluxPopupManagerModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({providers:[_services_popup_manager_service__WEBPACK_IMPORTED_MODULE_3__.ZluxPopupManagerService],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule,_popup_panel_popup_panel_component__WEBPACK_IMPORTED_MODULE_1__.ZluxPopupPanelModule,_error_report_error_report_component__WEBPACK_IMPORTED_MODULE_2__.ZluxErrorReportModule]});}return ZluxPopupManagerModule;})();

/***/ }),

/***/ "./src/app/components/popup-panel/popup-panel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/popup-panel/popup-panel.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxPopupPanelComponent: () => (/* binding */ ZluxPopupPanelComponent),
/* harmony export */   ZluxPopupPanelModule: () => (/* binding */ ZluxPopupPanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _services_popup_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/popup-manager.service */ "./src/app/services/popup-manager.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
const _c0=["*"];const _c1=(a0,a1)=>({"popup-panel":true,"ignoreVeil":a0,"blockDisplay":a1});function ZluxPopupPanelComponent_div_0_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0,"div",1);_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();}if(rf&2){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1,_c1,ctx_r0.ignoreVeil,ctx_r0.blockDisplay));}}let ZluxPopupPanelComponent=/*#__PURE__*/(()=>{class ZluxPopupPanelComponent{popupManager;isActive=false;modal=false;autoShow=false;ignoreVeil=false;blockDisplay=false;constructor(popupManager){this.popupManager=popupManager;}ngOnInit(){if(this.autoShow){this.show();}}ngOnDestroy(){if(this.autoShow){this.hide();}}show(){if(this.modal){this.popupManager.block();}this.isActive=true;}hide(){if(this.modal){this.popupManager.unblock();}this.isActive=false;}static ɵfac=function ZluxPopupPanelComponent_Factory(t){return new(t||ZluxPopupPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_popup_manager_service__WEBPACK_IMPORTED_MODULE_1__.ZluxPopupManagerService));};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({type:ZluxPopupPanelComponent,selectors:[["zlux-popup-panel"]],inputs:{modal:"modal",autoShow:"autoShow",ignoreVeil:"ignoreVeil",blockDisplay:"blockDisplay"},ngContentSelectors:_c0,decls:1,vars:1,consts:[[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function ZluxPopupPanelComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0,ZluxPopupPanelComponent_div_0_Template,2,4,"div",0);}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf",ctx.isActive);}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass,_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],styles:["\n\n\n\n\n\n\n\n\n\n\n.popup-panel[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  z-index: 50;\n}\n\n.blockDisplay[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.ignoreVeil[_ngcontent-%COMP%] {\n  z-index: 200;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxPopupPanelComponent;})();let ZluxPopupPanelModule=/*#__PURE__*/(()=>{class ZluxPopupPanelModule{static ɵfac=function ZluxPopupPanelModule_Factory(t){return new(t||ZluxPopupPanelModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({type:ZluxPopupPanelModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({providers:[_services_popup_manager_service__WEBPACK_IMPORTED_MODULE_1__.ZluxPopupManagerService],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule]});}return ZluxPopupPanelModule;})();

/***/ }),

/***/ "./src/app/components/popup-window-button-area/popup-window-button-area.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/popup-window-button-area/popup-window-button-area.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxPopupWindowButtonAreaComponent: () => (/* binding */ ZluxPopupWindowButtonAreaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
const _c0=[[["",8,"popup-window-button-left"]],[["",8,"popup-window-button-center"]],"*"];const _c1=[".popup-window-button-left",".popup-window-button-center","*"];let ZluxPopupWindowButtonAreaComponent=/*#__PURE__*/(()=>{class ZluxPopupWindowButtonAreaComponent{static ɵfac=function ZluxPopupWindowButtonAreaComponent_Factory(t){return new(t||ZluxPopupWindowButtonAreaComponent)();};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxPopupWindowButtonAreaComponent,selectors:[["zlux-popup-window-button-area"]],ngContentSelectors:_c1,decls:7,vars:0,consts:[[1,"popup-window-button-area"],[1,"button-area-left"],[1,"button-area-center"],[1,"button-area-right"]],template:function ZluxPopupWindowButtonAreaComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",0)(1,"div",1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3,"div",2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4,1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5,"div",3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6,2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();}},styles:["\n\n\n\n\n\n\n\n\n\n\n.popup-window-button-area[_ngcontent-%COMP%] {\n  font-family: Helvetica, Open Sans, Arial, Lucida Grande, sans-serif;\n  flex: 1 0 auto;\n  padding: 1rem 1.5rem;\n  background-color: #f6f6f6;\n  display: flex;\n  flex-direction: row;\n}\n\n.button-area-left[_ngcontent-%COMP%] {\n  text-align: left;\n  flex: 1 1 100%;\n  white-space: nowrap;\n}\n\n.button-area-center[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1 1 100%;\n  white-space: nowrap;\n}\n\n.button-area-right[_ngcontent-%COMP%] {\n  text-align: right;\n  flex: 1 1 100%;\n  white-space: nowrap;\n}\n\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxPopupWindowButtonAreaComponent;})();

/***/ }),

/***/ "./src/app/components/popup-window/popup-window.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/popup-window/popup-window.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxPopupWindowComponent: () => (/* binding */ ZluxPopupWindowComponent),
/* harmony export */   ZluxPopupWindowModule: () => (/* binding */ ZluxPopupWindowModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _services_popup_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/popup-manager.service */ "./src/app/services/popup-manager.service.ts");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/const _c0=["*",[["zlux-popup-window-button-area"]]];const _c1=["*","zlux-popup-window-button-area"];function ZluxPopupWindowComponent_div_3_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",8);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ",ctx_r0.header," ");}}let ZluxPopupWindowComponent=/*#__PURE__*/(()=>{class ZluxPopupWindowComponent{popupManager;header="";dark=false;currentStyle={};maxWidth="";maxHeight="";onCloseWindow=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();popupStyle={};constructor(popupManager){this.popupManager=popupManager;}ngOnInit(){if(this.currentStyle){this.popupStyle=this.currentStyle;}if(this.maxWidth){this.popupStyle['max-width']=this.maxWidth;}if(this.maxHeight){this.popupStyle['max-height']=this.maxHeight;}this.popupManager.block();}ngOnDestroy(){this.popupManager.unblock();}static ɵfac=function ZluxPopupWindowComponent_Factory(t){return new(t||ZluxPopupWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_popup_manager_service__WEBPACK_IMPORTED_MODULE_2__.ZluxPopupManagerService));};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxPopupWindowComponent,selectors:[["zlux-popup-window"]],inputs:{header:"header",dark:"dark",currentStyle:"currentStyle",maxWidth:"maxWidth",maxHeight:"maxHeight"},outputs:{onCloseWindow:"onCloseWindow"},ngContentSelectors:_c1,decls:10,vars:10,consts:[[1,"popup-window-popup",3,"ngStyle"],[1,"top-header-hr"],[1,"popup-window-header-area"],["class","popup-window-header",4,"ngIf"],[1,"close-button",3,"click"],[1,"bottom-header"],[1,"bottom-header-hr"],[1,"popup-window-content"],[1,"popup-window-header"]],template:function ZluxPopupWindowComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"div",0);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1,"hr",1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2,"div",2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3,ZluxPopupWindowComponent_div_3_Template,2,1,"div",3);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4,"div",4);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",function ZluxPopupWindowComponent_Template_div_click_4_listener(){return ctx.onCloseWindow.emit();});_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5,"div",5);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6,"hr",6);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7,"div",7);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9,1);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle",ctx.popupStyle);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("popup-window-header-area-dark",ctx.dark);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.header);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("close-button-dark",ctx.dark);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bottom-header-dark",ctx.dark);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bottom-header-hr-dark",ctx.dark);}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf,_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],styles:["\n\n\n\n\n\n\n\n\n\n\n\n.top-header-hr[_ngcontent-%COMP%] {\n  height: 4px;\n  margin: 0;\n  background-color: #047cc0;\n  width: 100%;\n  border: none;\n  flex: none;\n}\n\n.top-hr[_ngcontent-%COMP%]:hover {\n  background-color: #009bef;\n}\n\n.bottom-header[_ngcontent-%COMP%] {}\n\n.bottom-header-dark[_ngcontent-%COMP%] {\n  background-color: #1a354d;\n}\n\n.bottom-header-hr[_ngcontent-%COMP%] {\n  margin: 0 2rem;\n  height: 1px;\n  background-color: #bdbabd;\n  border: none;\n  flex: none;\n}\n\n.bottom-header-hr-dark[_ngcontent-%COMP%] {\n  background-color: #516577;\n}\n\n.popup-window-header-area[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex: none;\n  height: 50px;\n  color: #777677;\n}\n\n.popup-window-header-area-dark[_ngcontent-%COMP%] {\n  background-color: #1a354d;\n  color: #C0BFC0;\n}\n\n.popup-window-header[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  font-size: 21px;\n  float: left;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  margin: 10px;\n  padding: 0;\n  flex: none;\n  box-sizing: border-box;\n  background-color: transparent;\n  transition: 0.5s;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE+SURBVChTdZK9SsRAFIUziQgBCwufQqwtMhEsUlhYWijYyLKdhbImwz6AxcZCLaxs7LYRrMQnmLCdVhY+g41gZ8h4znA3xF1zIMzcn2/m3ptRAVQUxRnXsixvuP4nY0zqnBvEcTyMAJyqQN3i29Naf1lrZ5LXygONe1FKbdc/9WaIzRtO+GYQ4LW5MMc+U9QB1mg75awvrxvAATXoI5T6uAQE7pwteIjK83wfNz0hYYUg9pdIGi0C3LcQhf4OEJ0SFJdXF6AiWb0whPdUpxGO2hUXgQcAYzG9/kAy1jvctCouUluJTl6rqvoQTxDKujwl3OB7Q6nob8q4T4Q81DOlE+XUkDb9jM9B1QO0TfO18P+J+RnW4U6IEgZ9AEUbh+ZibjRRcxhlWfbMp4E/fb8IzGUrW6VJuo7tbHI1Gf8CPGO2aC/OB9YAAAAASUVORK5CYII=) right top no-repeat;\n}\n\n.close-button[_ngcontent-%COMP%]:hover {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEzSURBVChTY2QAAjc3twIQvWvXrgkgGhtwcXGxYWJiSv7582cqM1BDDlBsIhB7KCsrf7x79+4JsCokANWwHcg0Y2Fh0WL69+/fBSDnC1iWgaHf1dU1BsoGAyQNPBARhqNg56FJ/Pn//3/k7t2712DRUAjyAlgTCACd6QOk1gMxCxCDNLYyMjIWA9koGkAMuCYQADotBKhwOZAJ0ogM4BpAgBlKg8G9e/euKSkpMQM1OkCFQGABUEMllA0GKJqgfpgKZLJBRMBABxiq54GhegvKZ2CC0thCaQEQ/wFikFOXg+RBgiAA1oQjlBKBgZEK5fOA5GEaGXFogHsamlr6ITyGN0BsC1TPlAxkYNUAAlB+KYTHIAK0PYJZRkZmKyhpAAVmo2uAAWAgHAOGqgCQeWL37t2VAPkucwax2AE0AAAAAElFTkSuQmCC);\n}\n\n.close-button[_ngcontent-%COMP%]:active {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAKVJREFUeNqM0qERwzAMhWGBDFP+ftgRAgMLOkCBQQfIBhkhA2S0wsCCV+L0nJzdFIhI+nyST2E7EAmRbEcrEFfEjOgC8UA4R/oB1tyzHBNG3H4AI1Kt8EYMLWA7yhf7DDY41sAOZTgU0K1da0uPBzAfe+Jk6W3UvooqYC5GXRHXHWr9EuJe5L6wCYoJUlF7IS6Rxzi7iGfRMwaiQyx/3N6EmGzHZwC0OE0+g64/lAAAAABJRU5ErkJggg==);\n}\n\n.close-button-dark[_ngcontent-%COMP%] {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAKdJREFUeNqM0rERgzAMhWEVDJMhGIGSMkUGSOEiA7BBRmAAhnj/PikpU7w0JudwNqRQI+nzST6F7UAkRLIdrUD0iBnRBeKOcI50ANbcs+wTRlwPgBGpVngjxhawHeWLQwYbnGrgB2U4FtCtXWtLTzsw73viZOlt1KGKKmAuRl0R/Q9q/RLiVuS+sAmKCVJReyEukcc4u4hH0TMFokMsf9zeE/G0HZ8BAH0w9jqGjwjJAAAAAElFTkSuQmCC) right top no-repeat;\n}\n\n.close-button-dark[_ngcontent-%COMP%]:hover {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAKBJREFUeNqM0qERwzAMhWGBDNMhMkJgYEEHKBDoAN4gI3iAjNafBRa8Eqen+OykQETS55N8MkkGOOCSrBfACGRgMOAJqISfgK30rHVCwP0ECPBW4QPMPSDJ4otTATtMLXBABc4Bqrdra+lUgVz32MXS+6hTEzVADqNuwHhAvV8CHiH3g10QJvBQewM3K2NcXcQr9CQDBmD94/YWYJFk3wEAnvMrzEHzZDcAAAAASUVORK5CYII=);\n}\n\n.close-button-dark[_ngcontent-%COMP%]:active {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAJlJREFUeNqMkqERwzAMRT/IMB0iIwQWFnSAAoMO4A06ggfIaIGBAS9EThXXdvrvPpH0bP07CRAQzOp4BBIwCHjxVegAq83MZQHg0QEAQq2xAfcWAMi/OBmQwVgDSkj2w8avTllroWMBpHJGF6HzqlMLKoHkVl2tf4LGRuinqx1gD5C7lqwFuMnWuLqIt5uJAgZg/uP2PmbtAwCI20K78eg6vAAAAABJRU5ErkJggg==);\n}\n\n.popup-window-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  max-height: 80%;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 0 10px rgba(1, 1, 1, 0.14);\n}\n\n@media (min-width: 1450px) {\n  .popup-window-popup[_ngcontent-%COMP%] {\n    width: 45%;\n    margin: 2em auto;\n  }\n}\n\n@media (max-width: 1449px) and (min-width: 1200px) {\n  .popup-window-popup[_ngcontent-%COMP%] {\n    width: 55%;\n    margin: 2em auto;\n  }\n}\n\n@media (max-width: 1199px) and (min-width: 1020px) {\n  .popup-window-popup[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 1.5em auto;\n  }\n}\n\n@media (max-width: 1019px) {\n  .popup-window-popup[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 1em auto;\n  }\n}\n\n.popup-window-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.popup-window-button[_ngcontent-%COMP%] {\n  font-size: large;\n  min-width: 5em;\n  border-radius: 0.5em;\n  padding: .5em 1em;\n}\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxPopupWindowComponent;})();let ZluxPopupWindowModule=/*#__PURE__*/(()=>{class ZluxPopupWindowModule{static ɵfac=function ZluxPopupWindowModule_Factory(t){return new(t||ZluxPopupWindowModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxPopupWindowModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({providers:[_services_popup_manager_service__WEBPACK_IMPORTED_MODULE_2__.ZluxPopupManagerService],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]});}return ZluxPopupWindowModule;})();

/***/ }),

/***/ "./src/app/components/tabbing/tabbing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tabbing/tabbing.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxTabbingComponent: () => (/* binding */ ZluxTabbingComponent),
/* harmony export */   ZluxTabbingModule: () => (/* binding */ ZluxTabbingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*///We leave this a component and not a service, as to give each component the ability
//to set their own max tabs without conflicting with other components.
let ZluxTabbingComponent=/*#__PURE__*/(()=>{class ZluxTabbingComponent{elementRef;hiddenIds="";hiddenPos="";totalTabs;activeTab;tabEvent;focusableArr=[];idArr=[];parentRef;constructor(elementRef){this.elementRef=elementRef;this.activeTab=0;this.tabEvent=false;this.parentRef=this.elementRef.nativeElement.parentElement;}ngAfterViewInit(){this.initValues(this.parentRef);}initValues(eleRef){if(eleRef){this.focusableArr=this.findAllFocusable(eleRef);this.idArr=this.getAllIds(this.focusableArr);this.totalTabs=this.focusableArr.length;this.tabEvent=false;this.activeTab=0;this.setFocusActiveTab(true);}}tabToNext(e){e.preventDefault();this.switchTab(true);}tabToPrev(e){e.preventDefault();this.switchTab(false);}switchTab(isForward){this.tabEvent=true;if(isForward){this.moveForward();}else{this.moveBackward();}this.setFocusActiveTab(isForward);}moveForward(){this.activeTab++;if(this.activeTab==this.totalTabs){this.activeTab=0;}}moveBackward(){if(this.activeTab==0){this.activeTab=this.totalTabs-1;}else{this.activeTab--;}}setFocusActiveTab(isForward){//TODO: Element.focus seems to fail at times. Logging the element shows it does not *seem* like a timing issue for
//the querySelector method, but rather the focus method, and adding a 200ms delay showed reliability when testing
if(this.focusableArr){let element=this.focusableArr[this.activeTab];if(element&&document.body.contains(element)){if(this.isElementDisabled(element)){this.switchTab(isForward);return;}this.focusElement(element);}else{element=this.checkAndAddElmAgain(this.idArr[this.activeTab],this.activeTab);if(!element){this.switchTab(isForward);return;}this.focusElement(element);}}}isElementDisabled(element){return element&&element.getAttribute("disabled")!=null;}focusElement(element){if(element)setTimeout(()=>{element.focus();},200);}checkAndAddElmAgain(selector,elmIndex){const root=this.parentRef||document;const newElm=root.querySelector(selector);this.focusableArr[elmIndex]=newElm;return newElm;}getElementSelector(elm){let selector='';if(elm){selector=this.getIdSelector(elm);if(selector==''){selector=this.getAttributeSelector(elm);selector+=this.getClassListSelector(elm);}}return selector;}getIdSelector(elm){let selector=elm.getAttribute('id')||'';if(selector>'')return`#${selector}`;return selector;}getAttributeSelector(elm){const attr=elm.attributes[0].name;const val=elm[attr]||'';const selector=`[${attr}='${val}']`;return selector;}getClassListSelector(elm){const selector='.'+Array.prototype.join.call(elm.classList,',.')||0;return selector;}syncActiveTab(elm){//focusin triggered because of switch tab not from input click
//no activeTab sync required
if(this.tabEvent){this.tabEvent=false;return;}this.activeTab=this.extractTabId(elm);}extractTabId(elm){if(this.focusableArr){const tabId=this.focusableArr.findIndex(e=>{return elm==e;});if(tabId&&tabId>0){return tabId;}}return this.activeTab;}findAllFocusable(domRef){let lists=[];if(domRef&&domRef['querySelectorAll']!=null){const selectorStr='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';lists=Array.from(domRef.querySelectorAll(selectorStr));lists=lists.sort((elm1,elm2)=>{let tab1=parseInt(elm1.getAttribute('tabindex'))||0;let tab2=parseInt(elm2.getAttribute('tabindex'))||0;return tab2-tab1;});}if(this.hiddenPos){this.hiddenPos.split(',').map(val=>parseInt(val)).forEach(val=>{lists.splice(val-1,0);});}return lists;}getAllIds(focusableArr){let lists=[];let duplicates=[];lists=focusableArr.map(elm=>this.getElementSelector(elm));if(this.hiddenPos&&this.hiddenIds){const idsArr=this.hiddenIds.split(',').map(s=>`#${s}`);lists.forEach((selector,idx)=>{if(idsArr.indexOf(selector)>=0){duplicates.push(idx);}});this.hiddenPos.split(',').map(val=>parseInt(val)).forEach((val,idx)=>{lists[val-1]=idsArr[idx];});}// remove duplicates
duplicates.forEach(dupIdx=>{focusableArr.splice(dupIdx,1);lists.splice(dupIdx,1);});return lists;}static ɵfac=function ZluxTabbingComponent_Factory(t){return new(t||ZluxTabbingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:ZluxTabbingComponent,selectors:[["zlux-tab-trap"]],hostBindings:function ZluxTabbingComponent_HostBindings(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.tab",function ZluxTabbingComponent_keydown_tab_HostBindingHandler($event){return ctx.tabToNext($event);},false,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.shift.tab",function ZluxTabbingComponent_keydown_shift_tab_HostBindingHandler($event){return ctx.tabToPrev($event);},false,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("focusin",function ZluxTabbingComponent_focusin_HostBindingHandler($event){return ctx.syncActiveTab($event.target);},false,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);}},inputs:{hiddenIds:"hiddenIds",hiddenPos:"hiddenPos"},standalone:true,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],decls:0,vars:0,template:function ZluxTabbingComponent_Template(rf,ctx){},encapsulation:2});}return ZluxTabbingComponent;})();let ZluxTabbingModule=/*#__PURE__*/(()=>{class ZluxTabbingModule{static ɵfac=function ZluxTabbingModule_Factory(t){return new(t||ZluxTabbingModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:ZluxTabbingModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]});}return ZluxTabbingModule;})();

/***/ }),

/***/ "./src/app/components/veil/veil.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/veil/veil.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxVeilComponent: () => (/* binding */ ZluxVeilComponent),
/* harmony export */   ZluxVeilModule: () => (/* binding */ ZluxVeilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
const _c0=a0=>({"state-active":a0});function ZluxVeilComponent_img_1_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0,"img",2);}}let ZluxVeilComponent=/*#__PURE__*/(()=>{class ZluxVeilComponent{isEnabled=false;enableSpinner=false;static ɵfac=function ZluxVeilComponent_Factory(t){return new(t||ZluxVeilComponent)();};static ɵcmp=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({type:ZluxVeilComponent,selectors:[["zlux-veil"]],inputs:{isEnabled:"isEnabled",enableSpinner:"enableSpinner"},decls:2,vars:4,consts:[[1,"veil",3,"ngClass"],["class","rotated","src","../../assets/images/veil-loaderrotate.png",4,"ngIf"],["src","../../assets/images/veil-loaderrotate.png",1,"rotated"]],template:function ZluxVeilComponent_Template(rf,ctx){if(rf&1){_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0,"div",0);_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1,ZluxVeilComponent_img_1_Template,1,0,"img",1);_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();}if(rf&2){_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2,_c0,ctx.isEnabled));_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf",ctx.enableSpinner);}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass,_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],styles:["\n\n\n\n\n\n\n\n\n\n\n.veil[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  opacity: 0.5;\n  z-index: 1;\n  background: gray;\n  background: rgba(0,0,0,0.5);\n  flex: 1 1 auto;\n  flex-direction: column;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.state-active[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.veil[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(50% - 21px);\n  top: calc(50% - 21px);\n  height: 42px;\n  width: 42px;\n  z-index: 2;\n  transform: rotate(360deg);\n}\n\n.rotated[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swirl 3s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_swirl {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n\n\n\n\n\n\n\n\n"]});}return ZluxVeilComponent;})();let ZluxVeilModule=/*#__PURE__*/(()=>{class ZluxVeilModule{static ɵfac=function ZluxVeilModule_Factory(t){return new(t||ZluxVeilModule)();};static ɵmod=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({type:ZluxVeilModule});static ɵinj=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule]});}return ZluxVeilModule;})();

/***/ }),

/***/ "./src/app/services/popup-manager.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/popup-manager.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxErrorSeverity: () => (/* binding */ ZluxErrorSeverity),
/* harmony export */   ZluxPopupManagerService: () => (/* binding */ ZluxPopupManagerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
function getSimpleID(){return Number(Math.random()+Date.now());}var ZluxErrorSeverity=/*#__PURE__*/function(ZluxErrorSeverity){ZluxErrorSeverity["ERROR"]="error";ZluxErrorSeverity["WARNING"]="warning";ZluxErrorSeverity["INFO"]="info";return ZluxErrorSeverity;}(ZluxErrorSeverity||{});let ZluxPopupManagerService=/*#__PURE__*/(()=>{class ZluxPopupManagerService{eventsSubject;listeners;events;logger=undefined;constructor(){this.listeners={};this.eventsSubject=new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();this.events=this.eventsSubject.asObservable();this.events.subscribe(({name,args})=>{if(this.listeners[name]){for(let listener of this.listeners[name]){listener(...args);}}});}setLogger(logger){this.logger=logger;}on(name,listener){if(!this.listeners[name]){this.listeners[name]=[];}this.listeners[name].push(listener);}broadcast(name,...args){this.eventsSubject.next({name,args});}processButtons(buttons){return buttons.map(button=>{if(typeof button==='string'){button={caption:button};}button.closeReport=button.closeReport!=null?button.closeReport:true;return button;});}block(){this.broadcast('block');}unblock(){this.broadcast('unblock');}getLoggerSeverity(severity){switch(severity){case ZluxErrorSeverity.ERROR:return this.logger.SEVERE;case ZluxErrorSeverity.WARNING:return this.logger.WARNING;case ZluxErrorSeverity.INFO:return this.logger.INFO;}}removeReport(id){this.broadcast('removeReport',id);}createErrorReport(severity,title,text,options){options=options||{};let buttons=options.buttons||["Close"];let timestamp;if(options.timestamp==false){timestamp=undefined;}else{timestamp=options.timestamp||new Date();}buttons=this.processButtons(buttons);const subject=new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();let errorReport={severity,title,text,buttons,subject,timestamp,id:getSimpleID(),modal:options.blocking||false,theme:options.theme||"",style:options.style||{},callToAction:options.callToAction||false};//the object will be shallow cloned
this.broadcast('createReport',errorReport);if(this.logger){this.logger.log(this.getLoggerSeverity(severity),text);}return errorReport;}reportError(severity,title,text,options){options=options||{};let buttons=options.buttons||["Close"];const timestamp=options.timestamp||new Date();buttons=this.processButtons(buttons);const subject=new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();this.broadcast('createReport',{severity,title,text,buttons,subject,timestamp,id:getSimpleID(),modal:options.blocking||false});if(this.logger){this.logger.log(this.getLoggerSeverity(severity),text);}return subject;}static ɵfac=function ZluxPopupManagerService_Factory(t){return new(t||ZluxPopupManagerService)();};static ɵprov=/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:ZluxPopupManagerService,factory:ZluxPopupManagerService.ɵfac});}return ZluxPopupManagerService;})();

/***/ }),

/***/ "./src/app/assets/css/inputtext.module.css":
/*!*************************************************!*\
  !*** ./src/app/assets/css/inputtext.module.css ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "text-input": () => (/* binding */ _1),
/* harmony export */   "text-input-dark": () => (/* binding */ _2)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

.O1JXOesCmvg0xmSU21iY {
  flex: 1 1 auto;
  background: transparent;
  border: 1px solid;
  border-radius: 2px;
  height: 32px;
  padding: 0.75rem 1rem;
  margin: 0 0 0 1em;
  font-family: Helvetica, Open Sans, Arial, Lucida Grande, sans-serif;
}

.OtqJwQMvrgehMTa56sYb {
  border: 1px solid #ececec;
  color: #ececec;
}

.O1JXOesCmvg0xmSU21iY:hover:not(:disabled),
.O1JXOesCmvg0xmSU21iY:active:not(:disabled) {
  border: 1px solid rgb(21, 124, 189);
}

.OtqJwQMvrgehMTa56sYb:hover:not(:disabled),
.OtqJwQMvrgehMTa56sYb:active:not(:disabled) {
  border: 1px solid #56acf2;
}

.O1JXOesCmvg0xmSU21iY:disabled {
  opacity: 0.6;
  background-color: rgba(119, 118, 119, 0.117647058823529);
}

.OtqJwQMvrgehMTa56sYb:disabled {
  opacity: 0.6;
  background-color: #464646;
}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

`, "",{"version":3,"sources":["webpack://./src/app/assets/css/inputtext.module.css"],"names":[],"mappings":";;AAEA;;;;;;;;CAQC;;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,mEAAmE;AACrE;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,wDAAwD;AAC1D;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;;AAGA;;;;;;;;CAQC","sourcesContent":["\n\n/*\n  This program and the accompanying materials are\n  made available under the terms of the Eclipse Public License v2.0 which accompanies\n  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html\n  \n  SPDX-License-Identifier: EPL-2.0\n  \n  Copyright Contributors to the Zowe Project.\n*/\n\n:local(.text-input) {\n  flex: 1 1 auto;\n  background: transparent;\n  border: 1px solid;\n  border-radius: 2px;\n  height: 32px;\n  padding: 0.75rem 1rem;\n  margin: 0 0 0 1em;\n  font-family: Helvetica, Open Sans, Arial, Lucida Grande, sans-serif;\n}\n\n:local(.text-input-dark) {\n  border: 1px solid #ececec;\n  color: #ececec;\n}\n\n:local(.text-input:hover:not(:disabled)),\n:local(.text-input:active:not(:disabled)) {\n  border: 1px solid rgb(21, 124, 189);\n}\n\n:local(.text-input-dark:hover:not(:disabled)),\n:local(.text-input-dark:active:not(:disabled)) {\n  border: 1px solid #56acf2;\n}\n\n:local(.text-input:disabled) {\n  opacity: 0.6;\n  background-color: rgba(119, 118, 119, 0.117647058823529);\n}\n\n:local(.text-input-dark:disabled) {\n  opacity: 0.6;\n  background-color: #464646;\n}\n\n\n/*\n  This program and the accompanying materials are\n  made available under the terms of the Eclipse Public License v2.0 which accompanies\n  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html\n  \n  SPDX-License-Identifier: EPL-2.0\n  \n  Copyright Contributors to the Zowe Project.\n*/\n\n"],"sourceRoot":""}]);
// Exports
var _1 = `O1JXOesCmvg0xmSU21iY`;

var _2 = `OtqJwQMvrgehMTa56sYb`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   errorNotification: () => (/* binding */ errorNotification),
/* harmony export */   nextNotification: () => (/* binding */ nextNotification)
/* harmony export */ });
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/reportUnhandledError */ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/noop */ "./node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationFactories */ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/errorContext */ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js");









var Subscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && _config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
        (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_5__.captureError)(error);
    }
    else {
        (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;
    onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
    error: defaultErrorHandler,
    complete: _util_noop__WEBPACK_IMPORTED_MODULE_8__.noop,
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/arrRemove */ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {
                                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/config.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");


function map(project, thisArg) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
        }
        return setTimeout.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([handler, timeout], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/errorContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: () => (/* binding */ captureError),
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./node_modules/rxjs/dist/esm5/internal/config.js");

var context = null;
function errorContext(cb) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/lift.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/lift.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function hasLift(source) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");


function reportUnhandledError(err) {
    _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {
        var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common_d12e0fe1__;

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

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "./node_modules/@angular/forms/fesm2022/forms.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@angular/forms/fesm2022/forms.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractControl: () => (/* binding */ AbstractControl),
/* harmony export */   AbstractControlDirective: () => (/* binding */ AbstractControlDirective),
/* harmony export */   AbstractFormGroupDirective: () => (/* binding */ AbstractFormGroupDirective),
/* harmony export */   COMPOSITION_BUFFER_MODE: () => (/* binding */ COMPOSITION_BUFFER_MODE),
/* harmony export */   CheckboxControlValueAccessor: () => (/* binding */ CheckboxControlValueAccessor),
/* harmony export */   CheckboxRequiredValidator: () => (/* binding */ CheckboxRequiredValidator),
/* harmony export */   ControlContainer: () => (/* binding */ ControlContainer),
/* harmony export */   DefaultValueAccessor: () => (/* binding */ DefaultValueAccessor),
/* harmony export */   EmailValidator: () => (/* binding */ EmailValidator),
/* harmony export */   FormArray: () => (/* binding */ FormArray),
/* harmony export */   FormArrayName: () => (/* binding */ FormArrayName),
/* harmony export */   FormBuilder: () => (/* binding */ FormBuilder),
/* harmony export */   FormControl: () => (/* binding */ FormControl),
/* harmony export */   FormControlDirective: () => (/* binding */ FormControlDirective),
/* harmony export */   FormControlName: () => (/* binding */ FormControlName),
/* harmony export */   FormGroup: () => (/* binding */ FormGroup),
/* harmony export */   FormGroupDirective: () => (/* binding */ FormGroupDirective),
/* harmony export */   FormGroupName: () => (/* binding */ FormGroupName),
/* harmony export */   FormRecord: () => (/* binding */ FormRecord),
/* harmony export */   FormsModule: () => (/* binding */ FormsModule),
/* harmony export */   MaxLengthValidator: () => (/* binding */ MaxLengthValidator),
/* harmony export */   MaxValidator: () => (/* binding */ MaxValidator),
/* harmony export */   MinLengthValidator: () => (/* binding */ MinLengthValidator),
/* harmony export */   MinValidator: () => (/* binding */ MinValidator),
/* harmony export */   NG_ASYNC_VALIDATORS: () => (/* binding */ NG_ASYNC_VALIDATORS),
/* harmony export */   NG_VALIDATORS: () => (/* binding */ NG_VALIDATORS),
/* harmony export */   NG_VALUE_ACCESSOR: () => (/* binding */ NG_VALUE_ACCESSOR),
/* harmony export */   NgControl: () => (/* binding */ NgControl),
/* harmony export */   NgControlStatus: () => (/* binding */ NgControlStatus),
/* harmony export */   NgControlStatusGroup: () => (/* binding */ NgControlStatusGroup),
/* harmony export */   NgForm: () => (/* binding */ NgForm),
/* harmony export */   NgModel: () => (/* binding */ NgModel),
/* harmony export */   NgModelGroup: () => (/* binding */ NgModelGroup),
/* harmony export */   NgSelectOption: () => (/* binding */ NgSelectOption),
/* harmony export */   NonNullableFormBuilder: () => (/* binding */ NonNullableFormBuilder),
/* harmony export */   NumberValueAccessor: () => (/* binding */ NumberValueAccessor),
/* harmony export */   PatternValidator: () => (/* binding */ PatternValidator),
/* harmony export */   RadioControlValueAccessor: () => (/* binding */ RadioControlValueAccessor),
/* harmony export */   RangeValueAccessor: () => (/* binding */ RangeValueAccessor),
/* harmony export */   ReactiveFormsModule: () => (/* binding */ ReactiveFormsModule),
/* harmony export */   RequiredValidator: () => (/* binding */ RequiredValidator),
/* harmony export */   SelectControlValueAccessor: () => (/* binding */ SelectControlValueAccessor),
/* harmony export */   SelectMultipleControlValueAccessor: () => (/* binding */ SelectMultipleControlValueAccessor),
/* harmony export */   UntypedFormArray: () => (/* binding */ UntypedFormArray),
/* harmony export */   UntypedFormBuilder: () => (/* binding */ UntypedFormBuilder),
/* harmony export */   UntypedFormControl: () => (/* binding */ UntypedFormControl),
/* harmony export */   UntypedFormGroup: () => (/* binding */ UntypedFormGroup),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   isFormArray: () => (/* binding */ isFormArray),
/* harmony export */   isFormControl: () => (/* binding */ isFormControl),
/* harmony export */   isFormGroup: () => (/* binding */ isFormGroup),
/* harmony export */   isFormRecord: () => (/* binding */ isFormRecord),
/* harmony export */   "ɵInternalFormsSharedModule": () => (/* binding */ ɵInternalFormsSharedModule),
/* harmony export */   "ɵNgNoValidate": () => (/* binding */ ɵNgNoValidate),
/* harmony export */   "ɵNgSelectMultipleOption": () => (/* binding */ ɵNgSelectMultipleOption)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/**
 * @license Angular v17.3.12
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * Base class for all ControlValueAccessor classes defined in Forms package.
 * Contains common logic and utility functions.
 *
 * Note: this is an *internal-only* class and should not be extended or used directly in
 * applications code.
 */
class BaseControlValueAccessor {
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * The registered callback function called when a change or input event occurs on the input
         * element.
         * @nodoc
         */
        this.onChange = (_) => { };
        /**
         * The registered callback function called when a blur event occurs on the input element.
         * @nodoc
         */
        this.onTouched = () => { };
    }
    /**
     * Helper method that sets a property on a target element using the current Renderer
     * implementation.
     * @nodoc
     */
    setProperty(key, value) {
        this._renderer.setProperty(this._elementRef.nativeElement, key, value);
    }
    /**
     * Registers a function called when the control is touched.
     * @nodoc
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Sets the "disabled" property on the range input element.
     * @nodoc
     */
    setDisabledState(isDisabled) {
        this.setProperty('disabled', isDisabled);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: BaseControlValueAccessor, deps: [{ token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: BaseControlValueAccessor, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: BaseControlValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], ctorParameters: () => [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }] });
/**
 * Base class for all built-in ControlValueAccessor classes (except DefaultValueAccessor, which is
 * used in case no other CVAs can be found). We use this class to distinguish between default CVA,
 * built-in CVAs and custom CVAs, so that Forms logic can recognize built-in CVAs and treat custom
 * ones with higher priority (when both built-in and custom CVAs are present).
 *
 * Note: this is an *internal-only* class and should not be extended or used directly in
 * applications code.
 */
class BuiltInControlValueAccessor extends BaseControlValueAccessor {
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: BuiltInControlValueAccessor, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: BuiltInControlValueAccessor, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: BuiltInControlValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }] });
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */
const NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(ngDevMode ? 'NgValueAccessor' : '');

const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CheckboxControlValueAccessor),
    multi: true,
};
/**
 * @description
 * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
 * element.
 *
 * @usageNotes
 *
 * ### Using a checkbox with a reactive form.
 *
 * The following example shows how to use a checkbox with a reactive form.
 *
 * ```ts
 * const rememberLoginControl = new FormControl();
 * ```
 *
 * ```
 * <input type="checkbox" [formControl]="rememberLoginControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
    /**
     * Sets the "checked" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        this.setProperty('checked', value);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: CheckboxControlValueAccessor, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]", host: { listeners: { "change": "onChange($event.target.checked)", "blur": "onTouched()" } }, providers: [CHECKBOX_VALUE_ACCESSOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: CheckboxControlValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                }]
        }] });

const DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => DefaultValueAccessor),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    const userAgent = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * @description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * @publicApi
 */
const COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(ngDevMode ? 'CompositionEventMode' : '');
/**
 * The default `ControlValueAccessor` for writing a value and listening to changes on input
 * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * {@searchKeywords ngDefaultControl}
 *
 * @usageNotes
 *
 * ### Using the default value accessor
 *
 * The following example shows how to use an input element that activates the default value accessor
 * (in this case, a text field).
 *
 * ```ts
 * const firstNameControl = new FormControl();
 * ```
 *
 * ```
 * <input type="text" [formControl]="firstNameControl">
 * ```
 *
 * This value accessor is used by default for `<input type="text">` and `<textarea>` elements, but
 * you could also use it for custom components that have similar behavior and do not require special
 * processing. In order to attach the default value accessor to a custom element, add the
 * `ngDefaultControl` attribute as shown below.
 *
 * ```
 * <custom-input-component ngDefaultControl [(ngModel)]="value"></custom-input-component>
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class DefaultValueAccessor extends BaseControlValueAccessor {
    constructor(renderer, elementRef, _compositionMode) {
        super(renderer, elementRef);
        this._compositionMode = _compositionMode;
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        const normalizedValue = value == null ? '' : value;
        this.setProperty('value', normalizedValue);
    }
    /** @internal */
    _handleInput(value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    }
    /** @internal */
    _compositionStart() {
        this._composing = true;
    }
    /** @internal */
    _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: DefaultValueAccessor, deps: [{ token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { token: COMPOSITION_BUFFER_MODE, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]", host: { listeners: { "input": "$any(this)._handleInput($event.target.value)", "blur": "onTouched()", "compositionstart": "$any(this)._compositionStart()", "compositionend": "$any(this)._compositionEnd($event.target.value)" } }, providers: [DEFAULT_VALUE_ACCESSOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: DefaultValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                    // TODO: vsavkin replace the above selector with the one below it once
                    // https://github.com/angular/angular/issues/3011 is implemented
                    // selector: '[ngModel],[formControl],[formControlName]',
                    host: {
                        '(input)': '$any(this)._handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '$any(this)._compositionStart()',
                        '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                    },
                    providers: [DEFAULT_VALUE_ACCESSOR]
                }]
        }], ctorParameters: () => [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [COMPOSITION_BUFFER_MODE]
                }] }] });

function isEmptyInputValue(value) {
    /**
     * Check if the object is a string or array before evaluating the length attribute.
     * This avoids falsely rejecting objects that contain a custom length attribute.
     * For example, the object {id: 1, length: 0, width: 0} should not be returned as empty.
     */
    return value == null ||
        ((typeof value === 'string' || Array.isArray(value)) && value.length === 0);
}
function hasValidLength(value) {
    // non-strict comparison is intentional, to check for both `null` and `undefined` values
    return value != null && typeof value.length === 'number';
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with
 * `AbstractControl`s.
 *
 * @see {@link NG_ASYNC_VALIDATORS}
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 * @publicApi
 */
const NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(ngDevMode ? 'NgValidators' : '');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with
 * `AbstractControl`s.
 *
 * @see {@link NG_VALIDATORS}
 *
 * @usageNotes
 *
 * ### Provide a custom async validator directive
 *
 * The following example implements the `AsyncValidator` interface to create an
 * async validator directive with a custom error key.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customAsyncValidator]',
 *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
 * true}]
 * })
 * class CustomAsyncValidatorDirective implements AsyncValidator {
 *   validate(control: AbstractControl): Promise<ValidationErrors|null> {
 *     return Promise.resolve({'custom': true});
 *   }
 * }
 * ```
 *
 * @publicApi
 */
const NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(ngDevMode ? 'NgAsyncValidators' : '');
/**
 * A regular expression that matches valid e-mail addresses.
 *
 * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
 * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
 *   punctuation symbols).
 * - `local-part` cannot begin or end with a period (`.`).
 * - `local-part` cannot be longer than 64 characters.
 * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
 *   `foo.com`.
 * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
 *   periods (`.`)).
 * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
 * - A `label` cannot be longer than 63 characters.
 * - The whole address cannot be longer than 254 characters.
 *
 * ## Implementation background
 *
 * This regexp was ported over from AngularJS (see there for git history):
 * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
 * It is based on the
 * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
 * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
 * lengths of different parts of the address). The main differences from the WHATWG version are:
 *   - Disallow `local-part` to begin or end with a period (`.`).
 *   - Disallow `local-part` length to exceed 64 characters.
 *   - Disallow total address length to exceed 254 characters.
 *
 * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
 */
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 * @publicApi
 */
class Validators {
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static min(min) {
        return minValidator(min);
    }
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static max(max) {
        return maxValidator(max);
    }
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static required(control) {
        return requiredValidator(control);
    }
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('some value', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static requiredTrue(control) {
        return requiredTrueValidator(control);
    }
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * Tests the value using a [regular
     * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
     * pattern suitable for common use cases. The pattern is based on the definition of a valid email
     * address in the [WHATWG HTML
     * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address).
     *
     * The differences from the WHATWG version include:
     * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
     * - Disallow `local-part` to be longer than 64 characters.
     * - Disallow the whole address to be longer than 254 characters.
     *
     * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
     * validate the value against a different pattern.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static email(control) {
        return emailValidator(control);
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays. The
     * `minLength` validator logic is also not invoked for values when their `length` property is 0
     * (for example in case of an empty string or an empty array), to support optional controls. You
     * can use the standard `required` validator if empty values should not be considered valid.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` property if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static minLength(minLength) {
        return minLengthValidator(minLength);
    }
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
     * only for types that have a numeric `length` property, such as strings or arrays.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static maxLength(maxLength) {
        return maxLengthValidator(maxLength);
    }
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * ### Pattern matching with the global or sticky flag
     *
     * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
     * can produce different results on the same input when validations are run consecutively. This is
     * due to how the behavior of `RegExp.prototype.test` is
     * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
     * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
     * Due to this behavior, it is recommended that when using
     * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
     * flag enabled.
     *
     * ```typescript
     * // Not recommended (since the `g` flag is used)
     * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
     *
     * // Good
     * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
     * ```
     *
     * @param pattern A regular expression to be used as is to test the values, or a string.
     * If a string is passed, the `^` character is prepended and the `$` character is
     * appended to the provided string (if not already present), and the resulting regular
     * expression is used to test the values.
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static pattern(pattern) {
        return patternValidator(pattern);
    }
    /**
     * @description
     * Validator that performs no operation.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static nullValidator(control) {
        return nullValidator(control);
    }
    static compose(validators) {
        return compose(validators);
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     *
     * @see {@link updateValueAndValidity()}
     *
     */
    static composeAsync(validators) {
        return composeAsync(validators);
    }
}
/**
 * Validator that requires the control's value to be greater than or equal to the provided number.
 * See `Validators.min` for additional information.
 */
function minValidator(min) {
    return (control) => {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
            return null; // don't validate empty values to allow optional controls
        }
        const value = parseFloat(control.value);
        // Controls with NaN values after parsing should be treated as not having a
        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
        return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
    };
}
/**
 * Validator that requires the control's value to be less than or equal to the provided number.
 * See `Validators.max` for additional information.
 */
function maxValidator(max) {
    return (control) => {
        if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
            return null; // don't validate empty values to allow optional controls
        }
        const value = parseFloat(control.value);
        // Controls with NaN values after parsing should be treated as not having a
        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
        return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
    };
}
/**
 * Validator that requires the control have a non-empty value.
 * See `Validators.required` for additional information.
 */
function requiredValidator(control) {
    return isEmptyInputValue(control.value) ? { 'required': true } : null;
}
/**
 * Validator that requires the control's value be true. This validator is commonly
 * used for required checkboxes.
 * See `Validators.requiredTrue` for additional information.
 */
function requiredTrueValidator(control) {
    return control.value === true ? null : { 'required': true };
}
/**
 * Validator that requires the control's value pass an email validation test.
 * See `Validators.email` for additional information.
 */
function emailValidator(control) {
    if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
}
/**
 * Validator that requires the length of the control's value to be greater than or equal
 * to the provided minimum length. See `Validators.minLength` for additional information.
 */
function minLengthValidator(minLength) {
    return (control) => {
        if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
            // don't validate empty values to allow optional controls
            // don't validate values without `length` property
            return null;
        }
        return control.value.length < minLength ?
            { 'minlength': { 'requiredLength': minLength, 'actualLength': control.value.length } } :
            null;
    };
}
/**
 * Validator that requires the length of the control's value to be less than or equal
 * to the provided maximum length. See `Validators.maxLength` for additional information.
 */
function maxLengthValidator(maxLength) {
    return (control) => {
        return hasValidLength(control.value) && control.value.length > maxLength ?
            { 'maxlength': { 'requiredLength': maxLength, 'actualLength': control.value.length } } :
            null;
    };
}
/**
 * Validator that requires the control's value to match a regex pattern.
 * See `Validators.pattern` for additional information.
 */
function patternValidator(pattern) {
    if (!pattern)
        return nullValidator;
    let regex;
    let regexStr;
    if (typeof pattern === 'string') {
        regexStr = '';
        if (pattern.charAt(0) !== '^')
            regexStr += '^';
        regexStr += pattern;
        if (pattern.charAt(pattern.length - 1) !== '$')
            regexStr += '$';
        regex = new RegExp(regexStr);
    }
    else {
        regexStr = pattern.toString();
        regex = pattern;
    }
    return (control) => {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        const value = control.value;
        return regex.test(value) ? null :
            { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
    };
}
/**
 * Function that has `ValidatorFn` shape, but performs no operation.
 */
function nullValidator(control) {
    return null;
}
function isPresent(o) {
    return o != null;
}
function toObservable(value) {
    const obs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(value) ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(value) : value;
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && !((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisSubscribable"])(obs))) {
        let errorMessage = `Expected async validator to return Promise or Observable.`;
        // A synchronous validator will return object or null.
        if (typeof value === 'object') {
            errorMessage +=
                ' Are you using a synchronous validator where an async validator is expected?';
        }
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](-1101 /* RuntimeErrorCode.WRONG_VALIDATOR_RETURN_TYPE */, errorMessage);
    }
    return obs;
}
function mergeErrors(arrayOfErrors) {
    let res = {};
    arrayOfErrors.forEach((errors) => {
        res = errors != null ? { ...res, ...errors } : res;
    });
    return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
    return validators.map(validator => validator(control));
}
function isValidatorFn(validator) {
    return !validator.validate;
}
/**
 * Given the list of validators that may contain both functions as well as classes, return the list
 * of validator functions (convert validator classes into validator functions). This is needed to
 * have consistent structure in validators list before composing them.
 *
 * @param validators The set of validators that may contain validators both in plain function form
 *     as well as represented as a validator class.
 */
function normalizeValidators(validators) {
    return validators.map(validator => {
        return isValidatorFn(validator) ?
            validator :
            ((c) => validator.validate(c));
    });
}
/**
 * Merges synchronous validators into a single validator function.
 * See `Validators.compose` for additional information.
 */
function compose(validators) {
    if (!validators)
        return null;
    const presentValidators = validators.filter(isPresent);
    if (presentValidators.length == 0)
        return null;
    return function (control) {
        return mergeErrors(executeValidators(control, presentValidators));
    };
}
/**
 * Accepts a list of validators of different possible shapes (`Validator` and `ValidatorFn`),
 * normalizes the list (converts everything to `ValidatorFn`) and merges them into a single
 * validator function.
 */
function composeValidators(validators) {
    return validators != null ? compose(normalizeValidators(validators)) : null;
}
/**
 * Merges asynchronous validators into a single validator function.
 * See `Validators.composeAsync` for additional information.
 */
function composeAsync(validators) {
    if (!validators)
        return null;
    const presentValidators = validators.filter(isPresent);
    if (presentValidators.length == 0)
        return null;
    return function (control) {
        const observables = executeValidators(control, presentValidators).map(toObservable);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(observables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(mergeErrors));
    };
}
/**
 * Accepts a list of async validators of different possible shapes (`AsyncValidator` and
 * `AsyncValidatorFn`), normalizes the list (converts everything to `AsyncValidatorFn`) and merges
 * them into a single validator function.
 */
function composeAsyncValidators(validators) {
    return validators != null ? composeAsync(normalizeValidators(validators)) :
        null;
}
/**
 * Merges raw control validators with a given directive validator and returns the combined list of
 * validators as an array.
 */
function mergeValidators(controlValidators, dirValidator) {
    if (controlValidators === null)
        return [dirValidator];
    return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] :
        [controlValidators, dirValidator];
}
/**
 * Retrieves the list of raw synchronous validators attached to a given control.
 */
function getControlValidators(control) {
    return control._rawValidators;
}
/**
 * Retrieves the list of raw asynchronous validators attached to a given control.
 */
function getControlAsyncValidators(control) {
    return control._rawAsyncValidators;
}
/**
 * Accepts a singleton validator, an array, or null, and returns an array type with the provided
 * validators.
 *
 * @param validators A validator, validators, or null.
 * @returns A validators array.
 */
function makeValidatorsArray(validators) {
    if (!validators)
        return [];
    return Array.isArray(validators) ? validators : [validators];
}
/**
 * Determines whether a validator or validators array has a given validator.
 *
 * @param validators The validator or validators to compare against.
 * @param validator The validator to check.
 * @returns Whether the validator is present.
 */
function hasValidator(validators, validator) {
    return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
/**
 * Combines two arrays of validators into one. If duplicates are provided, only one will be added.
 *
 * @param validators The new validators.
 * @param currentValidators The base array of current validators.
 * @returns An array of validators.
 */
function addValidators(validators, currentValidators) {
    const current = makeValidatorsArray(currentValidators);
    const validatorsToAdd = makeValidatorsArray(validators);
    validatorsToAdd.forEach((v) => {
        // Note: if there are duplicate entries in the new validators array,
        // only the first one would be added to the current list of validators.
        // Duplicate ones would be ignored since `hasValidator` would detect
        // the presence of a validator function and we update the current list in place.
        if (!hasValidator(current, v)) {
            current.push(v);
        }
    });
    return current;
}
function removeValidators(validators, currentValidators) {
    return makeValidatorsArray(currentValidators).filter(v => !hasValidator(validators, v));
}

/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 * @publicApi
 */
class AbstractControlDirective {
    constructor() {
        /**
         * Set of synchronous validators as they were provided while calling `setValidators` function.
         * @internal
         */
        this._rawValidators = [];
        /**
         * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
         * function.
         * @internal
         */
        this._rawAsyncValidators = [];
        /*
         * The set of callbacks to be invoked when directive instance is being destroyed.
         */
        this._onDestroyCallbacks = [];
    }
    /**
     * @description
     * Reports the value of the control if it is present, otherwise null.
     */
    get value() {
        return this.control ? this.control.value : null;
    }
    /**
     * @description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     */
    get valid() {
        return this.control ? this.control.valid : null;
    }
    /**
     * @description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     */
    get invalid() {
        return this.control ? this.control.invalid : null;
    }
    /**
     * @description
     * Reports whether a control is pending, meaning that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     */
    get pending() {
        return this.control ? this.control.pending : null;
    }
    /**
     * @description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     */
    get disabled() {
        return this.control ? this.control.disabled : null;
    }
    /**
     * @description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     */
    get enabled() {
        return this.control ? this.control.enabled : null;
    }
    /**
     * @description
     * Reports the control's validation errors. If the control is not present, null is returned.
     */
    get errors() {
        return this.control ? this.control.errors : null;
    }
    /**
     * @description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     */
    get pristine() {
        return this.control ? this.control.pristine : null;
    }
    /**
     * @description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     */
    get dirty() {
        return this.control ? this.control.dirty : null;
    }
    /**
     * @description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */
    get touched() {
        return this.control ? this.control.touched : null;
    }
    /**
     * @description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     */
    get status() {
        return this.control ? this.control.status : null;
    }
    /**
     * @description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     */
    get untouched() {
        return this.control ? this.control.untouched : null;
    }
    /**
     * @description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     */
    get statusChanges() {
        return this.control ? this.control.statusChanges : null;
    }
    /**
     * @description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     */
    get valueChanges() {
        return this.control ? this.control.valueChanges : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return null;
    }
    /**
     * Sets synchronous validators for this directive.
     * @internal
     */
    _setValidators(validators) {
        this._rawValidators = validators || [];
        this._composedValidatorFn = composeValidators(this._rawValidators);
    }
    /**
     * Sets asynchronous validators for this directive.
     * @internal
     */
    _setAsyncValidators(validators) {
        this._rawAsyncValidators = validators || [];
        this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * @description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     */
    get validator() {
        return this._composedValidatorFn || null;
    }
    /**
     * @description
     * Asynchronous validator function composed of all the asynchronous validators registered with
     * this directive.
     */
    get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
    }
    /**
     * Internal function to register callbacks that should be invoked
     * when directive instance is being destroyed.
     * @internal
     */
    _registerOnDestroy(fn) {
        this._onDestroyCallbacks.push(fn);
    }
    /**
     * Internal function to invoke all registered "on destroy" callbacks.
     * Note: calling this function also clears the list of callbacks.
     * @internal
     */
    _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach(fn => fn());
        this._onDestroyCallbacks = [];
    }
    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */
    reset(value = undefined) {
        if (this.control)
            this.control.reset(value);
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */
    hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    }
}

/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */
class ControlContainer extends AbstractControlDirective {
    /**
     * @description
     * The top-level form directive for the control.
     */
    get formDirective() {
        return null;
    }
    /**
     * @description
     * The path to this group.
     */
    get path() {
        return null;
    }
}

/**
 * @description
 * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * @publicApi
 */
class NgControl extends AbstractControlDirective {
    constructor() {
        super(...arguments);
        /**
         * @description
         * The parent form for the control.
         *
         * @internal
         */
        this._parent = null;
        /**
         * @description
         * The name for the control
         */
        this.name = null;
        /**
         * @description
         * The value accessor for the control
         */
        this.valueAccessor = null;
    }
}

// DO NOT REFACTOR!
// Each status is represented by a separate function to make sure that
// advanced Closure Compiler optimizations related to property renaming
// can work correctly.
class AbstractControlStatus {
    constructor(cd) {
        this._cd = cd;
    }
    get isTouched() {
        return !!this._cd?.control?.touched;
    }
    get isUntouched() {
        return !!this._cd?.control?.untouched;
    }
    get isPristine() {
        return !!this._cd?.control?.pristine;
    }
    get isDirty() {
        return !!this._cd?.control?.dirty;
    }
    get isValid() {
        return !!this._cd?.control?.valid;
    }
    get isInvalid() {
        return !!this._cd?.control?.invalid;
    }
    get isPending() {
        return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
        // We check for the `submitted` field from `NgForm` and `FormGroupDirective` classes, but
        // we avoid instanceof checks to prevent non-tree-shakable references to those types.
        return !!this._cd?.submitted;
    }
}
const ngControlStatusHost = {
    '[class.ng-untouched]': 'isUntouched',
    '[class.ng-touched]': 'isTouched',
    '[class.ng-pristine]': 'isPristine',
    '[class.ng-dirty]': 'isDirty',
    '[class.ng-valid]': 'isValid',
    '[class.ng-invalid]': 'isInvalid',
    '[class.ng-pending]': 'isPending',
};
const ngGroupStatusHost = {
    ...ngControlStatusHost,
    '[class.ng-submitted]': 'isSubmitted',
};
/**
 * @description
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status.
 *
 * @usageNotes
 *
 * ### CSS classes applied
 *
 * The following classes are applied as the properties become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NgControlStatus extends AbstractControlStatus {
    constructor(cd) {
        super(cd);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgControlStatus, deps: [{ token: NgControl, self: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: NgControlStatus, selector: "[formControlName],[ngModel],[formControl]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending" } }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgControlStatus, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost }]
        }], ctorParameters: () => [{ type: NgControl, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }] }] });
/**
 * @description
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc). On groups, this includes the additional
 * class ng-submitted.
 *
 * @see {@link NgControlStatus}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NgControlStatusGroup extends AbstractControlStatus {
    constructor(cd) {
        super(cd);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgControlStatusGroup, deps: [{ token: ControlContainer, optional: true, self: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]", host: { properties: { "class.ng-untouched": "isUntouched", "class.ng-touched": "isTouched", "class.ng-pristine": "isPristine", "class.ng-dirty": "isDirty", "class.ng-valid": "isValid", "class.ng-invalid": "isInvalid", "class.ng-pending": "isPending", "class.ng-submitted": "isSubmitted" } }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgControlStatusGroup, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                    host: ngGroupStatusHost
                }]
        }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }] }] });

const formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
const formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
const formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
const ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
const ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;

function controlParentException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1050 /* RuntimeErrorCode.FORM_CONTROL_NAME_MISSING_PARENT */, `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formControlNameExample}`);
}
function ngModelGroupException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1051 /* RuntimeErrorCode.FORM_CONTROL_NAME_INSIDE_MODEL_GROUP */, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1052 /* RuntimeErrorCode.FORM_GROUP_MISSING_INSTANCE */, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1053 /* RuntimeErrorCode.FORM_GROUP_NAME_MISSING_PARENT */, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1054 /* RuntimeErrorCode.FORM_ARRAY_NAME_MISSING_PARENT */, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
const disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
const asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
    return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName'}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
    return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
    return `
    There are no form controls registered with this ${isFormGroup ? 'group' : 'array'} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
    return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
    return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}

/**
 * Reports that a control is valid, meaning that no errors exist in the input value.
 *
 * @see {@link status}
 */
const VALID = 'VALID';
/**
 * Reports that a control is invalid, meaning that an error exists in the input value.
 *
 * @see {@link status}
 */
const INVALID = 'INVALID';
/**
 * Reports that a control is pending, meaning that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see {@link markAsPending}
 * @see {@link status}
 */
const PENDING = 'PENDING';
/**
 * Reports that a control is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see {@link markAsDisabled}
 * @see {@link status}
 */
const DISABLED = 'DISABLED';
/**
 * Gets validators from either an options object or given validators.
 */
function pickValidators(validatorOrOpts) {
    return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
/**
 * Creates validator function by combining provided validators.
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * Gets async validators from either an options object or given validators.
 */
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (isOptionsObj(validatorOrOpts) && asyncValidator) {
            console.warn(asyncValidatorsDroppedWithOptsWarning);
        }
    }
    return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
/**
 * Creates async validator function by combining provided async validators.
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) :
        asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
function assertControlPresent(parent, isGroup, key) {
    const controls = parent.controls;
    const collection = isGroup ? Object.keys(controls) : controls;
    if (!collection.length) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1000 /* RuntimeErrorCode.NO_CONTROLS */, (typeof ngDevMode === 'undefined' || ngDevMode) ? noControlsError(isGroup) : '');
    }
    if (!controls[key]) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1001 /* RuntimeErrorCode.MISSING_CONTROL */, (typeof ngDevMode === 'undefined' || ngDevMode) ? missingControlError(isGroup, key) : '');
    }
}
function assertAllValuesPresent(control, isGroup, value) {
    control._forEachChild((_, key) => {
        if (value[key] === undefined) {
            throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1002 /* RuntimeErrorCode.MISSING_CONTROL_VALUE */, (typeof ngDevMode === 'undefined' || ngDevMode) ? missingControlValueError(isGroup, key) :
                '');
        }
    });
}
// clang-format on
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * The first type parameter TValue represents the value type of the control (`control.value`).
 * The optional type parameter TRawValue  represents the raw value type (`control.getRawValue()`).
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 * @publicApi
 */
class AbstractControl {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param validators The function or array of functions that is used to determine the validity of
     *     this control synchronously.
     * @param asyncValidators The function or array of functions that is used to determine validity of
     *     this control asynchronously.
     */
    constructor(validators, asyncValidators) {
        /** @internal */
        this._pendingDirty = false;
        /**
         * Indicates that a control has its own pending asynchronous validation in progress.
         *
         * @internal
         */
        this._hasOwnPendingAsyncValidator = false;
        /** @internal */
        this._pendingTouched = false;
        /** @internal */
        this._onCollectionChange = () => { };
        this._parent = null;
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /** @internal */
        this._onDisabledChange = [];
        this._assignValidators(validators);
        this._assignAsyncValidators(asyncValidators);
    }
    /**
     * Returns the function that is used to determine the validity of this control synchronously.
     * If multiple validators have been added, this will be a single composed function.
     * See `Validators.compose()` for additional information.
     */
    get validator() {
        return this._composedValidatorFn;
    }
    set validator(validatorFn) {
        this._rawValidators = this._composedValidatorFn = validatorFn;
    }
    /**
     * Returns the function that is used to determine the validity of this control asynchronously.
     * If multiple validators have been added, this will be a single composed function.
     * See `Validators.compose()` for additional information.
     */
    get asyncValidator() {
        return this._composedAsyncValidatorFn;
    }
    set asyncValidator(asyncValidatorFn) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
    }
    /**
     * The parent control.
     */
    get parent() {
        return this._parent;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control has passed all of its validation tests,
     * false otherwise.
     */
    get valid() {
        return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control has failed one or more of its validation checks,
     * false otherwise.
     */
    get invalid() {
        return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if this control is in the process of conducting a validation check,
     * false otherwise.
     */
    get pending() {
        return this.status == PENDING;
    }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @see {@link AbstractControl.status}
     *
     * @returns True if the control is disabled, false otherwise.
     */
    get disabled() {
        return this.status === DISABLED;
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @returns True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     * @see {@link AbstractControl.status}
     *
     */
    get enabled() {
        return this.status !== DISABLED;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */
    get dirty() {
        return !this.pristine;
    }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     */
    get untouched() {
        return !this.touched;
    }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     */
    get updateOn() {
        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
    }
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing synchronous validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * If you want to add a new validator without affecting existing ones, consider
     * using `addValidators()` method instead.
     */
    setValidators(validators) {
        this._assignValidators(validators);
    }
    /**
     * Sets the asynchronous validators that are active on this control. Calling this
     * overwrites any existing asynchronous validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * If you want to add a new validator without affecting existing ones, consider
     * using `addAsyncValidators()` method instead.
     */
    setAsyncValidators(validators) {
        this._assignAsyncValidators(validators);
    }
    /**
     * Add a synchronous validator or validators to this control, without affecting other validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * Adding a validator that already exists will have no effect. If duplicate validator functions
     * are present in the `validators` array, only the first instance would be added to a form
     * control.
     *
     * @param validators The new validator function or functions to add to this control.
     */
    addValidators(validators) {
        this.setValidators(addValidators(validators, this._rawValidators));
    }
    /**
     * Add an asynchronous validator or validators to this control, without affecting other
     * validators.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * Adding a validator that already exists will have no effect.
     *
     * @param validators The new asynchronous validator function or functions to add to this control.
     */
    addAsyncValidators(validators) {
        this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
    }
    /**
     * Remove a synchronous validator from this control, without affecting other validators.
     * Validators are compared by function reference; you must pass a reference to the exact same
     * validator function as the one that was originally set. If a provided validator is not found,
     * it is ignored.
     *
     * @usageNotes
     *
     * ### Reference to a ValidatorFn
     *
     * ```
     * // Reference to the RequiredValidator
     * const ctrl = new FormControl<string | null>('', Validators.required);
     * ctrl.removeValidators(Validators.required);
     *
     * // Reference to anonymous function inside MinValidator
     * const minValidator = Validators.min(3);
     * const ctrl = new FormControl<string | null>('', minValidator);
     * expect(ctrl.hasValidator(minValidator)).toEqual(true)
     * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
     *
     * ctrl.removeValidators(minValidator);
     * ```
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param validators The validator or validators to remove.
     */
    removeValidators(validators) {
        this.setValidators(removeValidators(validators, this._rawValidators));
    }
    /**
     * Remove an asynchronous validator from this control, without affecting other validators.
     * Validators are compared by function reference; you must pass a reference to the exact same
     * validator function as the one that was originally set. If a provided validator is not found, it
     * is ignored.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @param validators The asynchronous validator or validators to remove.
     */
    removeAsyncValidators(validators) {
        this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
    }
    /**
     * Check whether a synchronous validator function is present on this control. The provided
     * validator must be a reference to the exact same function that was provided.
     *
     * @usageNotes
     *
     * ### Reference to a ValidatorFn
     *
     * ```
     * // Reference to the RequiredValidator
     * const ctrl = new FormControl<number | null>(0, Validators.required);
     * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
     *
     * // Reference to anonymous function inside MinValidator
     * const minValidator = Validators.min(3);
     * const ctrl = new FormControl<number | null>(0, minValidator);
     * expect(ctrl.hasValidator(minValidator)).toEqual(true)
     * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
     * ```
     *
     * @param validator The validator to check for presence. Compared by function reference.
     * @returns Whether the provided validator was found on this control.
     */
    hasValidator(validator) {
        return hasValidator(this._rawValidators, validator);
    }
    /**
     * Check whether an asynchronous validator function is present on this control. The provided
     * validator must be a reference to the exact same function that was provided.
     *
     * @param validator The asynchronous validator to check for presence. Compared by function
     *     reference.
     * @returns Whether the provided asynchronous validator was found on this control.
     */
    hasAsyncValidator(validator) {
        return hasValidator(this._rawAsyncValidators, validator);
    }
    /**
     * Empties out the synchronous validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */
    clearValidators() {
        this.validator = null;
    }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     */
    clearAsyncValidators() {
        this.asyncValidator = null;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value.
     *
     * @see {@link markAsUntouched()}
     * @see {@link markAsDirty()}
     * @see {@link markAsPristine()}
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsTouched(opts = {}) {
        this.touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see {@link markAsTouched()}
     */
    markAllAsTouched() {
        this.markAsTouched({ onlySelf: true });
        this._forEachChild((control) => control.markAllAsTouched());
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @see {@link markAsTouched()}
     * @see {@link markAsDirty()}
     * @see {@link markAsPristine()}
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsUntouched(opts = {}) {
        this.touched = false;
        this._pendingTouched = false;
        this._forEachChild((control) => {
            control.markAsUntouched({ onlySelf: true });
        });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @see {@link markAsTouched()}
     * @see {@link markAsUntouched()}
     * @see {@link markAsPristine()}
     *
     * @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsDirty(opts = {}) {
        this.pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @see {@link markAsTouched()}
     * @see {@link markAsUntouched()}
     * @see {@link markAsDirty()}
     *
     * @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    markAsPristine(opts = {}) {
        this.pristine = true;
        this._pendingDirty = false;
        this._forEachChild((control) => {
            control.markAsPristine({ onlySelf: true });
        });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */
    markAsPending(opts = {}) {
        this.status = PENDING;
        if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    }
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */
    disable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild((control) => {
            control.disable({ ...opts, onlySelf: true });
        });
        this._updateValue();
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        this._updateAncestors({ ...opts, skipPristineCheck });
        this._onDisabledChange.forEach((changeFn) => changeFn(true));
    }
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     * @see {@link AbstractControl.status}
     *
     * @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */
    enable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = VALID;
        this._forEachChild((control) => {
            control.enable({ ...opts, onlySelf: true });
        });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors({ ...opts, skipPristineCheck });
        this._onDisabledChange.forEach((changeFn) => changeFn(false));
    }
    _updateAncestors(opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
            }
            this._parent._updateTouched();
        }
    }
    /**
     * Sets the parent of the control
     *
     * @param parent The new parent.
     */
    setParent(parent) {
        this._parent = parent;
    }
    /**
     * The raw value of this control. For most control implementations, the raw value will include
     * disabled children.
     */
    getRawValue() {
        return this.value;
    }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    }
    /** @internal */
    _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    }
    _setInitialStatus() {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
    }
    _runValidator() {
        return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(emitEvent) {
        if (this.asyncValidator) {
            this.status = PENDING;
            this._hasOwnPendingAsyncValidator = true;
            const obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe((errors) => {
                this._hasOwnPendingAsyncValidator = false;
                // This will trigger the recalculation of the validation status, which depends on
                // the state of the asynchronous validation (whether it is in progress or not). So, it is
                // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.
                this.setErrors(errors, { emitEvent });
            });
        }
    }
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
            this._hasOwnPendingAsyncValidator = false;
        }
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control errors are set.
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event after the errors are set.
     *
     * @usageNotes
     *
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    setErrors(errors, opts = {}) {
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control. If a string is provided, passing it as a string literal will result in improved type
     * information. Likewise, if an array is provided, passing it `as const` will cause improved type
     * information to be available.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
     *
     * ### Retrieve a control in a FormArray
     *
     * When accessing an element inside a FormArray, you can use an element index.
     * For example, to get a `price` control from the first element in an `items` array you can use:
     *
     * * `this.form.get('items.0.price');`
     *
     * -OR-
     *
     * * `this.form.get(['items', 0, 'price']);`
     */
    get(path) {
        let currPath = path;
        if (currPath == null)
            return null;
        if (!Array.isArray(currPath))
            currPath = currPath.split('.');
        if (currPath.length === 0)
            return null;
        return currPath.reduce((control, name) => control && control._find(name), this);
    }
    /**
     * @description
     * Reports error data for the control with the given path.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * @returns error data for that particular error. If the control or error is not present,
     * null is returned.
     */
    getError(errorCode, path) {
        const control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    }
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The code of the error to check
     * @param path A list of control names that designates how to move from the current control
     * to the control that should be queried for errors.
     *
     * @usageNotes
     * For example, for the following `FormGroup`:
     *
     * ```
     * form = new FormGroup({
     *   address: new FormGroup({ street: new FormControl() })
     * });
     * ```
     *
     * The path to the 'street' control from the root form would be 'address' -> 'street'.
     *
     * It can be provided to this method in one of two formats:
     *
     * 1. An array of string control names, e.g. `['address', 'street']`
     * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
     *
     * If no path is given, this method checks for the error on the current control.
     *
     * @returns whether the given error is present in the control at the given path.
     *
     * If the control is not present, false is returned.
     */
    hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     */
    get root() {
        let x = this;
        while (x._parent) {
            x = x._parent;
        }
        return x;
    }
    /** @internal */
    _updateControlsErrors(emitEvent) {
        this.status = this._calculateStatus();
        if (emitEvent) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    }
    /** @internal */
    _initObservables() {
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    _calculateStatus() {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    }
    /** @internal */
    _anyControlsHaveStatus(status) {
        return this._anyControls((control) => control.status === status);
    }
    /** @internal */
    _anyControlsDirty() {
        return this._anyControls((control) => control.dirty);
    }
    /** @internal */
    _anyControlsTouched() {
        return this._anyControls((control) => control.touched);
    }
    /** @internal */
    _updatePristine(opts = {}) {
        this.pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /** @internal */
    _updateTouched(opts = {}) {
        this.touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /** @internal */
    _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
    }
    /** @internal */
    _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
        }
    }
    /**
     * Check to see if parent has been marked artificially dirty.
     *
     * @internal
     */
    _parentMarkedDirty(onlySelf) {
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
    }
    /** @internal */
    _find(name) {
        return null;
    }
    /**
     * Internal implementation of the `setValidators` method. Needs to be separated out into a
     * different method, because it is called in the constructor and it can break cases where
     * a control is extended.
     */
    _assignValidators(validators) {
        this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedValidatorFn = coerceToValidator(this._rawValidators);
    }
    /**
     * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
     * different method, because it is called in the constructor and it can break cases where
     * a control is extended.
     */
    _assignAsyncValidators(validators) {
        this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
    }
}

/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the four fundamental building blocks used to define forms in Angular,
 * along with `FormControl`, `FormArray`, and `FormRecord`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * `FormGroup` is intended for use cases where the keys are known ahead of time.
 * If you need to dynamically add and remove controls, use {@link FormRecord} instead.
 *
 * `FormGroup` accepts an optional type parameter `TControl`, which is an object type with inner
 * control types as values.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### The type argument, and optional controls
 *
 * `FormGroup` accepts one generic argument, which is an object containing its inner controls.
 * This type will usually be inferred automatically, but you can always specify it explicitly if you
 * wish.
 *
 * If you have controls that are optional (i.e. they can be removed, you can use the `?` in the
 * type):
 *
 * ```
 * const form = new FormGroup<{
 *   first: FormControl<string|null>,
 *   middle?: FormControl<string|null>, // Middle name is optional.
 *   last: FormControl<string|null>,
 * }>({
 *   first: new FormControl('Nancy'),
 *   last: new FormControl('Drew'),
 * });
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * ### Using a FormGroup with optional controls
 *
 * It is possible to have optional controls in a FormGroup. An optional control can be removed later
 * using `removeControl`, and can be omitted when calling `reset`. Optional controls must be
 * declared optional in the group's type.
 *
 * ```ts
 * const c = new FormGroup<{one?: FormControl<string>}>({
 *   one: new FormControl('')
 * });
 * ```
 *
 * Notice that `c.value.one` has type `string|null|undefined`. This is because calling `c.reset({})`
 * without providing the optional key `one` will cause it to become `null`.
 *
 * @publicApi
 */
class FormGroup extends AbstractControl {
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        (typeof ngDevMode === 'undefined' || ngDevMode) && validateFormGroupControls(controls);
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
            // so we set `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!this.asyncValidator
        });
    }
    registerControl(name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    }
    addControl(name, control, options = {}) {
        this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Remove a control from this group. In a strongly-typed group, required controls cannot be
     * removed.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to remove from the collection
     * @param options Specifies whether this FormGroup instance should emit events after a
     *     control is removed.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * removed. When false, no events are emitted.
     */
    removeControl(name, options = {}) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(() => { });
        delete (this.controls[name]);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    setControl(name, control, options = {}) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(() => { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you exclude a value of a control that does exist.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    setValue(value, options = {}) {
        assertAllValuesPresent(this, true, value);
        Object.keys(value).forEach(name => {
            assertControlPresent(this, true, name);
            this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control value
     * is updated. When false, no events are emitted. The configuration options are passed to
     * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
     */
    patchValue(value, options = {}) {
        // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
        // `patchValue` can be called recursively and inner data structures might have these values, so
        // we just ignore such cases when a field containing FormGroup instance receives `null` or
        // `undefined` as a value.
        if (value == null /* both `null` and `undefined` */)
            return;
        Object.keys(value).forEach(name => {
            // The compiler cannot see through the uninstantiated conditional type of `this.controls`, so
            // `as any` is required.
            const control = this.controls[name];
            if (control) {
                control.patchValue(
                /* Guaranteed to be present, due to the outer forEach. */ value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
     * the value of all descendants to their default values, or null if no defaults were provided.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param value Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(form.value);  // {last: 'last'}
     * console.log(form.get('first').status);  // 'DISABLED'
     * ```
     */
    reset(value = {}, options = {}) {
        this._forEachChild((control, name) => {
            control.reset(value ? value[name] : null, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     */
    getRawValue() {
        return this._reduceChildren({}, (acc, control, name) => {
            acc[name] = control.getRawValue();
            return acc;
        });
    }
    /** @internal */
    _syncPendingControls() {
        let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /** @internal */
    _forEachChild(cb) {
        Object.keys(this.controls).forEach(key => {
            // The list of controls can change (for ex. controls might be removed) while the loop
            // is running (as a result of invoking Forms API in `valueChanges` subscription), so we
            // have to null check before invoking the callback.
            const control = this.controls[key];
            control && cb(control, key);
        });
    }
    /** @internal */
    _setUpControls() {
        this._forEachChild((control) => {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        });
    }
    /** @internal */
    _updateValue() {
        this.value = this._reduceValue();
    }
    /** @internal */
    _anyControls(condition) {
        for (const [controlName, control] of Object.entries(this.controls)) {
            if (this.contains(controlName) && condition(control)) {
                return true;
            }
        }
        return false;
    }
    /** @internal */
    _reduceValue() {
        let acc = {};
        return this._reduceChildren(acc, (acc, control, name) => {
            if (control.enabled || this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    }
    /** @internal */
    _reduceChildren(initValue, fn) {
        let res = initValue;
        this._forEachChild((control, name) => {
            res = fn(res, control, name);
        });
        return res;
    }
    /** @internal */
    _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    }
    /** @internal */
    _find(name) {
        return this.controls.hasOwnProperty(name) ?
            this.controls[name] :
            null;
    }
}
/**
 * Will validate that none of the controls has a key with a dot
 * Throws other wise
 */
function validateFormGroupControls(controls) {
    const invalidKeys = Object.keys(controls).filter(key => key.includes('.'));
    if (invalidKeys.length > 0) {
        // TODO: make this an error once there are no more uses in G3
        console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(',')}.`);
    }
}
const UntypedFormGroup = FormGroup;
/**
 * @description
 * Asserts that the given control is an instance of `FormGroup`
 *
 * @publicApi
 */
const isFormGroup = (control) => control instanceof FormGroup;
/**
 * Tracks the value and validity state of a collection of `FormControl` instances, each of which has
 * the same value type.
 *
 * `FormRecord` is very similar to {@link FormGroup}, except it can be used with a dynamic keys,
 * with controls added and removed as needed.
 *
 * `FormRecord` accepts one generic argument, which describes the type of the controls it contains.
 *
 * @usageNotes
 *
 * ```
 * let numbers = new FormRecord({bill: new FormControl('415-123-456')});
 * numbers.addControl('bob', new FormControl('415-234-567'));
 * numbers.removeControl('bill');
 * ```
 *
 * @publicApi
 */
class FormRecord extends FormGroup {
}
/**
 * @description
 * Asserts that the given control is an instance of `FormRecord`
 *
 * @publicApi
 */
const isFormRecord = (control) => control instanceof FormRecord;

/**
 * Token to provide to allow SetDisabledState to always be called when a CVA is added, regardless of
 * whether the control is disabled or enabled.
 *
 * @see {@link FormsModule#withconfig}
 */
const CALL_SET_DISABLED_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CallSetDisabledState', { providedIn: 'root', factory: () => setDisabledStateDefault });
/**
 * Whether to use the fixed setDisabledState behavior by default.
 */
const setDisabledStateDefault = 'always';
function controlPath(name, parent) {
    return [...parent.path, name];
}
/**
 * Links a Form control and a Form directive by setting up callbacks (such as `onChange`) on both
 * instances. This function is typically invoked when form directive is being initialized.
 *
 * @param control Form control instance that should be linked.
 * @param dir Directive that should be linked with a given control.
 */
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!control)
            _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor)
            _throwMissingValueAccessorError(dir);
    }
    setUpValidators(control, dir);
    dir.valueAccessor.writeValue(control.value);
    // The legacy behavior only calls the CVA's `setDisabledState` if the control is disabled.
    // If the `callSetDisabledState` option is set to `always`, then this bug is fixed and
    // the method is always called.
    if (control.disabled || callSetDisabledState === 'always') {
        dir.valueAccessor.setDisabledState?.(control.disabled);
    }
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    setUpDisabledChangeHandler(control, dir);
}
/**
 * Reverts configuration performed by the `setUpControl` control function.
 * Effectively disconnects form control with a given form directive.
 * This function is typically invoked when corresponding form directive is being destroyed.
 *
 * @param control Form control which should be cleaned up.
 * @param dir Directive that should be disconnected from a given control.
 * @param validateControlPresenceOnChange Flag that indicates whether onChange handler should
 *     contain asserts to verify that it's not called once directive is destroyed. We need this flag
 *     to avoid potentially breaking changes caused by better control cleanup introduced in #39235.
 */
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
    const noop = () => {
        if (validateControlPresenceOnChange && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            _noControlError(dir);
        }
    };
    // The `valueAccessor` field is typically defined on FromControl and FormControlName directive
    // instances and there is a logic in `selectValueAccessor` function that throws if it's not the
    // case. We still check the presence of `valueAccessor` before invoking its methods to make sure
    // that cleanup works correctly if app code or tests are setup to ignore the error thrown from
    // `selectValueAccessor`. See https://github.com/angular/angular/issues/40521.
    if (dir.valueAccessor) {
        dir.valueAccessor.registerOnChange(noop);
        dir.valueAccessor.registerOnTouched(noop);
    }
    cleanUpValidators(control, dir);
    if (control) {
        dir._invokeOnDestroyCallbacks();
        control._registerOnCollectionChange(() => { });
    }
}
function registerOnValidatorChange(validators, onChange) {
    validators.forEach((validator) => {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(onChange);
    });
}
/**
 * Sets up disabled change handler function on a given form control if ControlValueAccessor
 * associated with a given directive instance supports the `setDisabledState` call.
 *
 * @param control Form control where disabled change handler should be setup.
 * @param dir Corresponding directive instance associated with this control.
 */
function setUpDisabledChangeHandler(control, dir) {
    if (dir.valueAccessor.setDisabledState) {
        const onDisabledChange = (isDisabled) => {
            dir.valueAccessor.setDisabledState(isDisabled);
        };
        control.registerOnDisabledChange(onDisabledChange);
        // Register a callback function to cleanup disabled change handler
        // from a control instance when a directive is destroyed.
        dir._registerOnDestroy(() => {
            control._unregisterOnDisabledChange(onDisabledChange);
        });
    }
}
/**
 * Sets up sync and async directive validators on provided form control.
 * This function merges validators from the directive into the validators of the control.
 *
 * @param control Form control where directive validators should be setup.
 * @param dir Directive instance that contains validators to be setup.
 */
function setUpValidators(control, dir) {
    const validators = getControlValidators(control);
    if (dir.validator !== null) {
        control.setValidators(mergeValidators(validators, dir.validator));
    }
    else if (typeof validators === 'function') {
        // If sync validators are represented by a single validator function, we force the
        // `Validators.compose` call to happen by executing the `setValidators` function with
        // an array that contains that function. We need this to avoid possible discrepancies in
        // validators behavior, so sync validators are always processed by the `Validators.compose`.
        // Note: we should consider moving this logic inside the `setValidators` function itself, so we
        // have consistent behavior on AbstractControl API level. The same applies to the async
        // validators logic below.
        control.setValidators([validators]);
    }
    const asyncValidators = getControlAsyncValidators(control);
    if (dir.asyncValidator !== null) {
        control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
    }
    else if (typeof asyncValidators === 'function') {
        control.setAsyncValidators([asyncValidators]);
    }
    // Re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    const onValidatorChange = () => control.updateValueAndValidity();
    registerOnValidatorChange(dir._rawValidators, onValidatorChange);
    registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
/**
 * Cleans up sync and async directive validators on provided form control.
 * This function reverts the setup performed by the `setUpValidators` function, i.e.
 * removes directive-specific validators from a given control instance.
 *
 * @param control Form control from where directive validators should be removed.
 * @param dir Directive instance that contains validators to be removed.
 * @returns true if a control was updated as a result of this action.
 */
function cleanUpValidators(control, dir) {
    let isControlUpdated = false;
    if (control !== null) {
        if (dir.validator !== null) {
            const validators = getControlValidators(control);
            if (Array.isArray(validators) && validators.length > 0) {
                // Filter out directive validator function.
                const updatedValidators = validators.filter((validator) => validator !== dir.validator);
                if (updatedValidators.length !== validators.length) {
                    isControlUpdated = true;
                    control.setValidators(updatedValidators);
                }
            }
        }
        if (dir.asyncValidator !== null) {
            const asyncValidators = getControlAsyncValidators(control);
            if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
                // Filter out directive async validator function.
                const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
                if (updatedAsyncValidators.length !== asyncValidators.length) {
                    isControlUpdated = true;
                    control.setAsyncValidators(updatedAsyncValidators);
                }
            }
        }
    }
    // Clear onValidatorChange callbacks by providing a noop function.
    const noop = () => { };
    registerOnValidatorChange(dir._rawValidators, noop);
    registerOnValidatorChange(dir._rawAsyncValidators, noop);
    return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
    dir.valueAccessor.registerOnChange((newValue) => {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    });
}
function setUpBlurPipeline(control, dir) {
    dir.valueAccessor.registerOnTouched(() => {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    });
}
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
    const onChange = (newValue, emitModelEvent) => {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    };
    control.registerOnChange(onChange);
    // Register a callback function to cleanup onChange handler
    // from a control instance when a directive is destroyed.
    dir._registerOnDestroy(() => {
        control._unregisterOnChange(onChange);
    });
}
/**
 * Links a FormGroup or FormArray instance and corresponding Form directive by setting up validators
 * present in the view.
 *
 * @param control FormGroup or FormArray instance that should be linked.
 * @param dir Directive that provides view validators.
 */
function setUpFormContainer(control, dir) {
    if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode))
        _throwError(dir, 'Cannot find control with');
    setUpValidators(control, dir);
}
/**
 * Reverts the setup performed by the `setUpFormContainer` function.
 *
 * @param control FormGroup or FormArray instance that should be cleaned up.
 * @param dir Directive that provided view validators.
 * @returns true if a control was updated as a result of this action.
 */
function cleanUpFormContainer(control, dir) {
    return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
function _throwError(dir, message) {
    const messageEnd = _describeControlLocation(dir);
    throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
    const path = dir.path;
    if (path && path.length > 1)
        return `path: '${path.join(' -> ')}'`;
    if (path?.[0])
        return `name: '${path}'`;
    return 'unspecified name attribute';
}
function _throwMissingValueAccessorError(dir) {
    const loc = _describeControlLocation(dir);
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](-1203 /* RuntimeErrorCode.NG_MISSING_VALUE_ACCESSOR */, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
    const loc = _describeControlLocation(dir);
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1200 /* RuntimeErrorCode.NG_VALUE_ACCESSOR_NOT_PROVIDED */, `Value accessor was not provided as an array for form control with ${loc}. ` +
        `Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    const change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
    // Check if a given value accessor is an instance of a class that directly extends
    // `BuiltInControlValueAccessor` one.
    return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach((dir) => {
        const control = dir.control;
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    });
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode))
        _throwInvalidValueAccessorError(dir);
    let defaultAccessor = undefined;
    let builtinAccessor = undefined;
    let customAccessor = undefined;
    valueAccessors.forEach((v) => {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode))
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode))
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        _throwError(dir, 'No valid value accessor for form control with');
    }
    return null;
}
function removeListItem$1(list, el) {
    const index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
function _ngModelWarning(name, type, instance, warningConfig) {
    if (warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        console.warn(ngModelWarning(name));
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}

const formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgForm)
};
const resolvedPromise$1 = (() => Promise.resolve())();
/**
 * @description
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You optionally export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * gives you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, use `NgModel` with a `name`
 * attribute. You may use `NgModelGroup` to create sub-groups within the form.
 *
 * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event emits the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * To import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * @usageNotes
 *
 * ### Listening for form submission
 *
 * The following example shows how to capture the form values from the "ngSubmit" event.
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Setting the update options
 *
 * The following example shows you how to change the "updateOn" option from its default using
 * ngFormOptions.
 *
 * ```html
 * <form [ngFormOptions]="{updateOn: 'blur'}">
 *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
 * </form>
 * ```
 *
 * ### Native DOM validation UI
 *
 * In order to prevent the native DOM form validation UI from interfering with Angular's form
 * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
 * `FormModule` or `ReactiveFormModule` are imported into the application.
 * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
 * `ngNativeValidate` attribute to the `<form>` element:
 *
 * ```html
 * <form ngNativeValidate>
 *   ...
 * </form>
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */
class NgForm extends ControlContainer {
    constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        /**
         * @description
         * Returns whether the form submission has been triggered.
         */
        this.submitted = false;
        this._directives = new Set();
        /**
         * @description
         * Event emitter for the "ngSubmit" event
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    }
    /** @nodoc */
    ngAfterViewInit() {
        this._setUpdateStrategy();
    }
    /**
     * @description
     * The directive instance.
     */
    get formDirective() {
        return this;
    }
    /**
     * @description
     * The internal `FormGroup` instance.
     */
    get control() {
        return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     */
    get path() {
        return [];
    }
    /**
     * @description
     * Returns a map of the controls in this group.
     */
    get controls() {
        return this.form.controls;
    }
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `NgModel` directive instance.
     */
    addControl(dir) {
        resolvedPromise$1.then(() => {
            const container = this._findContainer(dir.path);
            dir.control =
                container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir, this.callSetDisabledState);
            dir.control.updateValueAndValidity({ emitEvent: false });
            this._directives.add(dir);
        });
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param dir The `NgModel` directive instance.
     */
    getControl(dir) {
        return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param dir The `NgModel` directive instance.
     */
    removeControl(dir) {
        resolvedPromise$1.then(() => {
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            this._directives.delete(dir);
        });
    }
    /**
     * @description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    addFormGroup(dir) {
        resolvedPromise$1.then(() => {
            const container = this._findContainer(dir.path);
            const group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    }
    /**
     * @description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    removeFormGroup(dir) {
        resolvedPromise$1.then(() => {
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param dir The `NgModelGroup` directive instance.
     */
    getFormGroup(dir) {
        return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param dir The `NgControl` directive instance.
     * @param value The new value for the directive's control.
     */
    updateModel(dir, value) {
        resolvedPromise$1.then(() => {
            const ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
        });
    }
    /**
     * @description
     * Sets the value for this `FormGroup`.
     *
     * @param value The new value
     */
    setValue(value) {
        this.control.setValue(value);
    }
    /**
     * @description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    onSubmit($event) {
        this.submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        // Forms with `method="dialog"` have some special behavior
        // that won't reload the page and that shouldn't be prevented.
        return $event?.target?.method === 'dialog';
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    onReset() {
        this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        this.submitted = false;
    }
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    }
    _findContainer(path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgForm, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: { options: ["ngFormOptions", "options"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider$1], exportAs: ["ngForm"], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgForm, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
                    providers: [formDirectiveProvider$1],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    outputs: ['ngSubmit'],
                    exportAs: 'ngForm'
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [CALL_SET_DISABLED_STATE]
                }] }], propDecorators: { options: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngFormOptions']
            }] } });

function removeListItem(list, el) {
    const index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}

function isFormControlState(formState) {
    return typeof formState === 'object' && formState !== null &&
        Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
}
const FormControl = (class FormControl extends AbstractControl {
    constructor(
    // formState and defaultValue will only be null if T is nullable
    formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        /** @publicApi */
        this.defaultValue = null;
        /** @internal */
        this._onChange = [];
        /** @internal */
        this._pendingChange = false;
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set
            // `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!this.asyncValidator
        });
        if (isOptionsObj(validatorOrOpts) &&
            (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
            if (isFormControlState(formState)) {
                this.defaultValue = formState.value;
            }
            else {
                this.defaultValue = formState;
            }
        }
    }
    setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
    }
    patchValue(value, options = {}) {
        this.setValue(value, options);
    }
    reset(formState = this.defaultValue, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    }
    /**  @internal */
    _updateValue() { }
    /**  @internal */
    _anyControls(condition) {
        return false;
    }
    /**  @internal */
    _allControlsDisabled() {
        return this.disabled;
    }
    registerOnChange(fn) {
        this._onChange.push(fn);
    }
    /** @internal */
    _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
    }
    registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
    }
    /** @internal */
    _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
    }
    /** @internal */
    _forEachChild(cb) { }
    /** @internal */
    _syncPendingControls() {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    }
    _applyFormState(formState) {
        if (isFormControlState(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this.value = this._pendingValue = formState;
        }
    }
});
const UntypedFormControl = FormControl;
/**
 * @description
 * Asserts that the given control is an instance of `FormControl`
 *
 * @publicApi
 */
const isFormControl = (control) => control instanceof FormControl;

/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 * @publicApi
 */
class AbstractFormGroupDirective extends ControlContainer {
    /** @nodoc */
    ngOnInit() {
        this._checkParentType();
        // Register the group with its parent group.
        this.formDirective.addFormGroup(this);
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.formDirective) {
            // Remove the group from its parent group.
            this.formDirective.removeFormGroup(this);
        }
    }
    /**
     * @description
     * The `FormGroup` bound to this directive.
     */
    get control() {
        return this.formDirective.getFormGroup(this);
    }
    /**
     * @description
     * The path to this group from the top-level directive.
     */
    get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    /** @internal */
    _checkParentType() { }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AbstractFormGroupDirective, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: AbstractFormGroupDirective, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AbstractFormGroupDirective, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }] });

function modelParentException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1350 /* RuntimeErrorCode.NGMODEL_IN_FORM_GROUP */, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1351 /* RuntimeErrorCode.NGMODEL_IN_FORM_GROUP_NAME */, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1352 /* RuntimeErrorCode.NGMODEL_WITHOUT_NAME */, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
    return new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1353 /* RuntimeErrorCode.NGMODELGROUP_IN_FORM_GROUP */, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}

const modelGroupProvider = {
    provide: ControlContainer,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgModelGroup)
};
/**
 * @description
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (within `<form>` tags).
 *
 * Use this directive to validate a sub-group of your form separately from the
 * rest of your form, or if some values in your domain model make more sense
 * to consume together in a nested object.
 *
 * Provide a name for the sub-group and it will become the key
 * for the sub-group in the form's full value. If you need direct access, export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * @usageNotes
 *
 * ### Consuming controls in a grouping
 *
 * The following example shows you how to combine controls together in a sub-group
 * of the form.
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 * @publicApi
 */
class NgModelGroup extends AbstractFormGroupDirective {
    constructor(parent, validators, asyncValidators) {
        super();
        /**
         * @description
         * Tracks the name of the `NgModelGroup` bound to the directive. The name corresponds
         * to a key in the parent `NgForm`.
         */
        this.name = '';
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /** @internal */
    _checkParentType() {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw modelGroupParentException();
        }
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgModelGroup, deps: [{ token: ControlContainer, host: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: NgModelGroup, selector: "[ngModelGroup]", inputs: { name: ["ngModelGroup", "name"] }, providers: [modelGroupProvider], exportAs: ["ngModelGroup"], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgModelGroup, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }]
        }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }], propDecorators: { name: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngModelGroup']
            }] } });

const formControlBinding$1 = {
    provide: NgControl,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgModel)
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have an old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel`s have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
const resolvedPromise = (() => Promise.resolve())();
/**
 * @description
 * Creates a `FormControl` instance from a [domain
 * model](https://en.wikipedia.org/wiki/Domain_model) and binds it to a form control element.
 *
 * The `FormControl` instance tracks the value, user interaction, and
 * validation status of the control and keeps the view synced with the model. If used
 * within a parent form, the directive also registers itself with the form as a child
 * control.
 *
 * This directive is used by itself or as part of a larger form. Use the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the domain model's value in the component
 * class sets the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to
 * the domain model in your class.
 *
 * To inspect the properties of the associated `FormControl` (like the validity state),
 * export the directive into a local template variable using `ngModel` as the key (ex:
 * `#myVar="ngModel"`). You can then access the control using the directive's `control` property.
 * However, the most commonly used properties (like `valid` and `dirty`) also exist on the control
 * for direct access. See a full list of properties directly available in
 * `AbstractControlDirective`.
 *
 * @see {@link RadioControlValueAccessor}
 * @see {@link SelectControlValueAccessor}
 *
 * @usageNotes
 *
 * ### Using ngModel on a standalone control
 *
 * The following examples show a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
 * as the parent form syncs the value for you. You access its properties by exporting it into a
 * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
 * needed on form submission.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * ### Using ngModel within a form
 *
 * The following example shows controls using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * ### Using a standalone ngModel within a group
 *
 * The following example shows you how to use a standalone ngModel control
 * within a form. This controls the display of the form, but doesn't contain form data.
 *
 * ```html
 * <form>
 *   <input name="login" ngModel placeholder="Login">
 *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
 * </form>
 * <!-- form value: {login: ''} -->
 * ```
 *
 * ### Setting the ngModel `name` attribute through options
 *
 * The following example shows you an alternate way to set the name attribute. Here,
 * an attribute identified as name is used within a custom form control component. To still be able
 * to specify the NgModel's name, you must specify it using the `ngModelOptions` input instead.
 *
 * ```html
 * <form>
 *   <my-custom-form-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
 *   </my-custom-form-control>
 * </form>
 * <!-- form value: {user: ''} -->
 * ```
 *
 * @ngModule FormsModule
 * @publicApi
 */
class NgModel extends NgControl {
    constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.callSetDisabledState = callSetDisabledState;
        this.control = new FormControl();
        /** @internal */
        this._registered = false;
        /**
         * @description
         * Tracks the name bound to the directive. If a parent form exists, it
         * uses this name as a key to retrieve this control's value.
         */
        this.name = '';
        /**
         * @description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /** @nodoc */
    ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered || 'name' in changes) {
            if (this._registered) {
                this._checkName();
                if (this.formDirective) {
                    // We can't call `formDirective.removeControl(this)`, because the `name` has already been
                    // changed. We also can't reset the name temporarily since the logic in `removeControl`
                    // is inside a promise and it won't run immediately. We work around it by giving it an
                    // object with the same shape instead.
                    const oldName = changes['name'].previousValue;
                    this.formDirective.removeControl({ name: oldName, path: this._getPath(oldName) });
                }
            }
            this._setUpControl();
        }
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return this._getPath(this.name);
    }
    /**
     * @description
     * The top-level directive for this control if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value emitted by `ngModelChange`.
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
        this._registered = true;
    }
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    }
    _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
    }
    _setUpStandalone() {
        setUpControl(this.control, this, this.callSetDisabledState);
        this.control.updateValueAndValidity({ emitEvent: false });
    }
    _checkForErrors() {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    }
    _checkParentType() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!(this._parent instanceof NgModelGroup) &&
                this._parent instanceof AbstractFormGroupDirective) {
                throw formGroupNameException();
            }
            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                throw modelParentException();
            }
        }
    }
    _checkName() {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw missingNameException();
        }
    }
    _updateValue(value) {
        resolvedPromise.then(() => {
            this.control.setValue(value, { emitViewToModelChange: false });
            this._changeDetectorRef?.markForCheck();
        });
    }
    _updateDisabled(changes) {
        const disabledValue = changes['isDisabled'].currentValue;
        // checking for 0 to avoid breaking change
        const isDisabled = disabledValue !== 0 && (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute)(disabledValue);
        resolvedPromise.then(() => {
            if (isDisabled && !this.control.disabled) {
                this.control.disable();
            }
            else if (!isDisabled && this.control.disabled) {
                this.control.enable();
            }
            this._changeDetectorRef?.markForCheck();
        });
    }
    _getPath(controlName) {
        return this._parent ? controlPath(controlName, this._parent) : [controlName];
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgModel, deps: [{ token: ControlContainer, host: true, optional: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: { name: "name", isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"], options: ["ngModelOptions", "options"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding$1], exportAs: ["ngModel"], usesInheritance: true, usesOnChanges: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgModel, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[ngModel]:not([formControlName]):not([formControl])',
                    providers: [formControlBinding$1],
                    exportAs: 'ngModel'
                }]
        }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALUE_ACCESSOR]
                }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [CALL_SET_DISABLED_STATE]
                }] }], propDecorators: { name: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], isDisabled: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['disabled']
            }], model: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngModel']
            }], options: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngModelOptions']
            }], update: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
                args: ['ngModelChange']
            }] } });

/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @publicApi
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
class ɵNgNoValidate {
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵNgNoValidate, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])", host: { attributes: { "novalidate": "" } }, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵNgNoValidate, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                    host: { 'novalidate': '' },
                }]
        }] });

const NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NumberValueAccessor),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a number value and listening to number input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a number input with a reactive form.
 *
 * The following example shows how to use a number input with a reactive form.
 *
 * ```ts
 * const totalCountControl = new FormControl();
 * ```
 *
 * ```
 * <input type="number" [formControl]="totalCountControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NumberValueAccessor extends BuiltInControlValueAccessor {
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        const normalizedValue = value == null ? '' : value;
        this.setProperty('value', normalizedValue);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (value) => {
            fn(value == '' ? null : parseFloat(value));
        };
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NumberValueAccessor, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]", host: { listeners: { "input": "onChange($event.target.value)", "blur": "onTouched()" } }, providers: [NUMBER_VALUE_ACCESSOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NumberValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                    providers: [NUMBER_VALUE_ACCESSOR]
                }]
        }] });

const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RadioControlValueAccessor),
    multi: true
};
function throwNameError() {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1202 /* RuntimeErrorCode.NAME_AND_FORM_CONTROL_NAME_MUST_MATCH */, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
/**
 * @description
 * Class used by Angular to track radio buttons. For internal use only.
 */
class RadioControlRegistry {
    constructor() {
        this._accessors = [];
    }
    /**
     * @description
     * Adds a control to the internal registry. For internal use only.
     */
    add(control, accessor) {
        this._accessors.push([control, accessor]);
    }
    /**
     * @description
     * Removes a control from the internal registry. For internal use only.
     */
    remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    }
    /**
     * @description
     * Selects a radio button. For internal use only.
     */
    select(accessor) {
        this._accessors.forEach((c) => {
            if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    }
    _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RadioControlRegistry, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable }); }
    static { this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RadioControlRegistry, providedIn: 'root' }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RadioControlRegistry, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{ providedIn: 'root' }]
        }] });
/**
 * @description
 * The `ControlValueAccessor` for writing radio control values and listening to radio control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using radio buttons with reactive form directives
 *
 * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
 * a reactive form, radio buttons in the same group should have the same `formControlName`.
 * Providing a `name` attribute is optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class RadioControlValueAccessor extends BuiltInControlValueAccessor {
    constructor(renderer, elementRef, _registry, _injector) {
        super(renderer, elementRef);
        this._registry = _registry;
        this._injector = _injector;
        this.setDisabledStateFired = false;
        /**
         * The registered callback function called when a change event occurs on the input element.
         * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
         * to override the `onChange` function (which expects 1 argument) in the parent
         * `BaseControlValueAccessor` class.
         * @nodoc
         */
        this.onChange = () => { };
        this.callSetDisabledState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(CALL_SET_DISABLED_STATE, { optional: true }) ?? setDisabledStateDefault;
    }
    /** @nodoc */
    ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    }
    /** @nodoc */
    ngOnDestroy() {
        this._registry.remove(this);
    }
    /**
     * Sets the "checked" property value on the radio input element.
     * @nodoc
     */
    writeValue(value) {
        this._state = value === this.value;
        this.setProperty('checked', this._state);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this._fn = fn;
        this.onChange = () => {
            fn(this.value);
            this._registry.select(this);
        };
    }
    /** @nodoc */
    setDisabledState(isDisabled) {
        /**
         * `setDisabledState` is supposed to be called whenever the disabled state of a control changes,
         * including upon control creation. However, a longstanding bug caused the method to not fire
         * when an *enabled* control was attached. This bug was fixed in v15 in #47576.
         *
         * This had a side effect: previously, it was possible to instantiate a reactive form control
         * with `[attr.disabled]=true`, even though the corresponding control was enabled in the
         * model. This resulted in a mismatch between the model and the DOM. Now, because
         * `setDisabledState` is always called, the value in the DOM will be immediately overwritten
         * with the "correct" enabled value.
         *
         * However, the fix also created an exceptional case: radio buttons. Because Reactive Forms
         * models the entire group of radio buttons as a single `FormControl`, there is no way to
         * control the disabled state for individual radios, so they can no longer be configured as
         * disabled. Thus, we keep the old behavior for radio buttons, so that `[attr.disabled]`
         * continues to work. Specifically, we drop the first call to `setDisabledState` if `disabled`
         * is `false`, and we are not in legacy mode.
         */
        if (this.setDisabledStateFired || isDisabled ||
            this.callSetDisabledState === 'whenDisabledForLegacyCode') {
            this.setProperty('disabled', isDisabled);
        }
        this.setDisabledStateFired = true;
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param value
     */
    fireUncheck(value) {
        this.writeValue(value);
    }
    _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RadioControlValueAccessor, deps: [{ token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { token: RadioControlRegistry }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: { name: "name", formControlName: "formControlName", value: "value" }, host: { listeners: { "change": "onChange()", "blur": "onTouched()" } }, providers: [RADIO_VALUE_ACCESSOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RadioControlValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                    providers: [RADIO_VALUE_ACCESSOR]
                }]
        }], ctorParameters: () => [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: RadioControlRegistry }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }], propDecorators: { name: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], formControlName: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], value: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });

const RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RangeValueAccessor),
    multi: true
};
/**
 * @description
 * The `ControlValueAccessor` for writing a range value and listening to range input changes.
 * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
 * directives.
 *
 * @usageNotes
 *
 * ### Using a range input with a reactive form
 *
 * The following example shows how to use a range input with a reactive form.
 *
 * ```ts
 * const ageControl = new FormControl();
 * ```
 *
 * ```
 * <input type="range" [formControl]="ageControl">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class RangeValueAccessor extends BuiltInControlValueAccessor {
    /**
     * Sets the "value" property on the input element.
     * @nodoc
     */
    writeValue(value) {
        this.setProperty('value', parseFloat(value));
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (value) => {
            fn(value == '' ? null : parseFloat(value));
        };
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RangeValueAccessor, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]", host: { listeners: { "change": "onChange($event.target.value)", "input": "onChange($event.target.value)", "blur": "onTouched()" } }, providers: [RANGE_VALUE_ACCESSOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RangeValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [RANGE_VALUE_ACCESSOR]
                }]
        }] });

/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */
const NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(ngDevMode ? 'NgModelWithFormControlWarning' : '');
const formControlBinding = {
    provide: NgControl,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FormControlDirective)
};
/**
 * @description
 * Synchronizes a standalone `FormControl` instance to a form control element.
 *
 * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives was deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see {@link FormControl}
 * @see {@link AbstractControl}
 *
 * @usageNotes
 *
 * The following example shows how to register a standalone control and set its value.
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormControlDirective extends NgControl {
    /**
     * @description
     * Triggers a warning in dev mode that this input should not be used with reactive forms.
     */
    set isDisabled(isDisabled) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            console.warn(disabledAttrWarning);
        }
    }
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * @internal
     */
    static { this._ngModelWarningSentOnce = false; }
    constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this.callSetDisabledState = callSetDisabledState;
        /** @deprecated as of v6 */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * @internal
         */
        this._ngModelWarningSent = false;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
            const previousForm = changes['form'].previousValue;
            if (previousForm) {
                cleanUpControl(previousForm, this, /* validateControlPresenceOnChange */ false);
            }
            setUpControl(this.form, this, this.callSetDisabledState);
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
            }
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.form) {
            cleanUpControl(this.form, this, /* validateControlPresenceOnChange */ false);
        }
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return [];
    }
    /**
     * @description
     * The `FormControl` bound to this directive.
     */
    get control() {
        return this.form;
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    _isControlChanged(changes) {
        return changes.hasOwnProperty('form');
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormControlDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: FormControlDirective, selector: "[formControl]", inputs: { form: ["formControl", "form"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [formControlBinding], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormControlDirective, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: '[formControl]', providers: [formControlBinding], exportAs: 'ngForm' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALUE_ACCESSOR]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [CALL_SET_DISABLED_STATE]
                }] }], propDecorators: { form: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['formControl']
            }], isDisabled: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['disabled']
            }], model: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngModel']
            }], update: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
                args: ['ngModelChange']
            }] } });

const formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FormGroupDirective)
};
/**
 * @description
 *
 * Binds an existing `FormGroup` or `FormRecord` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`/`FormRecord`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see {@link AbstractControl}
 *
 * @usageNotes
 * ### Register Form Group
 *
 * The following example registers a `FormGroup` with first name and last name controls,
 * and listens for the *ngSubmit* event when the button is clicked.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormGroupDirective extends ControlContainer {
    constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        /**
         * @description
         * Reports whether the form submission has been triggered.
         */
        this.submitted = false;
        /**
         * Callback that should be invoked when controls in FormGroup or FormArray collection change
         * (added or removed). This callback triggers corresponding DOM updates.
         */
        this._onCollectionChange = () => this._updateDomValue();
        /**
         * @description
         * Tracks the list of added `FormControlName` instances
         */
        this.directives = [];
        /**
         * @description
         * Tracks the `FormGroup` bound to this directive.
         */
        this.form = null;
        /**
         * @description
         * Emits an event when the form submission has been triggered.
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /** @nodoc */
    ngOnChanges(changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
            this._oldForm = this.form;
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.form) {
            cleanUpValidators(this.form, this);
            // Currently the `onCollectionChange` callback is rewritten each time the
            // `_registerOnCollectionChange` function is invoked. The implication is that cleanup should
            // happen *only* when the `onCollectionChange` callback was set by this directive instance.
            // Otherwise it might cause overriding a callback of some other directive instances. We should
            // consider updating this logic later to make it similar to how `onChange` callbacks are
            // handled, see https://github.com/angular/angular/issues/39732 for additional info.
            if (this.form._onCollectionChange === this._onCollectionChange) {
                this.form._registerOnCollectionChange(() => { });
            }
        }
    }
    /**
     * @description
     * Returns this directive's instance.
     */
    get formDirective() {
        return this;
    }
    /**
     * @description
     * Returns the `FormGroup` bound to this directive.
     */
    get control() {
        return this.form;
    }
    /**
     * @description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     */
    get path() {
        return [];
    }
    /**
     * @description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param dir The `FormControlName` directive instance.
     */
    addControl(dir) {
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir, this.callSetDisabledState);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    }
    /**
     * @description
     * Retrieves the `FormControl` instance from the provided `FormControlName` directive
     *
     * @param dir The `FormControlName` directive instance.
     */
    getControl(dir) {
        return this.form.get(dir.path);
    }
    /**
     * @description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param dir The `FormControlName` directive instance.
     */
    removeControl(dir) {
        cleanUpControl(dir.control || null, dir, /* validateControlPresenceOnChange */ false);
        removeListItem$1(this.directives, dir);
    }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    addFormGroup(dir) {
        this._setUpFormContainer(dir);
    }
    /**
     * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
     * view.
     *
     * @param dir The `FormGroupName` directive instance.
     */
    removeFormGroup(dir) {
        this._cleanUpFormContainer(dir);
    }
    /**
     * @description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param dir The `FormGroupName` directive instance.
     */
    getFormGroup(dir) {
        return this.form.get(dir.path);
    }
    /**
     * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    addFormArray(dir) {
        this._setUpFormContainer(dir);
    }
    /**
     * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
     * view.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    removeFormArray(dir) {
        this._cleanUpFormContainer(dir);
    }
    /**
     * @description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param dir The `FormArrayName` directive instance.
     */
    getFormArray(dir) {
        return this.form.get(dir.path);
    }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param dir The `FormControlName` directive instance.
     * @param value The new value for the directive's control.
     */
    updateModel(dir, value) {
        const ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
    }
    /**
     * @description
     * Method called with the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param $event The "submit" event object
     */
    onSubmit($event) {
        this.submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        // Forms with `method="dialog"` have some special behavior that won't reload the page and that
        // shouldn't be prevented. Note that we need to null check the `event` and the `target`, because
        // some internal apps call this method directly with the wrong arguments.
        return $event?.target?.method === 'dialog';
    }
    /**
     * @description
     * Method called when the "reset" event is triggered on the form.
     */
    onReset() {
        this.resetForm();
    }
    /**
     * @description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param value The new value for the form.
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        this.submitted = false;
    }
    /** @internal */
    _updateDomValue() {
        this.directives.forEach(dir => {
            const oldCtrl = dir.control;
            const newCtrl = this.form.get(dir.path);
            if (oldCtrl !== newCtrl) {
                // Note: the value of the `dir.control` may not be defined, for example when it's a first
                // `FormControl` that is added to a `FormGroup` instance (via `addControl` call).
                cleanUpControl(oldCtrl || null, dir);
                // Check whether new control at the same location inside the corresponding `FormGroup` is an
                // instance of `FormControl` and perform control setup only if that's the case.
                // Note: we don't need to clear the list of directives (`this.directives`) here, it would be
                // taken care of in the `removeControl` method invoked when corresponding `formControlName`
                // directive instance is being removed (invoked from `FormControlName.ngOnDestroy`).
                if (isFormControl(newCtrl)) {
                    setUpControl(newCtrl, dir, this.callSetDisabledState);
                    dir.control = newCtrl;
                }
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    }
    _setUpFormContainer(dir) {
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        // NOTE: this operation looks unnecessary in case no new validators were added in
        // `setUpFormContainer` call. Consider updating this code to match the logic in
        // `_cleanUpFormContainer` function.
        ctrl.updateValueAndValidity({ emitEvent: false });
    }
    _cleanUpFormContainer(dir) {
        if (this.form) {
            const ctrl = this.form.get(dir.path);
            if (ctrl) {
                const isControlUpdated = cleanUpFormContainer(ctrl, dir);
                if (isControlUpdated) {
                    // Run validity check only in case a control was updated (i.e. view validators were
                    // removed) as removing view validators might cause validity to change.
                    ctrl.updateValueAndValidity({ emitEvent: false });
                }
            }
        }
    }
    _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange);
        if (this._oldForm) {
            this._oldForm._registerOnCollectionChange(() => { });
        }
    }
    _updateValidators() {
        setUpValidators(this.form, this);
        if (this._oldForm) {
            cleanUpValidators(this._oldForm, this);
        }
    }
    _checkFormPresent() {
        if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw missingFormException();
        }
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormGroupDirective, deps: [{ token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: CALL_SET_DISABLED_STATE, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: FormGroupDirective, selector: "[formGroup]", inputs: { form: ["formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, host: { listeners: { "submit": "onSubmit($event)", "reset": "onReset()" } }, providers: [formDirectiveProvider], exportAs: ["ngForm"], usesInheritance: true, usesOnChanges: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormGroupDirective, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[formGroup]',
                    providers: [formDirectiveProvider],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    exportAs: 'ngForm'
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [CALL_SET_DISABLED_STATE]
                }] }], propDecorators: { form: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['formGroup']
            }], ngSubmit: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
            }] } });

const formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FormGroupName)
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` or `FormRecord` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective`.
 *
 * It accepts the string name of the nested `FormGroup` or `FormRecord` to link, and
 * looks for a `FormGroup` or `FormRecord` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Use nested form groups to validate a sub-group of a
 * form separately from the rest or to group the values of certain
 * controls into their own nested object.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @usageNotes
 *
 * ### Access the group by name
 *
 * The following example uses the `AbstractControl.get` method to access the
 * associated `FormGroup`
 *
 * ```ts
 *   this.form.get('name');
 * ```
 *
 * ### Access individual controls in the group
 *
 * The following example uses the `AbstractControl.get` method to access
 * individual controls within the group using dot syntax.
 *
 * ```ts
 *   this.form.get('name.first');
 * ```
 *
 * ### Register a nested `FormGroup`.
 *
 * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
 * and provides methods to retrieve the nested `FormGroup` and individual controls.
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormGroupName extends AbstractFormGroupDirective {
    constructor(parent, validators, asyncValidators) {
        super();
        /**
         * @description
         * Tracks the name of the `FormGroup` bound to the directive. The name corresponds
         * to a key in the parent `FormGroup` or `FormArray`.
         * Accepts a name as a string or a number.
         * The name in the form of a string is useful for individual forms,
         * while the numerical form allows for form groups to be bound
         * to indices when iterating over groups in a `FormArray`.
         */
        this.name = null;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /** @internal */
    _checkParentType() {
        if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw groupParentException();
        }
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormGroupName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: FormGroupName, selector: "[formGroupName]", inputs: { name: ["formGroupName", "name"] }, providers: [formGroupNameProvider], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormGroupName, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] }]
        }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }], propDecorators: { name: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['formGroupName']
            }] } });
const formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FormArrayName)
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see {@link AbstractControl}
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormArrayName extends ControlContainer {
    constructor(parent, validators, asyncValidators) {
        super();
        /**
         * @description
         * Tracks the name of the `FormArray` bound to the directive. The name corresponds
         * to a key in the parent `FormGroup` or `FormArray`.
         * Accepts a name as a string or a number.
         * The name in the form of a string is useful for individual forms,
         * while the numerical form allows for form arrays to be bound
         * to indices when iterating over arrays in a `FormArray`.
         */
        this.name = null;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
    }
    /**
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     * @throws If the directive does not have a valid parent.
     * @nodoc
     */
    ngOnInit() {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    }
    /**
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @nodoc
     */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    }
    /**
     * @description
     * The `FormArray` bound to this directive.
     */
    get control() {
        return this.formDirective.getFormArray(this);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    _checkParentType() {
        if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw arrayParentException();
        }
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormArrayName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: FormArrayName, selector: "[formArrayName]", inputs: { name: ["formArrayName", "name"] }, providers: [formArrayNameProvider], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormArrayName, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] }]
        }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }], propDecorators: { name: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['formArrayName']
            }] } });
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

const controlNameBinding = {
    provide: NgControl,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => FormControlName)
};
/**
 * @description
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see {@link FormControl}
 * @see {@link AbstractControl}
 *
 * @usageNotes
 *
 * ### Register `FormControl` within a group
 *
 * The following example shows how to register multiple form controls within a form group
 * and set their value.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel is deprecated
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and is scheduled for removal in
 * a future version of Angular.
 *
 * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
 *
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class FormControlName extends NgControl {
    /**
     * @description
     * Triggers a warning in dev mode that this input should not be used with reactive forms.
     */
    set isDisabled(isDisabled) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            console.warn(disabledAttrWarning);
        }
    }
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * @internal
     */
    static { this._ngModelWarningSentOnce = false; }
    constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._added = false;
        /**
         * @description
         * Tracks the name of the `FormControl` bound to the directive. The name corresponds
         * to a key in the parent `FormGroup` or `FormArray`.
         * Accepts a name as a string or a number.
         * The name in the form of a string is useful for individual forms,
         * while the numerical form allows for form controls to be bound
         * to indices when iterating over controls in a `FormArray`.
         */
        this.name = null;
        /** @deprecated as of v6 */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */
        this._ngModelWarningSent = false;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
            }
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    }
    /**
     * @description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param newValue The new value for the view model.
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
    }
    /**
     * @description
     * The top-level directive for this group if present, otherwise null.
     */
    get formDirective() {
        return this._parent ? this._parent.formDirective : null;
    }
    _checkParentType() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!(this._parent instanceof FormGroupName) &&
                this._parent instanceof AbstractFormGroupDirective) {
                throw ngModelGroupException();
            }
            else if (!(this._parent instanceof FormGroupName) &&
                !(this._parent instanceof FormGroupDirective) &&
                !(this._parent instanceof FormArrayName)) {
                throw controlParentException();
            }
        }
    }
    _setUpControl() {
        this._checkParentType();
        this.control = this.formDirective.addControl(this);
        this._added = true;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormControlName, deps: [{ token: ControlContainer, host: true, optional: true, skipSelf: true }, { token: NG_VALIDATORS, optional: true, self: true }, { token: NG_ASYNC_VALIDATORS, optional: true, self: true }, { token: NG_VALUE_ACCESSOR, optional: true, self: true }, { token: NG_MODEL_WITH_FORM_CONTROL_WARNING, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: FormControlName, selector: "[formControlName]", inputs: { name: ["formControlName", "name"], isDisabled: ["disabled", "isDisabled"], model: ["ngModel", "model"] }, outputs: { update: "ngModelChange" }, providers: [controlNameBinding], usesInheritance: true, usesOnChanges: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormControlName, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: '[formControlName]', providers: [controlNameBinding] }]
        }], ctorParameters: () => [{ type: ControlContainer, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_ASYNC_VALIDATORS]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_VALUE_ACCESSOR]
                }] }, { type: undefined, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                    args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
                }] }], propDecorators: { name: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['formControlName']
            }], isDisabled: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['disabled']
            }], model: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngModel']
            }], update: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
                args: ['ngModelChange']
            }] } });

const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectControlValueAccessor),
    multi: true
};
function _buildValueString$1(id, value) {
    if (id == null)
        return `${value}`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 * The `ControlValueAccessor` for writing select control values and listening to select control
 * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @usageNotes
 *
 * ### Using select controls in a reactive form
 *
 * The following examples show how to use a select control in a reactive form.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Using select controls in a template-driven form
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * ### Customizing option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ```ts
 * const selectedCountriesControl = new FormControl();
 * ```
 *
 * ```
 * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * **Note:** We listen to the 'change' event because 'input' events aren't fired
 * for selects in IE, see:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event#browser_compatibility
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class SelectControlValueAccessor extends BuiltInControlValueAccessor {
    constructor() {
        super(...arguments);
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this._compareWith = Object.is;
    }
    /**
     * @description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     */
    set compareWith(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1201 /* RuntimeErrorCode.COMPAREWITH_NOT_A_FN */, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * Sets the "value" property on the select element.
     * @nodoc
     */
    writeValue(value) {
        this.value = value;
        const id = this._getOptionId(value);
        const valueString = _buildValueString$1(id, value);
        this.setProperty('value', valueString);
    }
    /**
     * Registers a function called when the control value changes.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (valueString) => {
            this.value = this._getOptionValue(valueString);
            fn(this.value);
        };
    }
    /** @internal */
    _registerOption() {
        return (this._idCounter++).toString();
    }
    /** @internal */
    _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    }
    /** @internal */
    _getOptionValue(valueString) {
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: SelectControlValueAccessor, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($event.target.value)", "blur": "onTouched()" } }, providers: [SELECT_VALUE_ACCESSOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: SelectControlValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                    providers: [SELECT_VALUE_ACCESSOR]
                }]
        }], propDecorators: { compareWith: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see {@link SelectControlValueAccessor}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class NgSelectOption {
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    /**
     * @description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     */
    set ngValue(value) {
        if (this._select == null)
            return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */
    set value(value) {
        this._setElementValue(value);
        if (this._select)
            this._select.writeValue(this._select.value);
    }
    /** @internal */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgSelectOption, deps: [{ token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { token: SelectControlValueAccessor, host: true, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: NgSelectOption, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NgSelectOption, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: 'option' }]
        }], ctorParameters: () => [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: SelectControlValueAccessor, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
                }] }], propDecorators: { ngValue: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngValue']
            }], value: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['value']
            }] } });

const SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectMultipleControlValueAccessor),
    multi: true
};
function _buildValueString(id, value) {
    if (id == null)
        return `${value}`;
    if (typeof value === 'string')
        value = `'${value}'`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/** Mock interface for HTMLCollection */
class HTMLCollection {
}
/**
 * @description
 * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
 * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
 * `NgModel` directives.
 *
 * @see {@link SelectControlValueAccessor}
 *
 * @usageNotes
 *
 * ### Using a multi-select control
 *
 * The follow example shows you how to use a multi-select control with a reactive form.
 *
 * ```ts
 * const countryControl = new FormControl();
 * ```
 *
 * ```
 * <select multiple name="countries" [formControl]="countryControl">
 *   <option *ngFor="let country of countries" [ngValue]="country">
 *     {{ country.name }}
 *   </option>
 * </select>
 * ```
 *
 * ### Customizing option selection
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * See the `SelectControlValueAccessor` for usage.
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
    constructor() {
        super(...arguments);
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this._compareWith = Object.is;
    }
    /**
     * @description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     */
    set compareWith(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](1201 /* RuntimeErrorCode.COMPAREWITH_NOT_A_FN */, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * Sets the "value" property on one or of more of the select's options.
     * @nodoc
     */
    writeValue(value) {
        this.value = value;
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            const ids = value.map((v) => this._getOptionId(v));
            optionSelectedStateSetter = (opt, o) => {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
            };
        }
        else {
            optionSelectedStateSetter = (opt, o) => {
                opt._setSelected(false);
            };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    }
    /**
     * Registers a function called when the control value changes
     * and writes an array of the selected options.
     * @nodoc
     */
    registerOnChange(fn) {
        this.onChange = (element) => {
            const selected = [];
            const selectedOptions = element.selectedOptions;
            if (selectedOptions !== undefined) {
                const options = selectedOptions;
                for (let i = 0; i < options.length; i++) {
                    const opt = options[i];
                    const val = this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade to use `options` when `selectedOptions` property is not available.
            // Note: the `selectedOptions` is available in all supported browsers, but the Domino lib
            // doesn't have it currently, see https://github.com/fgnass/domino/issues/177.
            else {
                const options = element.options;
                for (let i = 0; i < options.length; i++) {
                    const opt = options[i];
                    if (opt.selected) {
                        const val = this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            this.value = selected;
            fn(selected);
        };
    }
    /** @internal */
    _registerOption(value) {
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    }
    /** @internal */
    _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
            if (this._compareWith(this._optionMap.get(id)._value, value))
                return id;
        }
        return null;
    }
    /** @internal */
    _getOptionValue(valueString) {
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: SelectMultipleControlValueAccessor, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: SelectMultipleControlValueAccessor, selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]", inputs: { compareWith: "compareWith" }, host: { listeners: { "change": "onChange($event.target)", "blur": "onTouched()" } }, providers: [SELECT_MULTIPLE_VALUE_ACCESSOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: SelectMultipleControlValueAccessor, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                    providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                }]
        }], propDecorators: { compareWith: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * @description
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @see {@link SelectMultipleControlValueAccessor}
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class ɵNgSelectMultipleOption {
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    /**
     * @description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     */
    set ngValue(value) {
        if (this._select == null)
            return;
        this._value = value;
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
    }
    /**
     * @description
     * Tracks simple string values bound to the option element.
     * For objects, use the `ngValue` input binding.
     */
    set value(value) {
        if (this._select) {
            this._value = value;
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        }
        else {
            this._setElementValue(value);
        }
    }
    /** @internal */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /** @internal */
    _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
    /** @nodoc */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵNgSelectMultipleOption, deps: [{ token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { token: SelectMultipleControlValueAccessor, host: true, optional: true }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: ɵNgSelectMultipleOption, selector: "option", inputs: { ngValue: "ngValue", value: "value" }, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵNgSelectMultipleOption, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{ selector: 'option' }]
        }], ctorParameters: () => [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: SelectMultipleControlValueAccessor, decorators: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
                }, {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
                }] }], propDecorators: { ngValue: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['ngValue']
            }], value: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
                args: ['value']
            }] } });

/**
 * Method that updates string to integer if not already a number
 *
 * @param value The value to convert to integer.
 * @returns value of parameter converted to number or integer.
 */
function toInteger(value) {
    return typeof value === 'number' ? value : parseInt(value, 10);
}
/**
 * Method that ensures that provided value is a float (and converts it to float if needed).
 *
 * @param value The value to convert to float.
 * @returns value of parameter converted to number or float.
 */
function toFloat(value) {
    return typeof value === 'number' ? value : parseFloat(value);
}
/**
 * A base class for Validator-based Directives. The class contains common logic shared across such
 * Directives.
 *
 * For internal use only, this class is not intended for use outside of the Forms package.
 */
class AbstractValidatorDirective {
    constructor() {
        this._validator = nullValidator;
    }
    /** @nodoc */
    ngOnChanges(changes) {
        if (this.inputName in changes) {
            const input = this.normalizeInput(changes[this.inputName].currentValue);
            this._enabled = this.enabled(input);
            this._validator = this._enabled ? this.createValidator(input) : nullValidator;
            if (this._onChange) {
                this._onChange();
            }
        }
    }
    /** @nodoc */
    validate(control) {
        return this._validator(control);
    }
    /** @nodoc */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
    /**
     * @description
     * Determines whether this validator should be active or not based on an input.
     * Base class implementation checks whether an input is defined (if the value is different from
     * `null` and `undefined`). Validator classes that extend this base class can override this
     * function with the logic specific to a particular validator directive.
     */
    enabled(input) {
        return input != null /* both `null` and `undefined` */;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AbstractValidatorDirective, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: AbstractValidatorDirective, usesOnChanges: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AbstractValidatorDirective, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }] });
/**
 * @description
 * Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MAX_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaxValidator),
    multi: true
};
/**
 * A directive which installs the {@link MaxValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `max` attribute.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a max validator
 *
 * The following example shows how to add a max validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input type="number" ngModel max="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MaxValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'max';
        /** @internal */
        this.normalizeInput = (input) => toFloat(input);
        /** @internal */
        this.createValidator = (max) => maxValidator(max);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MaxValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: MaxValidator, selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]", inputs: { max: "max" }, host: { properties: { "attr.max": "_enabled ? max : null" } }, providers: [MAX_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MaxValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]',
                    providers: [MAX_VALIDATOR],
                    host: { '[attr.max]': '_enabled ? max : null' }
                }]
        }], propDecorators: { max: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * @description
 * Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MinValidator),
    multi: true
};
/**
 * A directive which installs the {@link MinValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `min` attribute.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a min validator
 *
 * The following example shows how to add a min validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input type="number" ngModel min="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MinValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'min';
        /** @internal */
        this.normalizeInput = (input) => toFloat(input);
        /** @internal */
        this.createValidator = (min) => minValidator(min);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MinValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: { min: "min" }, host: { properties: { "attr.min": "_enabled ? min : null" } }, providers: [MIN_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MinValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]',
                    providers: [MIN_VALIDATOR],
                    host: { '[attr.min]': '_enabled ? min : null' }
                }]
        }], propDecorators: { min: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * @description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RequiredValidator),
    multi: true
};
/**
 * @description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CheckboxRequiredValidator),
    multi: true
};
/**
 * @description
 * A directive that adds the `required` validator to any controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required validator using template-driven forms
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 * @publicApi
 */
class RequiredValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'required';
        /** @internal */
        this.normalizeInput = _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute;
        /** @internal */
        this.createValidator = (input) => requiredValidator;
    }
    /** @nodoc */
    enabled(input) {
        return input;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RequiredValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: { required: "required" }, host: { properties: { "attr.required": "_enabled ? \"\" : null" } }, providers: [REQUIRED_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: RequiredValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                    providers: [REQUIRED_VALIDATOR],
                    host: { '[attr.required]': '_enabled ? "" : null' }
                }]
        }], propDecorators: { required: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a required checkbox validator using template-driven forms
 *
 * The following example shows how to add a checkbox required validator to an input attached to an
 * ngModel binding.
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
class CheckboxRequiredValidator extends RequiredValidator {
    constructor() {
        super(...arguments);
        /** @internal */
        this.createValidator = (input) => requiredTrueValidator;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: CheckboxRequiredValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: CheckboxRequiredValidator, selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]", host: { properties: { "attr.required": "_enabled ? \"\" : null" } }, providers: [CHECKBOX_REQUIRED_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: CheckboxRequiredValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                    providers: [CHECKBOX_REQUIRED_VALIDATOR],
                    host: { '[attr.required]': '_enabled ? "" : null' }
                }]
        }] });
/**
 * @description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => EmailValidator),
    multi: true
};
/**
 * A directive that adds the `email` validator to controls marked with the
 * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * The email validation is based on the WHATWG HTML specification with some enhancements to
 * incorporate more RFC rules. More information can be found on the [Validators.email
 * page](api/forms/Validators#email).
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding an email validator
 *
 * The following example shows how to add an email validator to an input attached to an ngModel
 * binding.
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @publicApi
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
class EmailValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'email';
        /** @internal */
        this.normalizeInput = _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute;
        /** @internal */
        this.createValidator = (input) => emailValidator;
    }
    /** @nodoc */
    enabled(input) {
        return input;
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EmailValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: EmailValidator, selector: "[email][formControlName],[email][formControl],[email][ngModel]", inputs: { email: "email" }, providers: [EMAIL_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EmailValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                    providers: [EMAIL_VALIDATOR]
                }]
        }], propDecorators: { email: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * @description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MinLengthValidator),
    multi: true
};
/**
 * A directive that adds minimum length validation to controls marked with the
 * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a minimum length validator
 *
 * The following example shows how to add a minimum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel minlength="4">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MinLengthValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'minlength';
        /** @internal */
        this.normalizeInput = (input) => toInteger(input);
        /** @internal */
        this.createValidator = (minlength) => minLengthValidator(minlength);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MinLengthValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: { minlength: "minlength" }, host: { properties: { "attr.minlength": "_enabled ? minlength : null" } }, providers: [MIN_LENGTH_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MinLengthValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                    providers: [MIN_LENGTH_VALIDATOR],
                    host: { '[attr.minlength]': '_enabled ? minlength : null' }
                }]
        }], propDecorators: { minlength: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * @description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MaxLengthValidator),
    multi: true
};
/**
 * A directive that adds maximum length validation to controls marked with the
 * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a maximum length validator
 *
 * The following example shows how to add a maximum length validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel maxlength="25">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class MaxLengthValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'maxlength';
        /** @internal */
        this.normalizeInput = (input) => toInteger(input);
        /** @internal */
        this.createValidator = (maxlength) => maxLengthValidator(maxlength);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MaxLengthValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: { maxlength: "maxlength" }, host: { properties: { "attr.maxlength": "_enabled ? maxlength : null" } }, providers: [MAX_LENGTH_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: MaxLengthValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                    providers: [MAX_LENGTH_VALIDATOR],
                    host: { '[attr.maxlength]': '_enabled ? maxlength : null' }
                }]
        }], propDecorators: { maxlength: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });
/**
 * @description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 */
const PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PatternValidator),
    multi: true
};
/**
 * @description
 * A directive that adds regex pattern validation to controls marked with the
 * `pattern` attribute. The regex must match the entire control value.
 * The directive is provided with the `NG_VALIDATORS` multi-provider list.
 *
 * @see [Form Validation](guide/form-validation)
 *
 * @usageNotes
 *
 * ### Adding a pattern validator
 *
 * The following example shows how to add a pattern validator to an input attached to an
 * ngModel binding.
 *
 * ```html
 * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 * @publicApi
 */
class PatternValidator extends AbstractValidatorDirective {
    constructor() {
        super(...arguments);
        /** @internal */
        this.inputName = 'pattern';
        /** @internal */
        this.normalizeInput = (input) => input;
        /** @internal */
        this.createValidator = (input) => patternValidator(input);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: PatternValidator, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Directive }); }
    static { this.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareDirective"]({ minVersion: "14.0.0", version: "17.3.12", type: PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: { pattern: "pattern" }, host: { properties: { "attr.pattern": "_enabled ? pattern : null" } }, providers: [PATTERN_VALIDATOR], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__ }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: PatternValidator, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                    providers: [PATTERN_VALIDATOR],
                    host: { '[attr.pattern]': '_enabled ? pattern : null' }
                }]
        }], propDecorators: { pattern: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }] } });

const SHARED_FORM_DIRECTIVES = [
    ɵNgNoValidate,
    NgSelectOption,
    ɵNgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
    MinValidator,
    MaxValidator,
];
const TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
const REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
class ɵInternalFormsSharedModule {
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵInternalFormsSharedModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule }); }
    static { this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "14.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵInternalFormsSharedModule, declarations: [ɵNgNoValidate,
            NgSelectOption,
            ɵNgSelectMultipleOption,
            DefaultValueAccessor,
            NumberValueAccessor,
            RangeValueAccessor,
            CheckboxControlValueAccessor,
            SelectControlValueAccessor,
            SelectMultipleControlValueAccessor,
            RadioControlValueAccessor,
            NgControlStatus,
            NgControlStatusGroup,
            RequiredValidator,
            MinLengthValidator,
            MaxLengthValidator,
            PatternValidator,
            CheckboxRequiredValidator,
            EmailValidator,
            MinValidator,
            MaxValidator], exports: [ɵNgNoValidate,
            NgSelectOption,
            ɵNgSelectMultipleOption,
            DefaultValueAccessor,
            NumberValueAccessor,
            RangeValueAccessor,
            CheckboxControlValueAccessor,
            SelectControlValueAccessor,
            SelectMultipleControlValueAccessor,
            RadioControlValueAccessor,
            NgControlStatus,
            NgControlStatusGroup,
            RequiredValidator,
            MinLengthValidator,
            MaxLengthValidator,
            PatternValidator,
            CheckboxRequiredValidator,
            EmailValidator,
            MinValidator,
            MaxValidator] }); }
    static { this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵInternalFormsSharedModule }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ɵInternalFormsSharedModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
            args: [{
                    declarations: SHARED_FORM_DIRECTIVES,
                    exports: SHARED_FORM_DIRECTIVES,
                }]
        }] });

/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` accepts one generic argument, which is the type of the controls inside.
 * If you need a heterogenous array, use {@link UntypedFormArray}.
 *
 * `FormArray` is one of the four fundamental building blocks used to define forms in Angular,
 * along with `FormControl`, `FormGroup`, and `FormRecord`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */
class FormArray extends AbstractControl {
    /**
     * Creates a new `FormArray` instance.
     *
     * @param controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!this.asyncValidator
        });
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
     *     around from the back, and if index is greatly negative (less than `-length`), the result is
     * undefined. This behavior is the same as `Array.at(index)`.
     */
    at(index) {
        return this.controls[this._adjustIndex(index)];
    }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     * @param options Specifies whether this FormArray instance should emit events after a new
     *     control is added.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * inserted. When false, no events are emitted.
     */
    push(control, options = {}) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control. If `index` is negative, wraps around
     *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
     * This behavior is the same as `Array.splice(index, 0, control)`.
     * @param control Form control to be inserted
     * @param options Specifies whether this FormArray instance should emit events after a new
     *     control is inserted.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * inserted. When false, no events are emitted.
     */
    insert(index, control, options = {}) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control.  If `index` is negative, wraps around
     *     from the back. If `index` is greatly negative (less than `-length`), removes the first
     *     element. This behavior is the same as `Array.splice(index, 1)`.
     * @param options Specifies whether this FormArray instance should emit events after a
     *     control is removed.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * removed. When false, no events are emitted.
     */
    removeAt(index, options = {}) {
        // Adjust the index, then clamp it at no less than 0 to prevent undesired underflows.
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
            adjustedIndex = 0;
        if (this.controls[adjustedIndex])
            this.controls[adjustedIndex]._registerOnCollectionChange(() => { });
        this.controls.splice(adjustedIndex, 1);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
    }
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control. If `index` is negative, wraps around
     *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
     *     element. This behavior is the same as `Array.splice(index, 1, control)`.
     * @param control The `AbstractControl` control to replace the existing control
     * @param options Specifies whether this FormArray instance should emit events after an
     *     existing control is replaced with a new one.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control is
     * replaced with a new one. When false, no events are emitted.
     */
    setControl(index, control, options = {}) {
        // Adjust the index, then clamp it at no less than 0 to prevent undesired underflows.
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0)
            adjustedIndex = 0;
        if (this.controls[adjustedIndex])
            this.controls[adjustedIndex]._registerOnCollectionChange(() => { });
        this.controls.splice(adjustedIndex, 1);
        if (control) {
            this.controls.splice(adjustedIndex, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
        this._onCollectionChange();
    }
    /**
     * Length of the control array.
     */
    get length() {
        return this.controls.length;
    }
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    setValue(value, options = {}) {
        assertAllValuesPresent(this, false, value);
        value.forEach((newValue, index) => {
            assertControlPresent(this, false, index);
            this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when the control
     * value is updated. When false, no events are emitted. The configuration options are passed to
     * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
     */
    patchValue(value, options = {}) {
        // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
        // `patchValue` can be called recursively and inner data structures might have these values,
        // so we just ignore such cases when a field containing FormArray instance receives `null` or
        // `undefined` as a value.
        if (value == null /* both `null` and `undefined` */)
            return;
        value.forEach((newValue, index) => {
            if (this.at(index)) {
                this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(arr.value);  // ['last']
     * console.log(arr.at(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    reset(value = [], options = {}) {
        this._forEachChild((control, index) => {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this._updatePristine(options);
        this._updateTouched(options);
        this.updateValueAndValidity(options);
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     */
    getRawValue() {
        return this.controls.map((control) => control.getRawValue());
    }
    /**
     * Remove all controls in the `FormArray`.
     *
     * @param options Specifies whether this FormArray instance should emit events after all
     *     controls are removed.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges` observables emit events with the latest status and value when all controls
     * in this FormArray instance are removed. When false, no events are emitted.
     *
     * @usageNotes
     * ### Remove all elements from a FormArray
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.length);  // 2
     *
     * arr.clear();
     * console.log(arr.length);  // 0
     * ```
     *
     * It's a simpler and more efficient alternative to removing all elements one by one:
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     *
     * while (arr.length) {
     *    arr.removeAt(0);
     * }
     * ```
     */
    clear(options = {}) {
        if (this.controls.length < 1)
            return;
        this._forEachChild((control) => control._registerOnCollectionChange(() => { }));
        this.controls.splice(0);
        this.updateValueAndValidity({ emitEvent: options.emitEvent });
    }
    /**
     * Adjusts a negative index by summing it with the length of the array. For very negative
     * indices, the result may remain negative.
     * @internal
     */
    _adjustIndex(index) {
        return index < 0 ? index + this.length : index;
    }
    /** @internal */
    _syncPendingControls() {
        let subtreeUpdated = this.controls.reduce((updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /** @internal */
    _forEachChild(cb) {
        this.controls.forEach((control, index) => {
            cb(control, index);
        });
    }
    /** @internal */
    _updateValue() {
        this.value =
            this.controls.filter((control) => control.enabled || this.disabled)
                .map((control) => control.value);
    }
    /** @internal */
    _anyControls(condition) {
        return this.controls.some((control) => control.enabled && condition(control));
    }
    /** @internal */
    _setUpControls() {
        this._forEachChild((control) => this._registerControl(control));
    }
    /** @internal */
    _allControlsDisabled() {
        for (const control of this.controls) {
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    }
    _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    }
    /** @internal */
    _find(name) {
        return this.at(name) ?? null;
    }
}
const UntypedFormArray = FormArray;
/**
 * @description
 * Asserts that the given control is an instance of `FormArray`
 *
 * @publicApi
 */
const isFormArray = (control) => control instanceof FormArray;

function isAbstractControlOptions(options) {
    return !!options &&
        (options.asyncValidators !== undefined ||
            options.validators !== undefined ||
            options.updateOn !== undefined);
}
// clang-format on
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a
 * `FormControl`, `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to
 * build complex forms.
 *
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @publicApi
 */
class FormBuilder {
    constructor() {
        this.useNonNullable = false;
    }
    /**
     * @description
     * Returns a FormBuilder in which automatically constructed `FormControl` elements
     * have `{nonNullable: true}` and are non-nullable.
     *
     * **Constructing non-nullable controls**
     *
     * When constructing a control, it will be non-nullable, and will reset to its initial value.
     *
     * ```ts
     * let nnfb = new FormBuilder().nonNullable;
     * let name = nnfb.control('Alex'); // FormControl<string>
     * name.reset();
     * console.log(name); // 'Alex'
     * ```
     *
     * **Constructing non-nullable groups or arrays**
     *
     * When constructing a group or array, all automatically created inner controls will be
     * non-nullable, and will reset to their initial values.
     *
     * ```ts
     * let nnfb = new FormBuilder().nonNullable;
     * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
     * name.reset();
     * console.log(name); // {who: 'Alex'}
     * ```
     * **Constructing *nullable* fields on groups or arrays**
     *
     * It is still possible to have a nullable field. In particular, any `FormControl` which is
     * *already* constructed will not be altered. For example:
     *
     * ```ts
     * let nnfb = new FormBuilder().nonNullable;
     * // FormGroup<{who: FormControl<string|null>}>
     * let name = nnfb.group({who: new FormControl('Alex')});
     * name.reset(); console.log(name); // {who: null}
     * ```
     *
     * Because the inner control is constructed explicitly by the caller, the builder has
     * no control over how it is created, and cannot exclude the `null`.
     */
    get nonNullable() {
        const nnfb = new FormBuilder();
        nnfb.useNonNullable = true;
        return nnfb;
    }
    group(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        let newOptions = {};
        if (isAbstractControlOptions(options)) {
            // `options` are `AbstractControlOptions`
            newOptions = options;
        }
        else if (options !== null) {
            // `options` are legacy form group options
            newOptions.validators = options.validator;
            newOptions.asyncValidators = options.asyncValidator;
        }
        return new FormGroup(reducedControls, newOptions);
    }
    /**
     * @description
     * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
     * containing all the keys and corresponding inner control types.
     *
     * @param controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options Configuration options object for the `FormRecord`. The object should have the
     * `AbstractControlOptions` type and might contain the following fields:
     * * `validators`: A synchronous validator function, or an array of validator functions.
     * * `asyncValidators`: A single async validator or array of async validator functions.
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
     * | submit').
     */
    record(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        // Cast to `any` because the inferred types are not as specific as Element.
        return new FormRecord(reducedControls, options);
    }
    /**
     * @description
     * Constructs a new `FormControl` with the given state, validators and options. Sets
     * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
     * control will be nullable. Accepts a single generic argument, which is the type  of the
     * control's value.
     *
     * @param formState Initializes the control with an initial state value, or
     * with an object that contains both a value and a disabled status.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or a `FormControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator
     * functions.
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
     * </code-example>
     */
    control(formState, validatorOrOpts, asyncValidator) {
        let newOptions = {};
        if (!this.useNonNullable) {
            return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        if (isAbstractControlOptions(validatorOrOpts)) {
            // If the second argument is options, then they are copied.
            newOptions = validatorOrOpts;
        }
        else {
            // If the other arguments are validators, they are copied into an options object.
            newOptions.validators = validatorOrOpts;
            newOptions.asyncValidators = asyncValidator;
        }
        return new FormControl(formState, { ...newOptions, nonNullable: true });
    }
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options. Accepts a single generic argument, which is the type of each control
     * inside the array.
     *
     * @param controls An array of child controls or control configs. Each child control is given an
     *     index when it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
     *     `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions.
     */
    array(controls, validatorOrOpts, asyncValidator) {
        const createdControls = controls.map(c => this._createControl(c));
        // Cast to `any` because the inferred types are not as specific as Element.
        return new FormArray(createdControls, validatorOrOpts, asyncValidator);
    }
    /** @internal */
    _reduceControls(controls) {
        const createdControls = {};
        Object.keys(controls).forEach(controlName => {
            createdControls[controlName] = this._createControl(controls[controlName]);
        });
        return createdControls;
    }
    /** @internal */
    _createControl(controls) {
        if (controls instanceof FormControl) {
            return controls;
        }
        else if (controls instanceof AbstractControl) { // A control; just return it
            return controls;
        }
        else if (Array.isArray(controls)) { // ControlConfig Tuple
            const value = controls[0];
            const validator = controls.length > 1 ? controls[1] : null;
            const asyncValidator = controls.length > 2 ? controls[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else { // T or FormControlState<T>
            return this.control(controls);
        }
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormBuilder, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable }); }
    static { this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormBuilder, providedIn: 'root' }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormBuilder, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{ providedIn: 'root' }]
        }] });
/**
 * @description
 * `NonNullableFormBuilder` is similar to {@link FormBuilder}, but automatically constructed
 * {@link FormControl} elements have `{nonNullable: true}` and are non-nullable.
 *
 * @publicApi
 */
class NonNullableFormBuilder {
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NonNullableFormBuilder, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable }); }
    static { this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NonNullableFormBuilder, providedIn: 'root', useFactory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FormBuilder).nonNullable }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NonNullableFormBuilder, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FormBuilder).nonNullable,
                }]
        }] });
/**
 * UntypedFormBuilder is the same as `FormBuilder`, but it provides untyped controls.
 */
class UntypedFormBuilder extends FormBuilder {
    group(controlsConfig, options = null) {
        return super.group(controlsConfig, options);
    }
    /**
     * Like `FormBuilder#control`, except the resulting control is untyped.
     */
    control(formState, validatorOrOpts, asyncValidator) {
        return super.control(formState, validatorOrOpts, asyncValidator);
    }
    /**
     * Like `FormBuilder#array`, except the resulting array is untyped.
     */
    array(controlsConfig, validatorOrOpts, asyncValidator) {
        return super.array(controlsConfig, validatorOrOpts, asyncValidator);
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UntypedFormBuilder, deps: null, target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable }); }
    static { this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UntypedFormBuilder, providedIn: 'root' }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UntypedFormBuilder, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/**
 * @module
 * @description
 * Entry point for all public APIs of the forms package.
 */
/**
 * @publicApi
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('17.3.12');

/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](/guide/forms-overview)
 * @see [Template-driven Forms Guide](/guide/forms)
 *
 * @publicApi
 */
class FormsModule {
    /**
     * @description
     * Provides options for configuring the forms module.
     *
     * @param opts An object of configuration options
     * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
     * correct, or to only call it `whenDisabled`, which is the legacy behavior.
     */
    static withConfig(opts) {
        return {
            ngModule: FormsModule,
            providers: [{
                    provide: CALL_SET_DISABLED_STATE,
                    useValue: opts.callSetDisabledState ?? setDisabledStateDefault
                }]
        };
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormsModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule }); }
    static { this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "14.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormsModule, declarations: [NgModel, NgModelGroup, NgForm], exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm] }); }
    static { this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormsModule, imports: [ɵInternalFormsSharedModule] }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FormsModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
            args: [{
                    declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                    exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                }]
        }] });
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 *
 * @see [Forms Overview](guide/forms-overview)
 * @see [Reactive Forms Guide](guide/reactive-forms)
 *
 * @publicApi
 */
class ReactiveFormsModule {
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
     * correct, or to only call it `whenDisabled`, which is the legacy behavior.
     */
    static withConfig(opts) {
        return {
            ngModule: ReactiveFormsModule,
            providers: [
                {
                    provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                    useValue: opts.warnOnNgModelWithFormControl ?? 'always'
                },
                {
                    provide: CALL_SET_DISABLED_STATE,
                    useValue: opts.callSetDisabledState ?? setDisabledStateDefault
                }
            ]
        };
    }
    static { this.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ReactiveFormsModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule }); }
    static { this.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "14.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ReactiveFormsModule, declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName] }); }
    static { this.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ReactiveFormsModule, imports: [ɵInternalFormsSharedModule] }); }
}
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "17.3.12", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ReactiveFormsModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
            args: [{
                    declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                    exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                }]
        }] });

/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a `FormGroup` that
 * consists of `FormControl` objects, and mapping them onto the DOM. `FormControl`
 * objects can then be used to read information from the form DOM elements.
 *
 * Forms providers are not included in default providers; you must import these providers
 * explicitly.
 */

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */
// This file only reexports content of the `src` folder. Keep it that way.

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.mjs.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/******/ 		id: moduleId,
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
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZluxButtonComponent: () => (/* reexport safe */ _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ZluxButtonComponent),
/* harmony export */   ZluxButtonModule: () => (/* reexport safe */ _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ZluxButtonModule),
/* harmony export */   ZluxCheckboxComponent: () => (/* reexport safe */ _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.ZluxCheckboxComponent),
/* harmony export */   ZluxCheckboxModule: () => (/* reexport safe */ _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.ZluxCheckboxModule),
/* harmony export */   ZluxErrorReportComponent: () => (/* reexport safe */ _components_error_report_error_report_component__WEBPACK_IMPORTED_MODULE_10__.ZluxErrorReportComponent),
/* harmony export */   ZluxErrorReportModule: () => (/* reexport safe */ _components_error_report_error_report_component__WEBPACK_IMPORTED_MODULE_10__.ZluxErrorReportModule),
/* harmony export */   ZluxErrorSeverity: () => (/* reexport safe */ _services_popup_manager_service__WEBPACK_IMPORTED_MODULE_7__.ZluxErrorSeverity),
/* harmony export */   ZluxFlyoverComponent: () => (/* reexport safe */ _components_flyover_flyover_component__WEBPACK_IMPORTED_MODULE_9__.ZluxFlyoverComponent),
/* harmony export */   ZluxFlyoverModule: () => (/* reexport safe */ _components_flyover_flyover_component__WEBPACK_IMPORTED_MODULE_9__.ZluxFlyoverModule),
/* harmony export */   ZluxInputText: () => (/* reexport safe */ _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__.ZluxInputText),
/* harmony export */   ZluxInputTextModule: () => (/* reexport safe */ _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__.ZluxInputTextModule),
/* harmony export */   ZluxPaginatorComponent: () => (/* reexport safe */ _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_8__.ZluxPaginatorComponent),
/* harmony export */   ZluxPaginatorModule: () => (/* reexport safe */ _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_8__.ZluxPaginatorModule),
/* harmony export */   ZluxPopupManagerComponent: () => (/* reexport safe */ _components_popup_manager_popup_manager_component__WEBPACK_IMPORTED_MODULE_6__.ZluxPopupManagerComponent),
/* harmony export */   ZluxPopupManagerModule: () => (/* reexport safe */ _components_popup_manager_popup_manager_component__WEBPACK_IMPORTED_MODULE_6__.ZluxPopupManagerModule),
/* harmony export */   ZluxPopupManagerService: () => (/* reexport safe */ _services_popup_manager_service__WEBPACK_IMPORTED_MODULE_7__.ZluxPopupManagerService),
/* harmony export */   ZluxPopupWindowButtonAreaComponent: () => (/* reexport safe */ _components_popup_window_button_area_popup_window_button_area_component__WEBPACK_IMPORTED_MODULE_1__.ZluxPopupWindowButtonAreaComponent),
/* harmony export */   ZluxPopupWindowComponent: () => (/* reexport safe */ _components_popup_window_popup_window_component__WEBPACK_IMPORTED_MODULE_0__.ZluxPopupWindowComponent),
/* harmony export */   ZluxPopupWindowModule: () => (/* reexport safe */ _components_popup_window_popup_window_component__WEBPACK_IMPORTED_MODULE_0__.ZluxPopupWindowModule),
/* harmony export */   ZluxTabbingComponent: () => (/* reexport safe */ _components_tabbing_tabbing_component__WEBPACK_IMPORTED_MODULE_11__.ZluxTabbingComponent),
/* harmony export */   ZluxTabbingModule: () => (/* reexport safe */ _components_tabbing_tabbing_component__WEBPACK_IMPORTED_MODULE_11__.ZluxTabbingModule),
/* harmony export */   ZluxVeilComponent: () => (/* reexport safe */ _components_veil_veil_component__WEBPACK_IMPORTED_MODULE_5__.ZluxVeilComponent),
/* harmony export */   ZluxVeilModule: () => (/* reexport safe */ _components_veil_veil_component__WEBPACK_IMPORTED_MODULE_5__.ZluxVeilModule)
/* harmony export */ });
/* harmony import */ var _components_popup_window_popup_window_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/popup-window/popup-window.component */ "./src/app/components/popup-window/popup-window.component.ts");
/* harmony import */ var _components_popup_window_button_area_popup_window_button_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/popup-window-button-area/popup-window-button-area.component */ "./src/app/components/popup-window-button-area/popup-window-button-area.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ "./src/app/components/checkbox/checkbox.component.ts");
/* harmony import */ var _components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inputtext/inputtext */ "./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var _components_veil_veil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/veil/veil.component */ "./src/app/components/veil/veil.component.ts");
/* harmony import */ var _components_popup_manager_popup_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/popup-manager/popup-manager.component */ "./src/app/components/popup-manager/popup-manager.component.ts");
/* harmony import */ var _services_popup_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/popup-manager.service */ "./src/app/services/popup-manager.service.ts");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "./src/app/components/paginator/paginator.component.ts");
/* harmony import */ var _components_flyover_flyover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/flyover/flyover.component */ "./src/app/components/flyover/flyover.component.ts");
/* harmony import */ var _components_error_report_error_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/error-report/error-report.component */ "./src/app/components/error-report/error-report.component.ts");
/* harmony import */ var _components_tabbing_tabbing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tabbing/tabbing.component */ "./src/app/components/tabbing/tabbing.component.ts");
/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*//*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/
})();

var __webpack_exports__ZluxButtonComponent = __webpack_exports__.ZluxButtonComponent;
var __webpack_exports__ZluxButtonModule = __webpack_exports__.ZluxButtonModule;
var __webpack_exports__ZluxCheckboxComponent = __webpack_exports__.ZluxCheckboxComponent;
var __webpack_exports__ZluxCheckboxModule = __webpack_exports__.ZluxCheckboxModule;
var __webpack_exports__ZluxErrorReportComponent = __webpack_exports__.ZluxErrorReportComponent;
var __webpack_exports__ZluxErrorReportModule = __webpack_exports__.ZluxErrorReportModule;
var __webpack_exports__ZluxErrorSeverity = __webpack_exports__.ZluxErrorSeverity;
var __webpack_exports__ZluxFlyoverComponent = __webpack_exports__.ZluxFlyoverComponent;
var __webpack_exports__ZluxFlyoverModule = __webpack_exports__.ZluxFlyoverModule;
var __webpack_exports__ZluxInputText = __webpack_exports__.ZluxInputText;
var __webpack_exports__ZluxInputTextModule = __webpack_exports__.ZluxInputTextModule;
var __webpack_exports__ZluxPaginatorComponent = __webpack_exports__.ZluxPaginatorComponent;
var __webpack_exports__ZluxPaginatorModule = __webpack_exports__.ZluxPaginatorModule;
var __webpack_exports__ZluxPopupManagerComponent = __webpack_exports__.ZluxPopupManagerComponent;
var __webpack_exports__ZluxPopupManagerModule = __webpack_exports__.ZluxPopupManagerModule;
var __webpack_exports__ZluxPopupManagerService = __webpack_exports__.ZluxPopupManagerService;
var __webpack_exports__ZluxPopupWindowButtonAreaComponent = __webpack_exports__.ZluxPopupWindowButtonAreaComponent;
var __webpack_exports__ZluxPopupWindowComponent = __webpack_exports__.ZluxPopupWindowComponent;
var __webpack_exports__ZluxPopupWindowModule = __webpack_exports__.ZluxPopupWindowModule;
var __webpack_exports__ZluxTabbingComponent = __webpack_exports__.ZluxTabbingComponent;
var __webpack_exports__ZluxTabbingModule = __webpack_exports__.ZluxTabbingModule;
var __webpack_exports__ZluxVeilComponent = __webpack_exports__.ZluxVeilComponent;
var __webpack_exports__ZluxVeilModule = __webpack_exports__.ZluxVeilModule;
export { __webpack_exports__ZluxButtonComponent as ZluxButtonComponent, __webpack_exports__ZluxButtonModule as ZluxButtonModule, __webpack_exports__ZluxCheckboxComponent as ZluxCheckboxComponent, __webpack_exports__ZluxCheckboxModule as ZluxCheckboxModule, __webpack_exports__ZluxErrorReportComponent as ZluxErrorReportComponent, __webpack_exports__ZluxErrorReportModule as ZluxErrorReportModule, __webpack_exports__ZluxErrorSeverity as ZluxErrorSeverity, __webpack_exports__ZluxFlyoverComponent as ZluxFlyoverComponent, __webpack_exports__ZluxFlyoverModule as ZluxFlyoverModule, __webpack_exports__ZluxInputText as ZluxInputText, __webpack_exports__ZluxInputTextModule as ZluxInputTextModule, __webpack_exports__ZluxPaginatorComponent as ZluxPaginatorComponent, __webpack_exports__ZluxPaginatorModule as ZluxPaginatorModule, __webpack_exports__ZluxPopupManagerComponent as ZluxPopupManagerComponent, __webpack_exports__ZluxPopupManagerModule as ZluxPopupManagerModule, __webpack_exports__ZluxPopupManagerService as ZluxPopupManagerService, __webpack_exports__ZluxPopupWindowButtonAreaComponent as ZluxPopupWindowButtonAreaComponent, __webpack_exports__ZluxPopupWindowComponent as ZluxPopupWindowComponent, __webpack_exports__ZluxPopupWindowModule as ZluxPopupWindowModule, __webpack_exports__ZluxTabbingComponent as ZluxTabbingComponent, __webpack_exports__ZluxTabbingModule as ZluxTabbingModule, __webpack_exports__ZluxVeilComponent as ZluxVeilComponent, __webpack_exports__ZluxVeilModule as ZluxVeilModule };

//# sourceMappingURL=index.mjs.map