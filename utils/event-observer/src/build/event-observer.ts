export interface EventObserverCallback<T extends Event> {
 (event: T, observer: EventObserver<T>): void;
}

export class EventObserver<T extends Event> {
 protected _observationTargets: Map<Element, string[]> = new Map();

 constructor(
  protected _cb: EventObserverCallback<T>,
  protected _opt = { passive: true }
 ) {}

 observe(element: Element, type: string) {
     const targetTypes = this._observationTargets.get(element) || [];
     targetTypes.includes(type) || (() => {
         element.addEventListener(type, this, this._opt);
         this._observationTargets.set(element, targetTypes.concat(type));
     })();
 }

 unobserve(element: Element, type: string) {
     const targetTypes = this._observationTargets.get(element) || [];
     const removeTypes = type && targetTypes.includes(type) ? [type] : (type ? [] : targetTypes);
     const remainTypes = targetTypes.filter((t) => !removeTypes.includes(t));
     removeTypes.forEach((t) => element.removeEventListener(t, this));
     remainTypes.length > 0 ? this._observationTargets.set(element, remainTypes) : this._observationTargets.delete(element);
 }

 handleEvent(ev: T) {
     this._cb(ev, this);
 }
}
export default EventObserver;