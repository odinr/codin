// import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import "@codin/mwc-grid";

export const basic = () => {

    return html`
        <style>
            mwc-grid-cell{
                border: 1px solid grey;
                background: rgba(0,0,0,.1)
            }
        </style>
        <mwc-grid>
            <mwc-grid-cell desktop="6">
                <p>some content</p>
            </mwc-grid-cell>
            <mwc-grid-cell desktop="6">
                <mwc-grid-inner>
                    <mwc-grid-cell span="6">
                        <p>some other content</p>
                    </mwc-grid-cell>
                </mwc-grid-inner>
            </mwc-grid-cell>
        </mwc-grid>`;
};

export default {
    title: "Material Design|Grid",
    // decorators: [withKnobs]
};