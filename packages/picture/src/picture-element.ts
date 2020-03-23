import {
  customElement,
  html,
  LitElement,
  property,
  eventOptions
} from 'lit-element';

import { styleMap } from 'lit-html/directives/style-map';

import "@codin/cwc-intersection";
import PictureEvent from './picture-event';
import style from './picture-element.css';

export type PictureAlignment = 'center' | 'top' | 'bottom' | 'left' | 'right';

@customElement('cwc-picture')
export class PictureElement extends LitElement {
  static styles = [style];

  /**
   * Set the picture source
   * This will be updated if <source> is provided
   * Use of a data-URI for src is encouraged for instant rendering.
   */
  @property()
  public src: string = '//:0';

  /**
   * position of image
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
   */
  @property()
  public position: PictureAlignment | string = 'center';

  /**
   * Toggle between cover and contain
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
   */
  @property({ type: Boolean })
  public cover?: boolean;

  /**
   * Set the picture height
   * Updated with the img natural height when loaded
   */
  @property({ type: Number, reflect: true })
  public height?: number;

  /**
   * Set the picture width
   * Updated with the img natural width when loaded
   */
  @property({ type: Number, reflect: true })
  public width?: number;

  /**
   * When tag is applied the picure does not load resources until intersected
   */
  @property({ type: Boolean })
  public lazy?: boolean;

  private _mediaMap: WeakMap<HTMLSourceElement,MediaQueryList> = new WeakMap();

  /**
   * Return the current source sets
   * Since [[HTMLPictureElement]] is not slottable, [[HTMLSourceElement]] provided
   * by light dom is moved inside the shadow.
   */
  public get srcSets(): HTMLSourceElement[] {
    return [...this.querySelectorAll<'source'>('source')].concat([
      ...(this.renderRoot as ShadowRoot).querySelectorAll<'source'>('source')
    ]);
  }

  render() {
    return this.lazy
      ? html`<cwc-intersection @intersectionin="${() => (this.lazy = false)}"></cwc-intersection>`
      : this._renderPicture();
  }


  protected _renderPicture() {
    !('HTMLPictureElement' in window) && this._polyfillPicture();
    const picture = {
      'background-image': `url(${this.src})`,
      'background-position': this.position || '',
      'background-size': this.cover ? 'cover' : 'contain'
    };
    return html`
      <picture style="${styleMap(picture)}">
        ${this.srcSets.map(src => src)}
        <img
          src="${this.src}"
          height="${this.width}"
          width="${this.height}"
          @load="${this._onSourceChange}"
        />
      </picture>
    `;
  }

  @eventOptions({ passive: true })
  protected _onSourceChange(e: Event) {
    const img = e.target as HTMLImageElement;
    if (this._emitChange(img)) {
      const { naturalHeight, naturalWidth, currentSrc } = img;
      this.height = naturalHeight;
      this.width = naturalWidth;
      this.src = currentSrc;
      this.setAttribute('loaded', '');
    }
  }

  protected _emitChange(img: HTMLImageElement, args?: CustomEventInit) {
    const { naturalHeight, naturalWidth, currentSrc } = img;
    const detail = { naturalHeight, naturalWidth, currentSrc };
    const event = new PictureEvent('change', { ...args, detail });
    this.dispatchEvent(event);
    return !event.defaultPrevented;
  }

  protected _polyfillPicture() {
    this.srcSets.reverse().forEach((srcset) => {
      let mql = this._mediaMap.get(srcset);
      if (!(mql instanceof MediaQueryList)) {
       mql = window.matchMedia(srcset.media);
       mql.matches && (this.src = srcset.srcset);
       mql.addListener(() => this.src = srcset.srcset);
       this._mediaMap.set(srcset, mql);
      }
     });
  }
}
