import { customElement, LitElement, html } from "lit-element";

import style from './style/grid-inner.scss';

@customElement('mdc-grid-inner')
export class MdcGrid extends LitElement {

    static styles = [style];

    render() {
        return html`<slot></slot>`;
    }
}