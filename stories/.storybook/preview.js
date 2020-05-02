/* global window */

import {
  configure,
  // addParameters,
  // setCustomElements,
} from '@storybook/web-components';

// import customElements from '../custom-elements.json';

// setCustomElements(customElements);

// addParameters({
//   docs: {
//     iframeHeight: '200px',
//   },
// });

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

const _customElementsDefine = window.customElements.define;
window.customElements.define = (name, cl, conf) => {
  if (!customElements.get(name)) {
    _customElementsDefine.call(window.customElements, name, cl, conf);
  }
  else {
    console.warn(`${name} has been defined twice`);
  }
};

// force full reload to not reregister web components
const req = require.context('../src', true, /\.stories\.(ts|js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
