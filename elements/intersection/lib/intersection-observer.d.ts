export declare enum CustomIntersectionEventTypes {
    intersection = "cwc.intersection",
    visible = "cwc.intersection.in",
    hidden = "cwc.intersection.out"
}
export interface CustomIntersectionEventDetail {
    observer: IntersectionObserver;
    entry: IntersectionObserverEntry;
}
export declare class CustomIntersectionEvent<T extends CustomIntersectionEventTypes> extends CustomEvent<CustomIntersectionEventDetail> {
    constructor(type: T, detail: CustomIntersectionEventDetail);
}
export declare type CustomIntersectionVisibilityEvents = CustomIntersectionEventTypes.visible | CustomIntersectionEventTypes.hidden;
export declare class CustomIntersectionVisibilityEvent extends CustomIntersectionEvent<CustomIntersectionVisibilityEvents> {
    constructor(detail: CustomIntersectionEventDetail);
}
export declare function canObserveIntersection(): boolean;
export declare function createIntersctionObserver(options?: IntersectionObserverInit): IntersectionObserver;
export default createIntersctionObserver;
