import {
  CustomIntersectionEvent,
  CustomIntersectionEventTypes,
  canObserveIntersection,
  createIntersctionObserver,
} from './lib/intersection-observer.js';
export * from './lib/intersection-observer.js';

export enum attributes {
 disabled = 'disabled',
 root = 'root',
 margin = 'margin',
 threshold = 'threshold',
 visible = 'visible',
}

/**
 * @property visible [get]
 * Reflects visibilty of element when oberved
 *
 * @attribute root
 * The element that is used as the viewport for checking visiblity of the target.
 * Must be the ancestor of this element and visible fom document @todo check closes document (shadowroot).
 * Defaults to the browser viewport if not specified.
 *
 * @attribute margin
 * Margin around the root. The values can be percentages.
 * Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
 * This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections.
 *
 * @attribute threshold
 * Array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
 * If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5.
 * If you want the callback run every time visibility passes another 25%, you would specify '0, 0.25, 0.5, 0.75, 1'.
 * The default is 0 (meaning as soon as even one pixel is visible, the callback will be run).
 * A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
 *
 * @attribute disabled
 * Enables or disables the intersection observer, by removing or adding the attribute disabled.
 * Element becomes disabled if no IntersectionObserver in window @see polyfill
 *
 * @event @see IntersectionObserver
 */
export class CustomIntersectionPanel extends HTMLElement {

 protected _observer: IntersectionObserver|undefined;

 /** @inheritDoc */
 static get observedAttributes() {
  return [attributes.disabled];
 }

 /**
  * When element is disabled observation of intersactions are disabled.
  * Element becomes disabled if no {IntersectionObserver} is in window when connected to DOM
  * @see polyfill
  */
 public get disabled(): Boolean {
  return !(!this.hasAttribute(attributes.disabled) && canObserveIntersection());
 }

 /**
  * Enabling observation will check if {IntersectionObserver} is in window.
  * If the
  * @param disabled {Boolean} Enables or disables intersection observing of element.
  * @see polyfill
  */
 public set disabled(disabled: Boolean) {
  const enabled = !disabled && canObserveIntersection();
  enabled ? this.removeAttribute(attributes.disabled) : this.setAttribute(attributes.disabled, '');
 }

 /**
  * If observer, the attrbiute visible will be toggled when intersecting
  * @readonly
  */
 public get visible(): Boolean {
  return this.hasAttribute(attributes.visible);
 }

 /** @inheritDoc */
 connectedCallback() {
  this.disabled = this.disabled;
  this.disabled || this.observe();
 }

 /** @inheritDoc */
 disconnectedCallback() {
  this._removeObserver();
 }

 /** @inheritDoc */
 attributeChangedCallback(name: string) {
  switch (name) {
    case attributes.disabled:
     this.disabled ? this.unobserve() : this.observe();
     break;
  }
 }

 /**
  * @internal should only be called internally
  * Handles events from observer
  * @param param0 {CustomIntersectionEvent}
  */
 handleEvent({detail}: CustomIntersectionEvent<CustomIntersectionEventTypes.intersection>) {
  const {entry} = detail;
  entry.isIntersecting ? this.setAttribute(attributes.visible, '') : this.removeAttribute(attributes.visible);
 }

 /**
  * Start observing element
  */
 public observe(): void {
  this._observer || this._createObserver();
  this.addEventListener(CustomIntersectionEventTypes.intersection, this, false);
  this._observer && this._observer.observe(this);
 }

 /**
  * Stop observing element, this will not remove the observer.
  */
 public unobserve(): void {
  this.removeEventListener(CustomIntersectionEventTypes.intersection, this);
  this._observer && this._observer.unobserve(this);
 }

 protected _recreateObserver(): void {
  this._createObserver();
 }

 protected _createObserver(): void {
  this._observer && this._removeObserver();
  this._observer = createIntersctionObserver(this._getObserverOptions());
 }

 protected _removeObserver(): void {
  this._observer && this._observer.disconnect();
  delete this._observer;
 }

 protected _getObserverOptions(): IntersectionObserverInit {
  const attrRoot = this.getAttribute('root');
  const attrThreshold = this.getAttribute('threshold');
  const attrMargin = this.getAttribute('margin');
  return {
    root: attrRoot ? document.querySelector(attrRoot) : null,
    rootMargin: attrMargin || undefined,
    threshold: attrThreshold ? attrThreshold.split(',').map(parseFloat) : [0]
   };
 }

 protected _visible(visible: Boolean): void {
  visible ? this.setAttribute(attributes.visible, '') : this.removeAttribute(attributes.visible);
 }
}

export default CustomIntersectionPanel;
