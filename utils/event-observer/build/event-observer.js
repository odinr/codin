/**
 * Wrapper class for mapping events to a callback.
 * Observe and unobserve without redefining callback.
 * Hold reference to callback.
 */
export class EventObserver {
    constructor(_cb, _opt = { passive: true }) {
        this._cb = _cb;
        this._opt = _opt;
        this._observationTargets = new Map();
    }
    /**
     * Observers an element type of event
     * @param element element to observe
     * @param type type of event to observe
     */
    observe(element, type) {
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
    unobserve(element, type) {
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
    handleEvent(ev) {
        this._cb(ev, this);
    }
}
export default EventObserver;
//# sourceMappingURL=event-observer.js.map