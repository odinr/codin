interface attributeSourceCallback<E extends Element, K extends keyof E, T extends keyof ElementEventMap> {
 (element: E, attribute: K, type: T|string): Boolean;
}

function attributeSource<E extends any, K extends keyof E, T extends keyof ElementEventMap>(
 element: E,
 attribute: K,
 type: T|string,
 sucsess?: PromisedElementEventCallback<Event>,
 failure?: PromisedElementEventCallback<Event>
): Promise<any> {
 const valid = sucsess || (() => !!element[attribute]);
 const resolved = (resolve: any) => resolve(element[attribute]);
 return new Promise((resolve) => valid()
   ? resolved(resolve)
   : promisedEvent(element, type, valid, failure).then(resolved(resolve))
 );
}

const elg = {
 bert: ''
};

const foo = {
  bar: false,
};

attributeSource(elg, 'bert', 'load');
attributeSource(foo, 'bar', 'load');