import { CustomIntersectionEventTypes, canObserveIntersection, createIntersctionObserver, } from './lib/intersection-observer.js';
export * from './lib/intersection-observer.js';
export var attributes;
(function (attributes) {
    attributes["disabled"] = "disabled";
    attributes["root"] = "root";
    attributes["margin"] = "margin";
    attributes["threshold"] = "threshold";
    attributes["visible"] = "visible";
})(attributes || (attributes = {}));
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
    /** @inheritDoc */
    static get observedAttributes() {
        return [attributes.disabled];
    }
    /**
     * When element is disabled observation of intersactions are disabled.
     * Element becomes disabled if no {IntersectionObserver} is in window when connected to DOM
     * @see polyfill
     */
    get disabled() {
        return !(!this.hasAttribute(attributes.disabled) && canObserveIntersection());
    }
    /**
     * Enabling observation will check if {IntersectionObserver} is in window.
     * If the
     * @param disabled {Boolean} Enables or disables intersection observing of element.
     * @see polyfill
     */
    set disabled(disabled) {
        const enabled = !disabled && canObserveIntersection();
        enabled ? this.removeAttribute(attributes.disabled) : this.setAttribute(attributes.disabled, '');
    }
    /**
     * If observer, the attrbiute visible will be toggled when intersecting
     * @readonly
     */
    get visible() {
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
    attributeChangedCallback(name) {
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
    handleEvent({ detail }) {
        const { entry } = detail;
        entry.isIntersecting ? this.setAttribute(attributes.visible, '') : this.removeAttribute(attributes.visible);
    }
    /**
     * Start observing element
     */
    observe() {
        this._observer || this._createObserver();
        this.addEventListener(CustomIntersectionEventTypes.intersection, this, false);
        this._observer && this._observer.observe(this);
    }
    /**
     * Stop observing element, this will not remove the observer.
     */
    unobserve() {
        this.removeEventListener(CustomIntersectionEventTypes.intersection, this);
        this._observer && this._observer.unobserve(this);
    }
    _recreateObserver() {
        this._createObserver();
    }
    _createObserver() {
        this._observer && this._removeObserver();
        this._observer = createIntersctionObserver(this._getObserverOptions());
    }
    _removeObserver() {
        this._observer && this._observer.disconnect();
        delete this._observer;
    }
    _getObserverOptions() {
        const attrRoot = this.getAttribute('root');
        const attrThreshold = this.getAttribute('threshold');
        const attrMargin = this.getAttribute('margin');
        return {
            root: attrRoot ? document.querySelector(attrRoot) : null,
            rootMargin: attrMargin || undefined,
            threshold: attrThreshold ? attrThreshold.split(',').map(parseFloat) : [0]
        };
    }
    _visible(visible) {
        visible ? this.setAttribute(attributes.visible, '') : this.removeAttribute(attributes.visible);
    }
}
export default CustomIntersectionPanel;
//# sourceMappingURL=intersection-panel.js.map