import './polyfills.server.mjs';
import{$ as Ce,A as a,B as l,C as _,D as w,E as ce,F as d,G as $,H as C,I as he,J as fe,K as pe,L as V,M as I,O as ge,T as me,V as ye,W as ve,X as q,Z as _e,_ as S,a as ee,aa as x,b as te,ba as Ve,c as ie,ca as De,d as G,e as B,f as U,fa as be,g,h as ne,i as A,j as E,k as R,l as m,la as Me,m as re,n as oe,o as se,p as ae,q as H,r as F,s as le,t as u,u as s,v as L,w as v,x as ue,y as W,z as de}from"./chunk-CYASNEII.mjs";import{a as h,b as p}from"./chunk-VVCT4QZE.mjs";var O=(()=>{let e=class e{constructor(i){this.httpClientService=i}fetchData(i){return this.httpClientService.get(`https://api.openweathermap.org/data/2.5/weather?q=${i}&appid=b16044a87ee96615092a554d95f34ad3`)}};e.\u0275fac=function(r){return new(r||e)(ne(Ce))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Oe=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(H))},e.\u0275dir=m({type:e});let t=e;return t})(),Je=(()=>{let e=class e extends Oe{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ae(e)))(o||e)}})(),e.\u0275dir=m({type:e,features:[v]});let t=e;return t})(),Ne=new g("");var Qe={provide:Ne,useExisting:G(()=>T),multi:!0};function et(){let t=q()?q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var tt=new g(""),T=(()=>{let e=class e extends Oe{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!et())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(L),s(H),s(tt,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&w("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[V([Qe]),v]});let t=e;return t})();var it=new g(""),nt=new g("");function Pe(t){return t!=null}function ke(t){return ge(t)?ee(t):t}function Te(t){let e={};return t.forEach(n=>{e=n!=null?h(h({},e),n):e}),Object.keys(e).length===0?null:e}function je(t,e){return e.map(n=>n(t))}function rt(t){return!t.validate}function Ge(t){return t.map(e=>rt(e)?e:n=>e.validate(n))}function ot(t){if(!t)return null;let e=t.filter(Pe);return e.length==0?null:function(n){return Te(je(n,e))}}function Be(t){return t!=null?ot(Ge(t)):null}function st(t){if(!t)return null;let e=t.filter(Pe);return e.length==0?null:function(n){let i=je(n,e).map(ke);return ie(i).pipe(te(Te))}}function Ue(t){return t!=null?st(Ge(t)):null}function Ae(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function at(t){return t._rawValidators}function lt(t){return t._rawAsyncValidators}function Z(t){return t?Array.isArray(t)?t:[t]:[]}function P(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ee(t,e){let n=Z(e);return Z(t).forEach(r=>{P(n,r)||n.push(r)}),n}function Fe(t,e){return Z(e).filter(n=>!P(t,n))}var k=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},X=class extends k{get formDirective(){return null}get path(){return null}},M=class extends k{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Y=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ut={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Qt=p(h({},ut),{"[class.ng-submitted]":"isSubmitted"}),Re=(()=>{let e=class e extends Y{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(M,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&de("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[v]});let t=e;return t})();var D="VALID",N="INVALID",y="PENDING",b="DISABLED";function dt(t){return(j(t)?t.validators:t)||null}function ct(t){return Array.isArray(t)?Be(t):t||null}function ht(t,e){return(j(e)?e.asyncValidators:t)||null}function ft(t){return Array.isArray(t)?Ue(t):t||null}function j(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var K=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===N}get pending(){return this.status==y}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Fe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=y,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this.errors=null,this._forEachChild(i=>{i.disable(p(h({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=D,this._forEachChild(i=>{i.enable(p(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===y)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator=!0;let n=ke(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(N)?N:D}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}};var He=new g("CallSetDisabledState",{providedIn:"root",factory:()=>J}),J="always";function pt(t,e){return[...e.path,t]}function gt(t,e,n=J){yt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),vt(t,e),Ct(t,e),_t(t,e),mt(t,e)}function we(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function mt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function yt(t,e){let n=at(t);e.validator!==null?t.setValidators(Ae(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=lt(t);e.asyncValidator!==null?t.setAsyncValidators(Ae(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();we(e._rawValidators,r),we(e._rawAsyncValidators,r)}function vt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Le(t,e)})}function _t(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Le(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Le(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ct(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Vt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Dt(t){return Object.getPrototypeOf(t.constructor)===Je}function bt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===T?n=o:Dt(o)?i=o:r=o}),r||i||n||null}function Ie(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Se(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Mt=class extends K{constructor(e=null,n,i){super(dt(n),ht(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Se(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ie(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ie(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Se(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var At={provide:M,useExisting:G(()=>Q)},xe=Promise.resolve(),Q=(()=>{let e=class e extends M{constructor(i,r,o,f,c,Ye){super(),this._changeDetectorRef=c,this.callSetDisabledState=Ye,this.control=new Mt,this._registered=!1,this.name="",this.update=new F,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=bt(this,f)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Vt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){gt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){xe.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&ye(r);xe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?pt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(X,9),s(it,10),s(nt,10),s(Ne,10),s(me,8),s(He,8))},e.\u0275dir=m({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[A.None,"disabled","isDisabled"],model:[A.None,"ngModel","model"],options:[A.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[V([At]),v,re]});let t=e;return t})();var Et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=U({});let t=e;return t})();var We=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:He,useValue:i.callSetDisabledState??J}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=U({imports:[Et]});let t=e;return t})();function wt(t,e){t&1&&(a(0,"div",18),d(1," City Not Found "),l())}function It(t,e){t&1&&(a(0,"div",19),d(1," Loading "),l())}var $e=(()=>{let e=class e{constructor(i){this.weatherService=i,this.loading=!1,this.cityName="Chennai",this.error="",this.data={temp:String,FeelsLike:String,Pressure:String,temp_min:String,temp_max:String,name:String,icon:String,humidity:String,base:String}}ngOnInit(){this.loadData()}loadData(){this.cityName&&(this.loading=!0,console.log(this.cityName),this.weatherService.fetchData(this.cityName).subscribe({next:i=>{this.loading=!0,console.log("Data:",i),this.data.base=i.base,this.data.temp=i.main.temp,this.data.FeelsLike=i.main.feels_like,this.data.Pressure=i.main.pressure,this.data.temp_min=i.main.temp_min,this.data.temp_max=i.main.temp_max,this.data.name=i.name,this.data.icon=i.weather[0].icon,this.data.humidity=i.main.humidity,this.error="",this.loading=!1},error:i=>{console.log("Error:",i),this.error=i.message,console.log(this.error)}}))}};e.\u0275fac=function(r){return new(r||e)(s(O))},e.\u0275cmp=E({type:e,selectors:[["app-weather-card"]],standalone:!0,features:[V([O]),I],decls:38,vars:11,consts:[[1,"container"],[1,"weather-card"],["viewBox","0 0 960 300"],["id","s-text"],["text-anchor","middle","x","50%","y","80%"],[1,"g-ants"],[0,"xlink","href","#s-text",1,"text-copy"],["class","Error alert alert-danger    ",4,"ngIf"],["class","Error alert alert-warning",4,"ngIf"],[1,"input-group","mb-3"],["type","text","placeholder","Enter City Name",1,"font-control","search-input",3,"ngModelChange","ngModel"],[1,"btn","btn-success","search-btn",3,"click"],[1,"weather-info"],["alt","weather-image",3,"src"],[1,"temperature"],[1,"description"],[1,"additional-info"],[1,"info-item"],[1,"Error","alert","alert-danger"],[1,"Error","alert","alert-warning"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"div",1)(2,"div",0),oe(),a(3,"svg",2)(4,"symbol",3)(5,"text",4),d(6,"Weather"),l()(),a(7,"g",5),_(8,"use",6)(9,"use",6)(10,"use",6)(11,"use",6)(12,"use",6),l()()(),ue(13,wt,2,0,"div",7)(14,It,2,0,"div",8),se(),a(15,"div",9)(16,"input",10),pe("ngModelChange",function(c){return fe(o.cityName,c)||(o.cityName=c),c}),l(),a(17,"button",11),w("click",function(){return o.loadData()}),d(18,"Search"),l()(),a(19,"div",12),_(20,"img",13),a(21,"div",14),d(22),l(),a(23,"div",15),d(24),l()(),a(25,"div",16)(26,"div",17)(27,"span"),d(28),l()(),a(29,"div",17)(30,"span"),d(31),l()(),a(32,"div",17)(33,"span"),d(34),l()(),a(35,"div",17)(36,"span"),d(37),l()()()()()),r&2&&(u(13),W("ngIf",o.error),u(),W("ngIf",o.loading==!0),u(2),he("ngModel",o.cityName),u(4),ce("src","https://openweathermap.org/img/wn/",o.data.icon,"@2x.png",le),u(2),$((+o.data.temp-273.15).toFixed(2)),u(2),$(o.data.base),u(4),C("Feels Like : ",o.data.FeelsLike,""),u(3),C("Pressure : ",o.data.Pressure,""),u(3),C("Humidity : ",o.data.humidity,""),u(3),C("City : ",o.data.name,""))},dependencies:[S,_e,x,We,T,Re,Q],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;font-weight:800;margin:0;padding:0}body[_ngcontent-%COMP%]{background:#030321;font-family:sans-serif}.container[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center}svg[_ngcontent-%COMP%]{display:block;font:10.5em sanserif;letter-spacing:10px;width:960px;height:300px;margin:0 auto}.text-copy[_ngcontent-%COMP%]{fill:none;stroke:#fff;stroke-dasharray:6% 29%;stroke-width:5px;stroke-dashoffset:0%;animation:_ngcontent-%COMP%_stroke-offset 5.5s infinite linear}.text-copy[_ngcontent-%COMP%]:nth-child(1){stroke:#18cee2;animation-delay:-1}.text-copy[_ngcontent-%COMP%]:nth-child(2){stroke:#278089;animation-delay:-2s}.text-copy[_ngcontent-%COMP%]:nth-child(3){stroke:#68e3f0;animation-delay:-3s}.text-copy[_ngcontent-%COMP%]:nth-child(4){stroke:#85dfe5;animation-delay:-4s}.text-copy[_ngcontent-%COMP%]:nth-child(5){stroke:#bde1e9;animation-delay:-5s}@keyframes _ngcontent-%COMP%_stroke-offset{to{stroke-dashoffset:-35%}}.weather-card[_ngcontent-%COMP%]{max-width:60%;min-width:250px;margin:100px auto;background:linear-gradient(to right,#ff9af5,violet);border-radius:15px;padding:20px;box-shadow:0 0 20px #0000001a;color:#721c24}.weather-info[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}.info-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:10px;color:#721c24}.search-btn[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.temperature[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#721c24}.description[_ngcontent-%COMP%]{margin-top:5px;color:#721c24}.Error[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px;margin-bottom:10px;color:red}.input-group[_ngcontent-%COMP%]{display:flex;justify-content:center}.additional-info[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;align-items:center}"]});let t=e;return t})();var qe=(()=>{let e=class e{constructor(){this.title="Weather_Try"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=E({type:e,selectors:[["app-root"]],standalone:!0,features:[I],decls:1,vars:0,template:function(r,o){r&1&&_(0,"app-weather-card")},dependencies:[S,$e,x]});let t=e;return t})();var ze=[];var Ze={providers:[Me(ze),De()]};var St={providers:[be()]},Xe=ve(Ze,St);var xt=()=>Ve(qe,Xe),Mi=xt;export{Mi as a};