import { html } from 'lit-html';

import { main, lineSelector, defaultValues } from './knobs';

export const HighlightLines = () => {
  const highlight = lineSelector('6,10-13');
  const { theme, plain } = main();
  const src = defaultValues.src;
  return html` <cwc-code-highlight theme="${theme}" ?plain="${plain}" src="${src}" highlight="${highlight}" /> `;
};

export default HighlightLines;
