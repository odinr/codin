export interface PromisedElementEventCallback<E extends Event> {
 (element: Element, event?: E): any;
}

export function promiseEvent<T extends keyof ElementEventMap, E extends Event>(
 element: Element,
 type: T|string,
 callback?: PromisedElementEventCallback<E>,
): Promise<any> {
 const resolver = (resolve?: any, reject?: any) => {
   return {
     handleEvent: function (evt: E) {
       try {
         callback ? resolve(callback(element, evt)) : resolve();
       } catch (error) {
         reject(error);
       } finally {
         element.removeEventListener(type, this, false);
       }
     }
   };
 };
 return new Promise((resolve, reject) => {
   element.addEventListener(type, resolver(resolve, reject), false);
 });
}

export default promiseEvent;
