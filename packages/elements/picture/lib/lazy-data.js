const isIntersecting = ({ isIntersecting }) => isIntersecting;
const applyDataAttribute = (el) => (attr) => {
    const dataAttr = `data-${attr}`;
    if (el.hasAttribute(dataAttr) && attr in el) {
        el.setAttribute(attr, el.getAttribute(dataAttr) || '');
        el.removeAttribute(dataAttr);
    }
};
const applyDataAttributes = (attrs) => (el) => {
    const apply = applyDataAttribute(el);
    attrs.forEach(apply);
};
function querySelectorDataAttribute(root, attributes) {
    const selector = attributes.map((attr) => `[data-${attr}]`).join(',');
    return [].concat.apply([], root.querySelectorAll(selector));
}
function elementVisible(element, attributes) {
    const apply = applyDataAttributes(attributes);
    const elements = [element, ...querySelectorDataAttribute(element, attributes)];
    elements.forEach(apply);
    element.setAttribute('data-lazy', 'loaded');
}
export const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
    entries.filter(isIntersecting).forEach(({ target }) => {
        const event = new CustomEvent('visible');
        target.dispatchEvent(event) && observer.unobserve(target);
    });
}) : {
    /** @todo make polyfill for shitty browsers */
    observe: (target) => target.dispatchEvent(new CustomEvent('visible'))
};
export function observe(element, attributes) {
    element.setAttribute('data-lazy', 'loading');
    element.addEventListener('visible', () => elementVisible(element, attributes), { passive: true, once: true });
    observer.observe(element);
}
export default observe;
//# sourceMappingURL=lazy-data.js.map