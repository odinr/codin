export enum IntersectionEventTypes {
  intersection = 'cwc.intersection',
  visible = 'cwc.intersection.in',
  hidden = 'cwc.intersection.out'
}

export interface IntersectionEventDetail {
  observer: IntersectionObserver;
  entry: IntersectionObserverEntry;
}

export class IntersectionEvent<T extends IntersectionEventTypes> extends CustomEvent<IntersectionEventDetail> {
 constructor(type: T, detail: IntersectionEventDetail) {
  super(type, {detail});
 }
}

export type IntersectionVisibilityEvents = IntersectionEventTypes.visible | IntersectionEventTypes.hidden;

export class IntersectionVisibilityEvent extends IntersectionEvent<IntersectionVisibilityEvents> {
 constructor(detail: IntersectionEventDetail) {
  const type = detail.entry.isIntersecting ? IntersectionEventTypes.visible : IntersectionEventTypes.hidden;
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
  entry.target.dispatchEvent(new IntersectionEvent(IntersectionEventTypes.intersection, detail));
  entry.target.dispatchEvent(new IntersectionVisibilityEvent(detail));
}

export default createIntersctionObserver;