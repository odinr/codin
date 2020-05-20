import { customElement, LitElement, property, html } from "lit-element";

import style from './style/grid-cell.scss';

@customElement('mwc-grid-cell')
export class MwcGridCell extends LitElement {

    static styles = [style];

    @property({ type: Number, reflect: true })
    span: number = 12;

    @property({ type: Number, reflect: true })
    mobile?: number;

    @property({ type: Number, reflect: true })
    tablet?: number;

    @property({ type: Number, reflect: true })
    desktop?: number;

    @property({ type: Number, reflect: true })
    order?: number;

    @property({ type: String, reflect: true })
    align?: 'top' | 'middle' | 'bottom';


    render() {
        return html`<slot></slot>`;
    }
}

export default MwcGridCell;

declare global {
  interface HTMLElementTagNameMap {
    "mwc-grid-cell": MwcGridCell;
  }
}