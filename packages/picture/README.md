# Picture element

> Simple web component for displaying images. Lazy loading on intersection and strategy for wrapping

see demo [Codin web components](https://github.com/odinr/codin/)

## example
```html
<cwc-picture cover>
 <source media="(min-width: 400px)" srcset="./high-res.jpg">
 <source srcset="./low-res.jpg">
</cwc-picture>
````