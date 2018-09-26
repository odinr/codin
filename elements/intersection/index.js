import element from './build/intersection-panel';
export * from './build/intersection-panel';
export default element;
const register = () => window.customElements.define('cwc-intersection-panel', element);
'customElements' in window ? register() : document.addEventListener('WebComponentsReady', register, { once: true, passive: true });
//# sourceMappingURL=index.js.map