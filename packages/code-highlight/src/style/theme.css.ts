import { css } from 'lit-element';

export const style = css`
  :host([theme='light']) {
    background: #fff;
  }

  :host([theme='dark']) {
    background: #212b31;
    --code-color: #eee;

    --code-t-text: rgba(255,255,255,.2);

    --code-highlight-background: rgba(0,200,200,.2);

    --code-token-string-color: #bce089;
    --code-token-punctuation-color: #bbb;
    --code-token-number-color: #1EA7FD;
  }
`;

export default style;
