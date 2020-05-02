import { withKnobs } from '@storybook/addon-knobs';
import '@codin/cwc-code-highlight';

// require('prismjs/components/prism-typescript');

export default {
  title: 'CODE|Code highlighter Element',
  decorators: [withKnobs],
};

export * from './story-inline';
export * from './story-from-source';
export * from './story-highlight-lines';
export * from './story-theming';

// --code-line-wrap: ${wrap}

