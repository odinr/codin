import { customElement, LitElement, property, html } from "lit-element";

import './grid-inner';
import './grid-cell';

import style from './style/grid.scss';

@customElement('mwc-grid')
export class MwcGrid extends LitElement {

    static styles = [style];

    @property({ reflect: true })
    public align?: 'left' | 'right';

    render() {
        return html`<mwc-grid-inner><slot></slot></mwc-grid-inner>`;
    }
}

export default MwcGrid;

declare global {
  interface HTMLElementTagNameMap {
    "mwc-grid": MwcGrid;
  }
}