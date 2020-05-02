import { html } from 'lit-html';

import { main, lineSelector, sourceSelector, theming } from './knobs';

export const Theming = () => {
    const style = theming();
  const { theme, plain } = main();
  const src = sourceSelector();
  const highlight = lineSelector('15-19');
  return html`${style}<cwc-code-highlight theme="${theme}" ?plain="${plain}" src="${src}" highlight="${highlight}" /> `;
};

export default Theming;
