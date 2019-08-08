import * as tslib_1 from "../../node_modules/tslib/tslib.es6.js";
import { customElement, LitElement, property } from "../../node_modules/lit-element/lit-element.js";
import { IntersectionEvent } from "./lib/intersection-event.js";
import "../../node_modules/intersection-observer/intersection-observer.js";

const converter = s => s.split(',').map(v => parseFloat(v));

let IntersectionElement = class IntersectionElement extends LitElement {
  get intersected() {
    return this.hasAttribute('intersected');
  }

  get options() {
    return {
      rootMargin: this.margin,
      threshold: this.threshold
    };
  }

  createRenderRoot() {
    return this;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.setAttribute('intersected', '');

    this._removeAdapter();
  }

  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);

    if (['disabled', 'margin', 'threshold'].includes(name) && old !== value) {
      this._removeAdapter();
    }
  }

  render() {
    !this.disabled && !this.observer && this._createAdapter();
  }

  _createAdapter() {
    this.observer && this._removeAdapter();
    this.observer = new IntersectionObserver(this._onIntersection.bind(this), this.options);
    this.observer.observe(this);
  }

  _removeAdapter() {
    if (this.observer instanceof IntersectionObserver) {
      this.removeAttribute('intersecting');
      this.observer.disconnect();
      delete this.observer;
    }
  }

  _onIntersection(entries) {
    const [entry] = entries;

    if (this._emitEntryEvent(entry, {
      bubbles: true
    })) {
      const {
        isIntersecting
      } = entry;
      this.toggleAttribute('intersecting', isIntersecting);

      if (isIntersecting) {
        isIntersecting && this.setAttribute('intersected', '');
        this.once && (this.disabled = true);
      }
    }
  }

  _emitEntryEvent(entry, args) {
    const {
      isIntersecting
    } = entry;
    const type = isIntersecting ? 'intersectionin' : 'intersectionout';
    const eventInit = { ...args,
      detail: {
        entry
      }
    };
    const event = new IntersectionEvent(type, eventInit);
    this.dispatchEvent(event);
    return !event.defaultPrevented;
  }

};

tslib_1.__decorate([property({
  type: Boolean,
  reflect: true
})], IntersectionElement.prototype, "disabled", void 0);

tslib_1.__decorate([property({
  type: Boolean
})], IntersectionElement.prototype, "once", void 0);

tslib_1.__decorate([property()], IntersectionElement.prototype, "margin", void 0);

tslib_1.__decorate([property({
  type: Array,
  attribute: true,
  converter
})], IntersectionElement.prototype, "threshold", void 0);

IntersectionElement = tslib_1.__decorate([customElement('cwc-intersection')], IntersectionElement);
export { IntersectionElement }; //# sourceMappingURL=intersection-element.js.map