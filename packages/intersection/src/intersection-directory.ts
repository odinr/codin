import { AttributePart, directive, Part, PropertyPart } from "lit-html";

const equal = require("fast-deep-equal/es6");

const observerCache = new WeakMap<HTMLElement, IntersectionObserver>();

interface ObserverProps {
  cb: IntersectionObserverCallback;
  opt?: IntersectionObserverInit;
  disabled?: boolean;
}

export const observeIntersection = directive(
  ({ cb, disabled, opt }: ObserverProps) => (part: Part): void => {
    if (
      !(part instanceof AttributePart) ||
      part instanceof PropertyPart ||
      part.committer.name !== "intersection" ||
      part.committer.parts.length > 1
    ) {
      throw new Error(
        "The `observeIntersection` directive must be used in the style attribute " +
          "and must be the only part in the attribute."
      );
    }

    const element = part.committer.element as HTMLElement;

    if (observerCache.has(element)) {
      if (!disabled || equal(part.value, opt)) return;
    }

    observerCache.get(element)?.disconnect();
    if (disabled) return;

    const observer = new IntersectionObserver(cb, opt);
    observer.observe(element);

    observerCache.set(element, observer);
    part.setValue(opt);
  }
);

export default observeIntersection;
