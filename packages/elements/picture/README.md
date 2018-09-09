> ## 🛠 Status: In Development
```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script src="https://unpkg.com/@codin/cwc-picture" async nomodule></script>
<script src="https://unpkg.com/@codin/cwc-picture?module" async type="module"></script>
<!-- by prefixing the srcset with data, the source will be initally loaded, then the srcset when the highres image is loaded  -->
<cwc-picture size="contain" position="center">
  <img src="lowres.jpg" data-srcset="highres.jpg"/>
</cwc-picture>

<!-- the element also supports picure elements -->
<cwc-picture size="cover" position="10% center">
  <picture>
    <source media="(min-width: 1441px)" data-srcset="highres.jpg"/>
    <img src="lowres.jpg"/>
  <picture>
</cwc-picture>
```
## Attributes
| Attribute | type  | options | default | reflect |
|---|---|---|----|:----:
| **size** | String | cover, contain| *cover* | x
| **position** | String | % or location | *center center* | x
| *ready* | Boolean | NA | | x
| *shown* | Boolean | NA | | x
| *src* | String | NA | | -
| *complete* | Promise | NA | | -
| *image* | HTMLImageElement | NA | | -

*options that are **NA**, is not ment to be set*

>#### size
> The image can be left to its natural size, stretched to a new size, or constrained to fit the available space while preserving its intrinsic proportions.
> *[@see background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)*


>#### position
> property sets the initial position, relative to the background position layer
> [@see background-postion](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) 

>#### ready
>sets the attribute ready on the element after element is attached to the document.

>#### shown
>Attribute set after the element has intersected with the viewport.

## Properties
| name | type  | getter | setter
|---|---|---|----|
| *src* | String | x | -
| *complete* | Promise | x | -
| *image* | HTMLImageElement | x | -

>#### src
>Current source of the element, set and updated by the image element

>#### complete
>When the src of the element is set, this promise will resolve

>#### image
>returns the slotted image element

## Events

>#### change
>Triggered when a new resource is loaded on the slotted image
