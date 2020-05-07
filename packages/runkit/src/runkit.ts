import { LitElement, customElement } from 'lit-element';
// import { until } from 'lit-html/directives/until';

const RunKit =
    new Promise<GlobalRunKit>((resolve) => {
        const src = "https://embed.runkit.com";
        const loaded = () => resolve(window.RunKit);
        if (!document.head.querySelector(`[src="${src}"]`)) {
            const el = document.createElement('script');
            el.setAttribute('src', src);
            el.addEventListener('load', loaded, { once: true });
            document.head.appendChild(el);
        } else {
            loaded();
        }
    });

@customElement('cwc-runkit')
class RunKitElment extends LitElement {
    // @query('#wrapper')
    protected wrapper: HTMLElement;

    protected source?: string;

    constructor() {
        super();
        this.wrapper = document.createElement('div');
        this.appendChild(this.wrapper);
    }

    createRenderRoot() {
        return this;
    }

    initialize() {
        super.initialize();

        this.source = this.textContent!;
        this.textContent = "";

        RunKit.then(runkit => runkit.createNotebook({
            source: this.source!,
            element: this.wrapper,
        }));
    }
}

export default RunKitElment;

declare global {
    interface HTMLElementTagNameMap {
        'cwc-runkit': RunKitElment;
    }
}