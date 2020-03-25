import { html } from "lit-html";
import { observeIntersection } from "@codin/cwc-intersection";

export default () => {
  // const intersection=observeIntersection({ cb: console.log });
  return html`
    <p intersection="${observeIntersection({ cb: console.log })}">
      OMG
    </p>
  `;
};