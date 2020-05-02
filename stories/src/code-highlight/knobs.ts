import { select, boolean, text, color } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export const defaultValues = {
  src: 'static/code-highlight/test.ts'
};

export const plain = () => boolean('Plain', false, "General");

export const themeSelector = (defaultValue?: string) =>
  select(
    'Theme',
    {
      None: '',
      Dark: 'dark',
      Light: 'light',
    },
    defaultValue || 'none',
    "General"
  );

export const sourceSelector = (defaultValue?: string) =>
  select(
    'Source',
    {
      TypeScript: 'static/code-highlight/test.ts',
      'C#': 'static/code-highlight/test.cs',
    },
    defaultValue || defaultValues.src,
    "Source"
  );

export const lineSelector = (defaultValue?: string) => text('Lines', defaultValue || '', "Highlight");

export const theming = () => {
  return html`<style>
  cwc-code-highlight {
    --code-color: ${color("code-color", "#555", "Theme")};
    --code-td-text: ${color("code-t-text", "#555", "Theme")};
  }
  </style>`;
}

export const main = () => ({
  plain: plain(),
  theme: themeSelector(),
});

export default main;
// export const wrap = select(
//   '--code-line-wrap',
//   {
//     default: '',
//     pre: 'pre',
//     'pre-wrap': 'pre-wrap',
//   },
//   ''
// );
