import { LitElement, PropertyValues } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
export declare type PictureDisplay = 'background' | 'image';
export declare type PictureFit = 'cover' | 'contain';
export declare class CodinWebComponentPicture extends LitElement {
    static readonly properties: {
        display: {
            reflect: boolean;
        };
        size: {
            reflect: boolean;
        };
        position: {
            reflect: boolean;
        };
        ready: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        shown: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        src: {
            attribute: boolean;
        };
    };
    display: string;
    size: string;
    position: string;
    ready: boolean;
    shown: boolean;
    src: string | undefined;
    readonly complete: Promise<{}>;
    readonly image: HTMLImageElement | null;
    connectedCallback(): void;
    render(): TemplateResult;
    protected updated(_changedProperties: PropertyValues): void;
}
export default CodinWebComponentPicture;
