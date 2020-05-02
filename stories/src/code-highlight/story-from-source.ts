import { html } from 'lit-html';

import { main, sourceSelector, lineSelector } from './knobs';

export const FromSource = () => {
  const src = sourceSelector();
  const highlight = lineSelector();
  const { theme, plain } = main();
  return html` <cwc-code-highlight theme="${theme}" ?plain="${plain}" src="${src}" highlight="${highlight}" /> `;
};

export default FromSource;
