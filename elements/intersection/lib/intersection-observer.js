export var CustomIntersectionEventTypes;
(function (CustomIntersectionEventTypes) {
    CustomIntersectionEventTypes["intersection"] = "cwc.intersection";
    CustomIntersectionEventTypes["visible"] = "cwc.intersection.in";
    CustomIntersectionEventTypes["hidden"] = "cwc.intersection.out";
})(CustomIntersectionEventTypes || (CustomIntersectionEventTypes = {}));
export class CustomIntersectionEvent extends CustomEvent {
    constructor(type, detail) {
        super(type, { detail });
    }
}
export class CustomIntersectionVisibilityEvent extends CustomIntersectionEvent {
    constructor(detail) {
        const type = detail.entry.isIntersecting ? CustomIntersectionEventTypes.visible : CustomIntersectionEventTypes.hidden;
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
    entry.target.dispatchEvent(new CustomIntersectionEvent(CustomIntersectionEventTypes.intersection, detail));
    entry.target.dispatchEvent(new CustomIntersectionVisibilityEvent(detail));
}
export default createIntersctionObserver;
//# sourceMappingURL=intersection-observer.js.map