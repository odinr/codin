export interface PromisedElementEventCallback<E extends Event> {
    (element: Element, event?: E): any;
}
export declare function promiseEvent<T extends keyof ElementEventMap, E extends Event>(element: Element, type: T | string, callback?: PromisedElementEventCallback<E>): Promise<any>;
export default promiseEvent;
