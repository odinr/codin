export class EventObserver {
    constructor(_cb, _opt = { passive: true }) {
        this._cb = _cb;
        this._opt = _opt;
        this._observationTargets = new Map();
    }
    observe(element, type) {
        const targetTypes = this._observationTargets.get(element) || [];
        targetTypes.includes(type) || (() => {
            element.addEventListener(type, this, this._opt);
            this._observationTargets.set(element, targetTypes.concat(type));
        })();
    }
    unobserve(element, type) {
        const targetTypes = this._observationTargets.get(element) || [];
        const removeTypes = type && targetTypes.includes(type) ? [type] : (type ? [] : targetTypes);
        const remainTypes = targetTypes.filter((t) => !removeTypes.includes(t));
        removeTypes.forEach((t) => element.removeEventListener(t, this));
        remainTypes.length > 0 ? this._observationTargets.set(element, remainTypes) : this._observationTargets.delete(element);
    }
    handleEvent(ev) {
        this._cb(ev, this);
    }
}
export default EventObserver;
//# sourceMappingURL=event-observer.js.map