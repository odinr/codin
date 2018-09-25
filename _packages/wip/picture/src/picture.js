const __img = new Image();
const supports = {
    objectFit: 'object-fit' in __img.style,
    objectPosition: 'object-position' in __img.style,
    currentSrc: typeof __img.currentSrc === 'string',
    get image() {
        return this.objectFit && this.objectPosition;
    }
};
const notEqual = (value, old) => old !== value && (old === old || value === value);
class CwcPicture extends HTMLElement {
    constructor() {
        super();
        this._imageObserver = undefined;
        this._img = this.querySelector('img') || new Image();
        this._img.addEventListener('load', this._imageSourceChange.bind(this));
    }
    static get is() {
        return 'cwc-picture';
    }
    static get observedAttributes() {
        return ['display', 'fit', 'position'];
    }
    get img() {
        return this.querySelector('img') || (() => {
            const image = document.createElement('img');
            this.appendChild(image);
            return image;
        })();
    }
    get src() { return this.img.currentSrc || this.img.src; }
    get fit() { return this.img.style.objectFit || 'cover'; }
    set fit(fit) {
        this.img.style.objectFit = fit;
    }
    get position() { return this._position || 'center center'; }
    set position(position) {
        this.img.style.objectPosition = position;
    }
    get display() { return this.getAttribute('display') || 'background'; }
    set display(display) {
        display = display === 'image' ? display : 'background';
        notEqual(this._display, display) && this.setAttribute('display', display);
        this.update();
    }
    get displayImage() {
        return this.display === 'image' && supports.image;
    }
    connectedCallback() {
        this.style.display = 'block';
        this.style.overflow = 'hidden';
        this.fit = this.fit;
        this.position = this.position;
        this.update();
    }
    update() {
        this.displayImage ? this._displayImage() : this._displayBackground();
    }
    attributeChangedCallback(prop, oldValue, newValue) {
        if (notEqual(oldValue, newValue)) {
            const accessor = Object.getOwnPropertyDescriptor(this, prop);
            if (accessor !== undefined && accessor.set && accessor.writable) {
                accessor.set(newValue);
            }
        }
    }
    _imageSourceChange() {
        this.displayImage || this._updateBackground(this);
    }
    _displayImage() {
        this._clearBackground();
        this.img.style.visibility = null;
    }
    _displayBackground() {
        const { img } = this;
        img.style.visibility = 'hidden';
        this.style.backgroundOrigin = 'content-box';
        this.style.backgroundRepeat = 'no-repeat';
        this._imageObserver = this._imageObserver || new MutationObserver(() => this._updateBackground(this));
        this._imageObserver.observe(this.img, { attributes: true, attributeFilter: ['style'] });
        this._updateBackground(this);
    }
    _updateBackground({ src, fit, position }) {
        this.style.backgroundImage = `url(${src})`;
        this.style.backgroundSize = fit;
        this.style.backgroundPosition = position;
    }
    _clearBackground() {
        this._imageObserver && this._imageObserver.disconnect();
        this.style.backgroundImage = null;
        this.style.backgroundPosition = null;
        this.style.backgroundRepeat = null;
        this.style.backgroundSize = null;
    }
}
window.customElements.define(CwcPicture.is, CwcPicture);
//# sourceMappingURL=picture.js.map