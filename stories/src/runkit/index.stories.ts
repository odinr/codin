import { withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";

import "@codin/cwc-runkit";

export default {
  title: "Code|Runkit",
  decorators: [withKnobs]
};

export const picture = () => {
  return html`<cwc-runkit>console.log("ok");</cwc-runkit>`;
};
