import "../../../node_modules/custom-event-polyfill/polyfill.js";
/**
 * Event triggered when intersecting.
 * @typeparam T type of intersection
 */

export class IntersectionEvent extends CustomEvent {
  constructor(type, eventInit) {
    super(type, eventInit);
  }

}
export default IntersectionEvent; //# sourceMappingURL=intersection-event.js.map