import { customElement, LitElement, property, html } from "lit-element";

import './grid-inner';

import style from './style/grid.scss';

@customElement('mwc-grid')
export class MwcGrid extends LitElement {

    static styles = [style];

    @property({ reflect: true })
    public align?: 'left' | 'right';

    render() {
        return html`<mdc-grid-inner><slot></slot></mdc-grid-inner>`;
    }
}

export default MwcGrid;

declare global {
  interface HTMLElementTagNameMap {
    "mwc-grid": MwcGrid;
  }
}