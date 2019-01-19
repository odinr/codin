export type EventType = keyof ElementEventMap | string;

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
export function promiseEvent<T extends EventType, E extends Event>(
 el: Element,
 type: T,
 cb?: PromisedElementEventCallback<E>,
): Promise<any> {
 const resolver = (resolve?: any, reject?: any) => {
   return {
     handleEvent: function (evt: E) {
       try {
         cb ? resolve(cb(el, evt)) : resolve();
       } catch (error) {
         reject(error);
       } finally {
         el.removeEventListener(type, this, false);
       }
     }
   };
 };
 return new Promise((resolve, reject) => {
   el.addEventListener(type, resolver(resolve, reject), false);
 });
}

export default promiseEvent;
