import { LitElement, PropertyValues } from 'lit-element';
export declare class InputElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    name?: string;
    value: string;
    placeholder: string;
    protected readonly _input: HTMLInputElement;
    constructor();
    render(): import("lit-element").TemplateResult;
    protected updated(props: PropertyValues): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cwc-input': InputElement;
    }
}
