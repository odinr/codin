export declare const observer: IntersectionObserver | {
    /** @todo make polyfill for shitty browsers */
    observe: (target: Element) => boolean;
};
export declare function observe(element: Element, attributes: string[]): void;
export default observe;
