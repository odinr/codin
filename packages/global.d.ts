declare module '*.scss' {
    const content: import('lit-element').CSSResult;
    export default content;
}

declare module '*.svg' {
    const content: import('lit-element').SVGTemplateResult;
    export default content;
}