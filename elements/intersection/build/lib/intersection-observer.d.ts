export declare enum IntersectionEventTypes {
    intersection = "cwc.intersection",
    visible = "cwc.intersection.in",
    hidden = "cwc.intersection.out"
}
export interface IntersectionEventDetail {
    observer: IntersectionObserver;
    entry: IntersectionObserverEntry;
}
export declare class IntersectionEvent<T extends IntersectionEventTypes> extends CustomEvent<IntersectionEventDetail> {
    constructor(type: T, detail: IntersectionEventDetail);
}
export declare type IntersectionVisibilityEvents = IntersectionEventTypes.visible | IntersectionEventTypes.hidden;
export declare class IntersectionVisibilityEvent extends IntersectionEvent<IntersectionVisibilityEvents> {
    constructor(detail: IntersectionEventDetail);
}
export declare function canObserveIntersection(): boolean;
export declare function createIntersctionObserver(options?: IntersectionObserverInit): IntersectionObserver;
export default createIntersctionObserver;
