import { css } from "lit-element";

export const style = css`
  :host {
    display: block;
  }

  ::selection {
    text-shadow: none;
    background-color: var(--code-selection-background, rgba(179, 212, 252, 0.5));
  }

  pre {
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
  }

  pre, code {
    font-family: var(--code-font-family, "Fira Code", "Ubuntu Mono", monospace);
    z-index: 1;
  }

  code {
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    hyphens: none;

    overflow: scroll;
    
    color: var(--code-color, #555);
    tab-size: var(--code-tab-size, 4);
    white-space: var(--code-line-wrap, pre);
  }
`;

export default style;
