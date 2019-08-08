import {
  customElement,
  html,
  LitElement,
  property,
  css,
  PropertyValues
} from 'lit-element';

const styles = css`
  :host {
    display: block;
    display: inline-block;
    position: relative;
    --form-input-background-color: #fff;
    --form-input-border-color: rgba(0,0,0,.5);
  }
  .label--container{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-color: var(--form-input-border-color);
    border-width: 1px;
  }
  .label--container:before,
  .label--container:after{
    content: '';
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
  .label--container:before{
    width: .5em;
    box-sizing: border-box;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
  }
  .label--container:after{
    flex: 1 1 auto;
    border-top-style: solid;
    border-bottom-style: solid;
    border-right-style: solid;
  }
  .label__notch {
    height: 100%;
    border-top-style: solid;
    border-bottom-style: solid;
    box-sizing: border-box;
  }
  ::slotted(*){
    all: unset;
    padding: .75em;
    font-size: inherit;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    z-index: 1;
    position: relative;
  }
  label {
    will-change: transform;
    display: inline-block;
    position: relative;
    top: .5em;
  }
  :host([active]) .label__notch {
    margin: 0 -.25em;
    border-top-style: none;
  }
  :host([active]) label {
    transform: translateY(-87.5%) scale(.75);
  }
  :host([active]) .label--container {
    border-width: 2px;
  }
`;

@customElement('cwc-input')
export class InputElement extends LitElement {
  static styles = styles;

  @property()
  public name?: string;

  @property()
  public value: string = '';

  @property()
  public placeholder: string = '';

  protected readonly _input: HTMLInputElement;

  constructor() {
    super();
    this._input = document.createElement('input') as HTMLInputElement;
    // this._input.name = this.name || '';
    // this._input.type = 'hidden';
    // this.appendChild(this._input);
  }

  // <input name="${name}" type="text" @change="${this._onChange}"/>

  render() {
    //  const input = (this.constructor as typeof InputElement).input;
    const {placeholder} = this;
    return html`
        <div class="label--container">
          <div class="label__notch">
            <label for="input">Elgbert</label>
          </div>
        </div>
        <slot>
          <input id="input" type="text" placeholder="${placeholder}" />
        </slot>
    `;
  }

  protected async updated(props: PropertyValues) {
    super.updated(props);
    await this.updateComplete;
    this._input.name = this.name || '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cwc-input': InputElement;
  }
}
