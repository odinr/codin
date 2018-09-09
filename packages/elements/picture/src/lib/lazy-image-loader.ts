import {observe} from './lazy-data';

const elements = (root: Document|Element = document) => [].concat.apply([], root.querySelectorAll('[data-lazy]'));
const attributes = (el: Element) => {
  const match = (el.getAttribute('data-lazy') || '').match(/^\[(.*)\]$/);
  return match ? match[1].split(',').map((i) => i.trim()) : ['src', 'src-set'];
};
const isLoading = () => document.readyState === 'loading';
const onLoaded = (cb: EventListenerOrEventListenerObject) => document.addEventListener('DOMContentLoaded', cb, {passive: true, once: true});
const doObserve = (element: Element) => observe(element, attributes(element));

new Promise((resolve) => isLoading() ? onLoaded(resolve) : resolve()).then(() => elements().forEach((el: Element) => doObserve(el)));
