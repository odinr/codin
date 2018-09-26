export var IntersectionEventTypes;
(function (IntersectionEventTypes) {
    IntersectionEventTypes["intersection"] = "cwc.intersection";
    IntersectionEventTypes["visible"] = "cwc.intersection.in";
    IntersectionEventTypes["hidden"] = "cwc.intersection.out";
})(IntersectionEventTypes || (IntersectionEventTypes = {}));
export class IntersectionEvent extends CustomEvent {
    constructor(type, detail) {
        super(type, { detail });
    }
}
export class IntersectionVisibilityEvent extends IntersectionEvent {
    constructor(detail) {
        const type = detail.entry.isIntersecting ? IntersectionEventTypes.visible : IntersectionEventTypes.hidden;
        super(type, detail);
    }
}
export function canObserveIntersection() {
    return 'IntersectionObserver' in window;
}
export function createIntersctionObserver(options) {
    if (!canObserveIntersection())
        throw Error('missing IntersectionObserver @see polyfill');
    return new IntersectionObserver(onIntersection, options);
}
function onIntersection(entries, observer) {
    entries.forEach(onEntryInserction.bind(observer));
}
function onEntryInserction(entry) {
    const detail = { observer: this, entry };
    entry.target.dispatchEvent(new IntersectionEvent(IntersectionEventTypes.intersection, detail));
    entry.target.dispatchEvent(new IntersectionVisibilityEvent(detail));
}
export default createIntersctionObserver;
//# sourceMappingURL=intersection-observer.js.map