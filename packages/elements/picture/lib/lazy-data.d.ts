export declare const observer: IntersectionObserver | {
    observe: (target: Element) => boolean;
};
export declare function observe(element: Element, attributes: string[]): void;
export default observe;
