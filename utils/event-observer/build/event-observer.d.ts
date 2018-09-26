export interface EventObserverCallback<T extends Event> {
    (event: T, observer: EventObserver<T>): void;
}
export declare class EventObserver<T extends Event> {
    protected _cb: EventObserverCallback<T>;
    protected _opt: {
        passive: boolean;
    };
    protected _observationTargets: Map<Element, string[]>;
    constructor(_cb: EventObserverCallback<T>, _opt?: {
        passive: boolean;
    });
    observe(element: Element, type: string): void;
    unobserve(element: Element, type: string): void;
    handleEvent(ev: T): void;
}
export default EventObserver;
