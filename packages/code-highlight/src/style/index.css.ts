import { css } from 'lit-element';

export const style = css`

  :host([plain]) #index {
    flex: 0 0 0 !important;
    width: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  #index {
    color: var(--code-index-color, #777);
    background-color: var(--code-index-background, rgba(150, 150, 150, 0.1));
    padding: 0 .5rem;
  }

  #index {
    display: flex;
    flex-flow: column;
    margin-right: 1rem;
    counter-reset: linenumber;
    justify-content: space-evenly;
  }

  #index > span {
    counter-increment: linenumber;
    position: relative;
  }

  #index > span:before {
    content: counter(linenumber);
    display: block;
    text-align: right;
  }
`;

export default style;
