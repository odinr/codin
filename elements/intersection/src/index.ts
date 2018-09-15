import element from './intersection-panel.js';
export * from './intersection-panel.js';
export default element;

const register = ()  => window.customElements.define('cwc-intersection-panel', element);
'customElements' in window ? register() : document.addEventListener('WebComponentsReady', register, {once: true, passive: true});

