import {LitElement, html, PropertyValues} from '@polymer/lit-element';
import {styleString} from '@polymer/lit-element/lib/render-helpers';
import {TemplateResult} from 'lit-html';
import {observe} from './lib/lazy-data';

export type PictureDisplay = 'background' | 'image';
export type PictureFit = 'cover' | 'contain';

const style = html`<style>
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

  static get properties() {
    return {
      display:  { reflect: true },
      size:     { reflect: true },
      position: { reflect: true },
      ready:    { reflect: true, type: Boolean },
      shown:    { reflect: true, type: Boolean },
      src:      { attribute: false },
    };
  }

  public display: string = 'background';
  public size: string = 'cover';
  public position: string = 'center center';
  public ready: boolean = false;
  public shown: boolean = false;
  public src: string|undefined = undefined;

  get complete() {
    return new Promise((resolve) => this.src && resolve() || this.addEventListener('change', resolve, {passive: true, once: true}));
  }

  get image() {
    return this.querySelector('img');
  }

  connectedCallback() {
    const {image} = this;
    if (image) {
      this.setAttribute('aria-label', image.alt);
      image.style.visibility = 'hidden';
      if (image.complete) this.src = image.currentSrc || image.src;
      image.addEventListener('load', () => this.src = image.currentSrc || image.src, {passive: true});
    }
    this.addEventListener('visible', () => this.shown = true, {passive: true, once: true});
    observe(this, ['src', 'srcset']);
    super.connectedCallback();
    this.complete.then(() => this.ready = true);
  }

  public render(): TemplateResult {
    const placeholderStyle = styleString({
      backgroundImage: this.src ? `url('${this.src}')` : false,
      backgroundSize: this.size,
      backgroundPosition: this.position,
    });
    return html`${style}<div id="placeholder" style="${placeholderStyle}"><slot></slot></span>`;
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    _changedProperties.has('src') && this.dispatchEvent(new CustomEvent('change', { detail: this.src }));
  }
}

export default CodinWebComponentPicture;

window.customElements.define('cwc-picture', CodinWebComponentPicture);