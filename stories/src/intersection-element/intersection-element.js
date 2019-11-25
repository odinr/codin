import { storiesOf } from '@storybook/polymer';
import { withKnobs, number } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import(/* webpackChunkName: "intersection" */ '@codin/cwc-intersection');

import readme from './README.md';
storiesOf('Intersection Element', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const treshold = number('treshold', 1);
      return html`
        <style>
          .wrapper {
            height: 200px;
            overflow: auto;
            border: 1px solid darkgray;
          }
          cwc-intersection {
            display: flex;
            opacity: 0.5;
            transition: 0.5s linear;
            justify-content: center;
            margin: 250px 0;
          }

          cwc-intersection[intersecting] {
            opacity: 1;
          }

          cwc-intersection p {
            background: red;
            padding: 2rem 5rem;
            text-align: center;
          }
          cwc-intersection[intersected] p {
            background: cornflowerblue;
          }
        </style>
        <h1>Scroll downs</h1>
        <div class="wrapper">
          <cwc-intersection threshold="${treshold}">
            <p>dssdsadas</p>
          </cwc-intersection>
        </div>
      `;
    },
    { notes: { markdown: readme } }
  );
