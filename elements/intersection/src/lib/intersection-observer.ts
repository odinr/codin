export enum CustomIntersectionEventTypes {
 intersection = 'cwcIntersection',
 visible = 'cwcVisible',
 hidden = 'cwcHidden',
}

export interface CustomIntersectionEventDetail {
  observer: IntersectionObserver;
  entry: IntersectionObserverEntry;
}

export class CustomIntersectionEvent<T extends CustomIntersectionEventTypes> extends CustomEvent<CustomIntersectionEventDetail> {
 constructor(type: T, detail: CustomIntersectionEventDetail) {
  super(type, {detail});
 }
}

export type CustomIntersectionVisibilityEvents = CustomIntersectionEventTypes.visible | CustomIntersectionEventTypes.hidden;

export class CustomIntersectionVisibilityEvent extends CustomIntersectionEvent<CustomIntersectionVisibilityEvents> {
 constructor(detail: CustomIntersectionEventDetail) {
  const type = detail.entry.isIntersecting ? CustomIntersectionEventTypes.visible : CustomIntersectionEventTypes.hidden;
  super(type, detail);
 }
}

export function canObserveIntersection() {
  return 'IntersectionObserver' in window;
}

export function createIntersctionObserver(options?: IntersectionObserverInit) {
  if (!canObserveIntersection()) throw Error('missing IntersectionObserver @see polyfill');
  return new IntersectionObserver(onIntersection, options);
}

function onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserverInit) {
  entries.forEach(onEntryInserction.bind(observer));
}

function onEntryInserction(this: IntersectionObserver, entry: IntersectionObserverEntry) {
  const detail = {observer: this, entry};
  entry.target.dispatchEvent(new CustomIntersectionEvent(CustomIntersectionEventTypes.intersection, detail));
  entry.target.dispatchEvent(new CustomIntersectionVisibilityEvent(detail));
}

export default createIntersctionObserver;