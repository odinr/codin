import { storiesOf } from '@storybook/polymer';
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import(/* webpackChunkName: "picture" */ '@codin/cwc-picture');
import lowRes from './static/low-res.jpg';
import highRes from './static/high-res.jpg';

import readme from './README.md';
storiesOf('Graphic|Picture Element', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const height = number('height', 'auto', { range: true, min: 100, max: 1000, step: 100 });
      const width = number('width', 'auto', { range: true, min: 100, max: 2000, step: 100 });
      const cover = boolean('cover', true);
      const position = select('align', { center: 'center', top: 'top', bottom: 'bottom', left: 'left', right: 'right' }, 'center');
      return html`
        <style>
          cwc-picture {
            background: rgba(255, 255, 255, 0.25);
            margin: 2rem 0;
          }
        </style>
        <cwc-picture src="${lowRes}" ?cover=${cover} position="${position}" style="height:${height}px; width:${width}px">
          <source media="(min-width: 400px)" srcset="${highRes}" />
          <source srcset="${lowRes}" />
        </cwc-picture>
      `;
    },
    { notes: { markdown: readme } }
  );
