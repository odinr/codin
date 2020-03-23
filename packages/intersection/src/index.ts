import { IntersectionElement } from "./intersection-element";

declare global {
  interface HTMLElementTagNameMap {
    "cwc-intersection": IntersectionElement;
  }
}

export * from './intersection-element';
export * from './intersection-event';

export default IntersectionElement;
