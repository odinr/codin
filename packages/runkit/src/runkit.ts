import { LitElement, customElement, html, property, PropertyValues } from 'lit-element';
// import { until } from 'lit-html/directives/until';

import { RunKit } from './runkit-loader';
import { getFileContent } from './runkit-file-loader';
import { style } from './runkit.style';

@customElement('cwc-runkit')
class RunKitElment extends LitElement {

    static styles = [style];

    @property({ type: String, attribute: false })
    protected source?: string;

    @property({ type: Object, attribute: false })
    notebook?: NotebookEmbed;

    @property({ type: String })
    src?: string;

    @property({ reflect: false })
    minHeight?: PropType<EmbedOptions, "minHeight">;

    @property({ reflect: false })
    gutterStyle?: PropType<EmbedOptions, "gutterStyle">;

    @property({ reflect: false })
    nodeVersion?: PropType<EmbedOptions, "nodeVersion">;

    @property({ type: Boolean, reflect: false })
    evaluateOnLoad?: PropType<EmbedOptions, "evaluateOnLoad">;

    @property({ type: Boolean, reflect: false })
    readOnly?: PropType<EmbedOptions, "readOnly">;

    async initialize() {
        super.initialize();
        this.source = this.textContent!;
        this.textContent = "";
    }

    async connectedCallback() {
        super.connectedCallback();
        const runkit = await RunKit;
        const { source, minHeight, gutterStyle, evaluateOnLoad, nodeVersion, readOnly, title } = this;
        this.notebook = runkit.createNotebook({
            element: this,
            source,
            minHeight,
            gutterStyle,
            evaluateOnLoad,
            nodeVersion,
            readOnly,
            title
        });
    }

    public render() {
        return html`<slot></slot>`;
    }

    public evaluate(){
        this.notebook?.evaluate();
    }

    protected async updated(_changedProperties: PropertyValues) {
        if (_changedProperties.has('src') && this.src) {
            this.source = await getFileContent(this.src);
        }
        if (_changedProperties.has('source') && this.source) {
            this.notebook?.setSource(this.source);
        }
        if (_changedProperties.has('minHeight') && this.minHeight) {
            this.notebook?.setMinHeight(this.minHeight);
        }
        if (_changedProperties.has('gutterStyle') && this.gutterStyle) {
            this.notebook?.setGutterStyle(this.gutterStyle);
        }
        if (_changedProperties.has('readOnly')) {
            this.notebook?.setReadOnly(!!this.readOnly);
        }
        if (_changedProperties.has('nodeVersion') && this.nodeVersion) {
            this.notebook?.setNodeVersion(this.nodeVersion);
        }
    }
}

export default RunKitElment;

declare global {
    interface HTMLElementTagNameMap {
        'cwc-runkit': RunKitElment;
    }
}