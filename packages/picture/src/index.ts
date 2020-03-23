import { PictureElement } from "./picture-element";

export * from "./picture-element";
export * from "./picture-event";

// export * from "@codin/cwc-intersection";

declare global {
  interface HTMLElementTagNameMap {
    "cwc-picture": PictureElement;
  }
}
