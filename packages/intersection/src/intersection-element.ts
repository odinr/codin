import {
  customElement,
  LitElement,
  property,
} from 'lit-element';

import { IntersectionEvent, IntersectionEventInit } from './lib/intersection-event';

import 'intersection-observer';

const converter = (s: string) =>  s.split(',').map((v) => parseFloat(v));

@customElement('cwc-intersection')
export class IntersectionElement extends LitElement {

  @property({ type: Boolean, reflect: true })
  public disabled?: Boolean;

  @property({ type: Boolean })
  public once?: Boolean;

  @property()
  public margin?: string;

  @property({ type: Array, attribute: true, converter })
  public threshold?: number | number[];

  public observer?: IntersectionObserver;

  get intersected(): boolean {
    return this.hasAttribute('intersected');
  }

  get options(): IntersectionObserverInit {
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

  attributeChangedCallback(name: string, old: string, value: string) {
    super.attributeChangedCallback(name, old, value);
    if (['disabled', 'margin', 'threshold'].includes(name) && old !== value) {
      this._removeAdapter();
    }
  }

  render() {
    !this.disabled && !this.observer && this._createAdapter();
  }

  protected _createAdapter() {
    this.observer && this._removeAdapter();
    this.observer = new IntersectionObserver(this._onIntersection.bind(this), this.options);
    this.observer.observe(this);
  }

  protected _removeAdapter() {
    if (this.observer instanceof IntersectionObserver) {
      this.removeAttribute('intersecting');
      this.observer.disconnect();
      delete this.observer;
    }
  }

  protected _onIntersection(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    if (this._dispatchEntryEvent(entry, {bubbles: true})) {
      const {isIntersecting} = entry;
      this.toggleAttribute('intersecting', isIntersecting);
      if (isIntersecting) {
        isIntersecting && this.setAttribute('intersected', '');
        this.once && (this.disabled = true);
      }
    }
  }

  protected _dispatchEntryEvent(entry: IntersectionObserverEntry, args?: CustomEventInit) {
    const {isIntersecting} = entry;
    const type = isIntersecting ? 'intersectionin' : 'intersectionout';
    const eventInit: IntersectionEventInit = { ...args, detail: { entry } };
    const event = new IntersectionEvent(type, eventInit);
    this.dispatchEvent(event);
    return !event.defaultPrevented;
   }
}

declare global {
  interface HTMLElementTagNameMap {
    'cwc-intersection': IntersectionElement;
  }
}
