import { customElement, LitElement, html } from "lit-element";

import style from './style/grid-inner.scss';

@customElement('mwc-grid-inner')
export class MwcGridInner extends LitElement {

    static styles = [style];

    render() {
        return html`<slot></slot>`;
    }
}

export default MwcGridInner;

declare global {
  interface HTMLElementTagNameMap {
    "mwc-grid-inner": MwcGridInner;
  }
}