"use strict";
function attributeSource(element, attribute, type, sucsess, failure) {
    const valid = sucsess || (() => !!element[attribute]);
    const resolved = (resolve) => resolve(element[attribute]);
    return new Promise((resolve) => valid()
        ? resolved(resolve)
        : promisedEvent(element, type, valid, failure).then(resolved(resolve)));
}
const elg = {
    bert: ''
};
const foo = {
    bar: false,
};
attributeSource(elg, 'bert', 'load');
attributeSource(foo, 'bar', 'load');
//# sourceMappingURL=scrap.js.map