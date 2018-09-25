import { observe } from './lazy-data';
const elements = (root = document) => [].concat.apply([], root.querySelectorAll('[data-lazy]'));
const attributes = (el) => {
    const match = (el.getAttribute('data-lazy') || '').match(/^\[(.*)\]$/);
    return match ? match[1].split(',').map((i) => i.trim()) : ['src', 'src-set'];
};
const isLoading = () => document.readyState === 'loading';
const onLoaded = (cb) => document.addEventListener('DOMContentLoaded', cb, { passive: true, once: true });
const doObserve = (element) => observe(element, attributes(element));
new Promise((resolve) => isLoading() ? onLoaded(resolve) : resolve()).then(() => elements().forEach((el) => doObserve(el)));
//# sourceMappingURL=lazy-image-loader.js.map