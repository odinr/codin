import { html } from 'lit-html';

import { main } from './knobs';
export const inline = () => {
  const {theme, plain} = main();
  // prettier-ignore
  return html`
  <style>
  cwc-code-highlight{
  }
  </style>
    <cwc-code-highlight language="typescript" theme="${theme}" ?plain="${plain}">
      <code>

class Foo extends Bar {

  private _value: any;

  @property({ type: String })
  public get myProperty;

  constructor(public txt: string, value: any) {
    this._value = value;
  }

  protected someFunction(arg: Array&lt;any|unknown&gt;){
    const [ x, y ] = [ "double", 'signle', \`literal\`, 2, null, undefined ];
    const { w } = { w: () => throw Error('error') };
    return { x, y, w };
  }
}

export default Foo;
      </code>
    </cwc-code-highlight>
  `;
};

export default inline;
