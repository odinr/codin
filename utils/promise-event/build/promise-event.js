export function promiseEvent(element, type, callback) {
    const resolver = (resolve, reject) => {
        return {
            handleEvent: function (evt) {
                try {
                    callback ? resolve(callback(element, evt)) : resolve();
                }
                catch (error) {
                    reject(error);
                }
                finally {
                    element.removeEventListener(type, this, false);
                }
            }
        };
    };
    return new Promise((resolve, reject) => {
        element.addEventListener(type, resolver(resolve, reject), false);
    });
}
export default promiseEvent;
//# sourceMappingURL=promise-event.js.map