import { withKnobs, number, boolean, select } from "@storybook/addon-knobs";
import { html } from "lit-html";

import "@codin/cwc-picture";

import lowRes from "./static/low-res.jpg";
import highRes from "./static/high-res.jpg";

export default {
  title: "Graphic|Picture Element",
  decorators: [withKnobs]
};

export const picture = () => {
  const height =
    number("height", 200, {
      range: true,
      min: 100,
      max: 1000,
      step: 100,
    });
    const width =
    number("width", 1000, {
      range: true,
      min: 100,
      max: 2000,
      step: 100
    });
  const cover = boolean("cover", true);
  const position = select(
    "align",
    {
      center: "center",
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right"
    },
    "center"
  );
  return html`
    <style>
      cwc-picture {
        background: rgba(255, 255, 255, 0.25);
        margin: 2rem 0;
        max-height: 100%;
        max-width: 100%;
      }
      </style>
      <cwc-picture
      src="${lowRes}"
      ?cover=${cover}
      position="${position}"
      style="height:${height}px; width:${width}px"
      @picture-load="${console.log}"
      lazy
    >
      <source media="(min-width: 500px)" srcset="${highRes}" />
      <source srcset="${lowRes}" />
    </cwc-picture>
  `;
};
