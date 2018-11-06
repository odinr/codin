export interface EventObserverCallback<T extends Event> {
 (event: T, observer: EventObserver<T>): void;
}

/**
 * Wrapper class for mapping events to a callback.
 * Observe and unobserve without redefining callback.
 * Hold reference to callback.
 */
export class EventObserver<T extends Event> {
 protected _observationTargets: Map<Element, string[]> = new Map();
 constructor(
  protected _cb: EventObserverCallback<T>,
  protected _opt = { passive: true }
 ) {}

 /**
  * Observers an element type of event
  * @param element element to observe
  * @param type type of event to observe
  */
 public observe(element: Element, type: string) {
     const targetTypes = this._observationTargets.get(element) || [];
     targetTypes.includes(type) || (() => {
         element.addEventListener(type, this, this._opt);
         this._observationTargets.set(element, targetTypes.concat(type));
     })();
 }

 /**
  * Stops listening for event on element.
  * If no type provided, all registered events are removed.
  * @param element element to unregister event listening
  * @param type type of event to stop listen for
  */
 public unobserve(element: Element, type?: string) {
     const targetTypes = this._observationTargets.get(element) || [];
     const removeTypes = type && targetTypes.includes(type) ? [type] : (type ? [] : targetTypes);
     const remainTypes = targetTypes.filter((t) => !removeTypes.includes(t));
     removeTypes.forEach((t) => element.removeEventListener(t, this));
     remainTypes.length > 0 ? this._observationTargets.set(element, remainTypes) : this._observationTargets.delete(element);
 }

 /**
  * Internal proxy for callbacks.
  * @param ev Event
  */
 public handleEvent(ev: T) {
     this._cb(ev, this);
 }
}
export default EventObserver;