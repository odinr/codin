import * as tslib_1 from "../../node_modules/tslib/tslib.es6.js";
import { customElement, html, LitElement, property, eventOptions } from "../../node_modules/lit-element/lit-element.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";
import { styleMap } from "../../node_modules/lit-html/directives/style-map.js";
import "./node_modules/@codin/cwc-intersection/intersection-element.js";
import PictureEvent from "./lib/picture-event.js";
import styles from "./assets/picture-element.css.js";
let PictureElement = class PictureElement extends LitElement {
  constructor() {
    super(...arguments);
    /**
     * Set the picture source
     * This will be updated if <source> is provided
     * Use of a data-URI for src is encouraged for instant rendering.
     */

    this.src = '//:0';
    /**
     * position of image
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
     */

    this.position = 'center';
    this._mediaMap = new WeakMap();
  }
  /**
   * Return the current source sets
   * Since [[HTMLPictureElement]] is not slottable, [[HTMLSourceElement]] provided
   * by light dom is moved inside the shadow.
   */


  get srcSets() {
    return [...this.querySelectorAll('source')].concat([...this.renderRoot.querySelectorAll('source')]);
  }

  render() {
    return this.lazy ? html`<cwc-intersection @intersectionin="${() => this.lazy = false}"></cwc-intersection>` : this._renderPicture();
  }

  _renderPicture() {
    !('HTMLPictureElement' in window) && this._polyfillPicture();
    const picture = {
      'background-image': `url(${this.src})`,
      'background-position': this.position || '',
      'background-size': this.cover ? 'cover' : 'contain'
    };
    return html`
      <picture style="${styleMap(picture)}">
        ${repeat(this.srcSets, ({
      srcset
    }) => srcset, source => source)}
        <img
          src="${this.src}"
          height="${this.width}"
          width="${this.height}"
          @load="${this._onSourceChange}"
        />
      </picture>
    `;
  }

  _onSourceChange(e) {
    const img = e.target;

    if (this._emitChange(img)) {
      const {
        naturalHeight,
        naturalWidth,
        currentSrc
      } = img;
      this.height = naturalHeight;
      this.width = naturalWidth;
      this.src = currentSrc;
      this.setAttribute('loaded', '');
    }
  }

  _emitChange(img, args) {
    const {
      naturalHeight,
      naturalWidth,
      currentSrc
    } = img;
    const detail = {
      naturalHeight,
      naturalWidth,
      currentSrc
    };
    const event = new PictureEvent('change', { ...args,
      detail
    });
    this.dispatchEvent(event);
    return !event.defaultPrevented;
  }

  _polyfillPicture() {
    this.srcSets.reverse().forEach(srcset => {
      let mql = this._mediaMap.get(srcset);

      if (!(mql instanceof MediaQueryList)) {
        mql = window.matchMedia(srcset.media);
        mql.matches && (this.src = srcset.srcset);
        mql.addListener(() => this.src = srcset.srcset);

        this._mediaMap.set(srcset, mql);
      }
    });
  }

};
PictureElement.styles = styles;

tslib_1.__decorate([property()], PictureElement.prototype, "src", void 0);

tslib_1.__decorate([property()], PictureElement.prototype, "position", void 0);

tslib_1.__decorate([property({
  type: Boolean
})], PictureElement.prototype, "cover", void 0);

tslib_1.__decorate([property({
  type: Number,
  reflect: true
})], PictureElement.prototype, "height", void 0);

tslib_1.__decorate([property({
  type: Number,
  reflect: true
})], PictureElement.prototype, "width", void 0);

tslib_1.__decorate([property({
  type: Boolean
})], PictureElement.prototype, "lazy", void 0);

tslib_1.__decorate([eventOptions({
  passive: true
})], PictureElement.prototype, "_onSourceChange", null);

PictureElement = tslib_1.__decorate([customElement('cwc-picture')], PictureElement);
export { PictureElement }; //# sourceMappingURL=picture-element.js.map