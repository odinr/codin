import { select, text, boolean, button } from '@storybook/addon-knobs';

export const defaultValues = {
    src: 'static/runkit/test.js'
};

export const src = (defaultValue: string = defaultValues.src) => {
    return select('src', {
        Test: 'static/runkit/test.js',
    }, defaultValue, 'attributes');
};

export const minHeight = (defaultValue: string = '73px') => {
    return text('minHeight', defaultValue, 'attributes');
};

export const gutterStyle = (defaultValue: string = 'outside') => {
    return select('gutterStyle', {
        outside: "outside",
        inside: "inside",
        none: "none",
    }, defaultValue, 'attributes');
};

export const readOnly = (defaultValue: boolean = false) => boolean('readOnly', defaultValue, 'attributes');

export const evaluate = (cb: VoidFunction) => button('evaluate', cb, 'functions');

export const attributes = {
    src,
    minHeight,
    gutterStyle,
    readOnly,
};

export const functions = {
    evaluate
};