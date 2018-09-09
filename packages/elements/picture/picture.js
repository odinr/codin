import { LitElement, html } from '@polymer/lit-element';
import { styleString } from '@polymer/lit-element/lib/render-helpers';
import { observe } from './lib/lazy-data';
const style = html `<style>
  :host{
    display: inline-block;
    overflow: hidden;
  }
  :host(:not([shown])) #placeholder{
    opacity: 0;
  }
  ::slotted(img),
  ::slotted(picture){
    visibility: hidden;
  }
  #placeholder{
    display: block;
    overflow: hidden;
    height: 100%;
    background-repeat: no-repeat;
    transition: opacity .35s linear;
    transition: opacity var(--image-fadein-time, .35s) ease-in;
  }
</style>`;
export class CodinWebComponentPicture extends LitElement {
    constructor() {
        super(...arguments);
        this.display = 'background';
        this.size = 'cover';
        this.position = 'center center';
        this.ready = false;
        this.shown = false;
        this.src = undefined;
    }
    static get properties() {
        return {
            display: { reflect: true },
            size: { reflect: true },
            position: { reflect: true },
            ready: { reflect: true, type: Boolean },
            shown: { reflect: true, type: Boolean },
            src: { attribute: false },
        };
    }
    get complete() {
        return new Promise((resolve) => this.src && resolve() || this.addEventListener('change', resolve, { passive: true, once: true }));
    }
    get image() {
        return this.querySelector('img');
    }
    connectedCallback() {
        const { image } = this;
        if (image) {
            this.setAttribute('aria-label', image.alt);
            image.style.visibility = 'hidden';
            if (image.complete)
                this.src = image.currentSrc || image.src;
            image.addEventListener('load', () => this.src = image.currentSrc || image.src, { passive: true });
        }
        this.addEventListener('visible', () => this.shown = true, { passive: true, once: true });
        observe(this, ['src', 'srcset']);
        super.connectedCallback();
        this.complete.then(() => this.ready = true);
    }
    render() {
        const placeholderStyle = styleString({
            backgroundImage: this.src ? `url('${this.src}')` : false,
            backgroundSize: this.size,
            backgroundPosition: this.position,
        });
        return html `${style}<div id="placeholder" style="${placeholderStyle}"><slot></slot></span>`;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        _changedProperties.has('src') && this.dispatchEvent(new CustomEvent('change', { detail: this.src }));
    }
}
export default CodinWebComponentPicture;
window.customElements.define('cwc-picture', CodinWebComponentPicture);
//# sourceMappingURL=picture.js.map