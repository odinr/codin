export interface EventObserverCallback<T extends Event> {
    (event: T, observer: EventObserver<T>): void;
}
/**
 * Wrapper class for mapping events to a callback.
 * Observe and unobserve without redefining callback.
 * Hold reference to callback.
 */
export declare class EventObserver<T extends Event> {
    protected _cb: EventObserverCallback<T>;
    protected _opt: {
        passive: boolean;
    };
    protected _observationTargets: Map<Element, string[]>;
    constructor(_cb: EventObserverCallback<T>, _opt?: {
        passive: boolean;
    });
    /**
     * Observers an element type of event
     * @param element element to observe
     * @param type type of event to observe
     */
    observe(element: Element, type: string): void;
    /**
     * Stops listening for event on element.
     * If no type provided, all registered events are removed.
     * @param element element to unregister event listening
     * @param type type of event to stop listen for
     */
    unobserve(element: Element, type?: string): void;
    /**
     * Internal proxy for callbacks.
     * @param ev Event
     */
    handleEvent(ev: T): void;
}
export default EventObserver;
