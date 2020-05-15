import { css } from 'lit-element';

export const style = css`
  :host {
    --code-t-text: rgba(0,0,0,.5);
    --code-t-number: #905;
    --code-t-selector: #690;
    --code-t-operator: #9a6e3a;
    --code-t-keyword: #c792ec;
    --code-t-variable: #e90;
    --code-t-function: #dd4a68;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.comment{
    color: var(--code-token-comment-color, var(--code-t-text));
  }
  .token.prolog {
    color: var(--code-token-prolog-color, var(--code-t-text));
  }
  .token.doctype {
    color: var(--code-token-doctype-color, var(--code-t-text));
  }
  .token.cdata {
    color: var(--code-token-cdata-color, var(--code-t-text));
  }
  .token.punctuation {
    color: var(--code-token-punctuation-color, #07a);
  }

  .token.property {
    color: var(--code-token-property-color, var(--code-t-number));
  }
  .token.tag {
    color: var(--code-token-tag-color, var(--code-t-number));
  }
  .token.boolean {
    color: var(--code-token-boolean-color, var(--code-t-number));
  }
  .token.property {
    color: var(--code-token-property-color, var(--code-t-number));
  }
  .token.number {
    color: var(--code-token-number-color, var(--code-t-number));
  }
  .token.constant {
    color: var(--code-token-constant-color, var(--code-t-number));
  }
  .token.symbol {
    color: var(--code-token-symbol-color, var(--code-t-number));
  }
  .token.deleted {
    color: var(--code-token-deleted-color, var(--code-t-number));
  }

  .token.selector {
    color: var(--code-token-selector-color, var(--code-t-selector));
  }
  .token.attr-name {
    color: var(--code-token-attr-name-color, var(--code-t-selector));
  }
  .token.string {
    color: var(--code-token-string-color, var(--code-t-selector));
  }
  .token.char {
    color: var(--code-token-char-color, var(--code-t-selector));
  }
  .token.inserted {
    color: var(--code-token-inserted-color, var(--code-t-selector));
  }
  .token.builtin {
    color: var(--code-token-builtin-color, #ecaa5a);
  }

  .token.operator {
    color: var(--code-token-operator-color, var(--code-t-operator));
  }
  .token.entity {
    color: var(--code-token-entity-color, var(--code-t-operator));
  }
  .token.url {
    color: var(--code-token-url-color, var(--code-t-operator));
  }

  .token.atrule {
    color: var(--code-token-atrule-color, var(--code-t-keyword));
  }
  .token.attr-value {
    color: var(--code-token-attr-value-color, var(--code-t-keyword));
  }
  .token.keyword {
    color: var(--code-token-function-color, var(--code-t-keyword));
  }

  .token.function {
    color: var(--code-token-function-color, var(--code-t-function));
  }
  .token.class-name {
    color: var(--code-token-class-name-color, var(--code-t-function));
  }

  .token.regex {
    color: var(--code-token-regex-color, var(--code-t-variable));
  }
  .token.important {
    color: var(--code-token-important-color, var(--code-t-variable));
  }
  .token.variable {
    color: var(--code-token-class-name-color, var(--code-t-variable));
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

export default style;
