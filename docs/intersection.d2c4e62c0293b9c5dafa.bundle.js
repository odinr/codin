(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{674:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var tslib=__webpack_require__(677),lit_element=__webpack_require__(676);__webpack_require__(678);class IntersectionEvent extends CustomEvent{constructor(type,eventInit){super(type,eventInit)}}__webpack_require__(679);__webpack_require__.d(__webpack_exports__,"IntersectionElement",function(){return intersection_element_IntersectionElement});let intersection_element_IntersectionElement=class IntersectionElement extends lit_element.a{get intersected(){return this.hasAttribute("intersected")}get options(){const{margin:rootMargin,threshold:threshold}=this;return{rootMargin:rootMargin,threshold:threshold}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this.setAttribute("intersected",""),this._removeAdapter()}attributeChangedCallback(name,old,value){super.attributeChangedCallback(name,old,value),["disabled","margin","threshold"].includes(name)&&old!==value&&this._removeAdapter()}render(){!this.disabled&&!this.observer&&this._createAdapter()}_createAdapter(){this.observer&&this._removeAdapter(),this.observer=new IntersectionObserver(this._onIntersection.bind(this),this.options),this.observer.observe(this)}_removeAdapter(){this.observer instanceof IntersectionObserver&&(this.removeAttribute("intersecting"),this.observer.disconnect(),delete this.observer)}_onIntersection(entries){const[entry]=entries;if(this._emitEntryEvent(entry,{bubbles:!0})){const{isIntersecting:isIntersecting}=entry;this.toggleAttribute("intersecting",isIntersecting),isIntersecting&&(isIntersecting&&this.setAttribute("intersected",""),this.once&&(this.disabled=!0))}}_emitEntryEvent(entry,args){const{isIntersecting:isIntersecting}=entry,eventInit={...args,detail:{entry:entry}},event=new IntersectionEvent(isIntersecting?"intersectionin":"intersectionout",eventInit);return this.dispatchEvent(event),!event.defaultPrevented}};Object(tslib.__decorate)([Object(lit_element.f)({type:Boolean,reflect:!0})],intersection_element_IntersectionElement.prototype,"disabled",void 0),Object(tslib.__decorate)([Object(lit_element.f)({type:Boolean})],intersection_element_IntersectionElement.prototype,"once",void 0),Object(tslib.__decorate)([Object(lit_element.f)()],intersection_element_IntersectionElement.prototype,"margin",void 0),Object(tslib.__decorate)([Object(lit_element.f)({type:Array,converter:s=>s.split(",").map(v=>parseFloat(v))})],intersection_element_IntersectionElement.prototype,"threshold",void 0),intersection_element_IntersectionElement=Object(tslib.__decorate)([Object(lit_element.c)("cwc-intersection")],intersection_element_IntersectionElement)}}]);
//# sourceMappingURL=intersection.d2c4e62c0293b9c5dafa.bundle.js.map