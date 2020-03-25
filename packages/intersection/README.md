[![npm version](https://img.shields.io/npm/v/@codin/cwc-intersection?style=for-the-badge)](https://www.npmjs.com/package/@codin/cwc-intersection)

# Intersection Element

Element for detecting intersection.

## properties

**disabled?:** `bool: false, reflect: true`

When disabled the intersection adapter is removed

**once?:** `bool: false`

If true, the element wil await first intersection, then set it self as diabled.

**margin?:** `string`

Intersection offset, just like normal css margins.

**threshold?:** `string|float[]`

Decimal or CSV decimals `.1,.5,.9` when used from html. flaot array when set by JS

## Events
- `intersection` triggerd when intersection
- `intersect-in` triggerd when intersecting
- `intersect-out` triggerd when not intersecting

## Example
```html
<style>
 cwc-intersection {
  border: 1px solid black;
  opacity: .5;
 }
 cwc-intersection[intersected] {
  border-color: red;
 }
 cwc-intersection[intersecting] {
  opacity: 1;
 }
</style>
<cwc-intersection treshold="1">
 <span>Foo Bar</span>
</cwc-intersection>
```
