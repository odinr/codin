export interface PictureEventDetail {
 naturalHeight: number;
 naturalWidth: number;
 currentSrc: string;
}

export type PictureEventInit = CustomEventInit<PictureEventDetail>;

export type PictureEventType = 'change';

/**
 * Event triggered when picture source change.
 * @typeparam T type of [[PictureEventType]]
 */
export class PictureEvent<T extends PictureEventType> extends CustomEvent<PictureEventDetail> {
 constructor(type: T, eventInit?: PictureEventInit) {
  super(type, eventInit);
 }
}

declare global {
 interface ElementEventMap {
   'change': PictureEvent<'change'>;
 }
}

export default PictureEvent;