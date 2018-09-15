import { CustomIntersectionEvent, CustomIntersectionEventTypes } from './lib/intersection-observer.js';
export * from './lib/intersection-observer.js';
export declare enum attributes {
    disabled = "disabled",
    root = "root",
    margin = "margin",
    threshold = "threshold",
    visible = "visible"
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
export declare class CustomIntersectionPanel extends HTMLElement {
    protected _observer: IntersectionObserver | undefined;
    /** @inheritDoc */
    static readonly observedAttributes: attributes[];
    /**
     * When element is disabled observation of intersactions are disabled.
     * Element becomes disabled if no {IntersectionObserver} is in window when connected to DOM
     * @see polyfill
     */
    /**
    * Enabling observation will check if {IntersectionObserver} is in window.
    * If the
    * @param disabled {Boolean} Enables or disables intersection observing of element.
    * @see polyfill
    */
    disabled: Boolean;
    /**
     * If observer, the attrbiute visible will be toggled when intersecting
     * @readonly
     */
    readonly visible: Boolean;
    /** @inheritDoc */
    connectedCallback(): void;
    /** @inheritDoc */
    disconnectedCallback(): void;
    /** @inheritDoc */
    attributeChangedCallback(name: string): void;
    /**
     * @internal should only be called internally
     * Handles events from observer
     * @param param0 {CustomIntersectionEvent}
     */
    handleEvent({ detail }: CustomIntersectionEvent<CustomIntersectionEventTypes.intersection>): void;
    /**
     * Start observing element
     */
    observe(): void;
    /**
     * Stop observing element, this will not remove the observer.
     */
    unobserve(): void;
    protected _recreateObserver(): void;
    protected _createObserver(): void;
    protected _removeObserver(): void;
    protected _getObserverOptions(): IntersectionObserverInit;
    protected _visible(visible: Boolean): void;
}
export default CustomIntersectionPanel;
