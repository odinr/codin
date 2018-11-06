export interface PromisedElementEventCallback<E extends Event> {
    (element: Element, event?: E): any;
}
/**
 * Awaits an event to happen.
 * When event is triggered, callback is called and removes listner.
 * @param el Element to await event from
 * @param type Type of event to await
 * @param cb Callback when event fired
 * @returns {Promise}
 */
export declare function promiseEvent<T extends keyof ElementEventMap, E extends Event>(el: Element, type: T | string, cb?: PromisedElementEventCallback<E>): Promise<any>;
export default promiseEvent;
