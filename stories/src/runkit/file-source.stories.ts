import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import { attributes, functions } from './knobs';

const { src, minHeight, gutterStyle, readOnly } = attributes;
const { evaluate } = functions;

export const fileSource = () => {
    
    const markup = html`
        <cwc-runkit
            src="${src()}"
            minHeight="${minHeight()}" 
            gutterStyle="${gutterStyle()}"
            ?readOnly="${readOnly()}"
        ></cwc-runkit>`;

    evaluate(() => document.querySelector('cwc-runkit')?.evaluate());

    return markup;
};

export default {
    title: "Code|Runkit",
    decorators: [withKnobs]
};