import { configure } from '@storybook/polymer';

import '@storybook/addon-console';

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\.*\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
