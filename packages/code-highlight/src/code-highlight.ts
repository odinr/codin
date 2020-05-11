import { customElement, LitElement, property, html, query, TemplateResult } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import 'prismjs';
import 'prismjs/components/prism-typescript';

import { tokenizeMarkup } from './directives/tokenize-markup';

import { resolveAlias } from './utils/template-aliases';

import { styles } from './style';

const languageConverter = { fromAttribute: resolveAlias };
const rangeConverter = { fromAttribute: (value: string) => value.split(',').map(s => s.split('-').map(Number)) };

const getFileContent = async (src: string) => {
  const response = await fetch(src);
  if (!response || !response.ok) {
    throw new Error('bad response');
  }
  const content = await response.text();
  if (!content) {
    throw new Error('bad content');
  }
  return content.trim();
};

@customElement('cwc-code-highlight')
export class CodeHighlightElement extends LitElement {
  static styles = styles;

  @property()
  public src?: string;

  @property({ reflect: true, converter: languageConverter })
  public language?: string;

  @property({ reflect: true })
  public theme?: string;

  @property({ reflect: true })
  public cdn?: string;

  @property({ type: Boolean, reflect: true })
  public plain: boolean = false;

  @property({ type: Array, converter: rangeConverter })
  public highlight?: Array<[number, number]>;

  @query("#index")
  protected _index?: HTMLElement;

  public get codeElement(): HTMLElement {
    let el = this.querySelector<'code'>('code');
    !el && this.appendChild((el = document.createElement('code')));
    return el;
  }

  public get source(): string {
    return this.codeElement.innerText.trim();
  }

  connectedCallback() {
    super.connectedCallback();
    const observer = new MutationObserver(records => {
      const { codeElement } = this;
      const codeChange = !!records.find(record => record.target === codeElement);
      codeChange && this.requestUpdate();
    });
    observer.observe(this, { attributes: false, childList: true, subtree: true });
  }

  render() {
    const { language = 'clike', source } = this;
    return html`
    <pre>
      <span id="index">${this._renderIndex()}</span>
      <code>${tokenizeMarkup(source, language)}</code>
      ${this.highlight?.map(([start, end]) => this._renderHighlight(start, end))}
    </pre>
    `;
  }

  protected _renderIndex() {
    const lines = this.source.split(/\n/gm);
    const index = unsafeHTML(new Array(lines.length + 1).join('<span></span>'));
    return index;
  }

  protected _renderHighlight(start: number, end: number = start): TemplateResult | void {
    const elements = this._index?.children;
    if (!elements || elements.length < end) return;

    const startElement = elements[start - 1];
    if (!(startElement instanceof HTMLElement)) return;

    const endElement = elements[end - 1];
    if (!(endElement instanceof HTMLElement)) return;

    const top = startElement.offsetTop;
    const bottom = endElement.offsetTop + endElement.clientHeight;
    return html`<span class="highlight" style="top: ${top}px; height: ${bottom - top}px"></span>`
  }

  attributeChangedCallback(name: string, old: string | null, value: string | null) {
    super.attributeChangedCallback(name, old, value);
    if (name === 'src') {
      if (value) {
        getFileContent(value)
          .then(code => {
            this.language = value.split('.').pop()!;
            this.codeElement.innerHTML = code;
          })
          .catch(console.error);
      }
    }
  }
}

export default CodeHighlightElement;

declare global {
  interface HTMLElementTagNameMap {
    'cwc-code-highlight': CodeHighlightElement;
  }
}
