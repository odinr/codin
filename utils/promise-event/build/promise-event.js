/**
 * Awaits an event to happen.
 * When event is triggered, callback is called and removes listner.
 * @param el Element to await event from
 * @param type Type of event to await
 * @param cb Callback when event fired
 * @returns {Promise}
 */
export function promiseEvent(el, type, cb) {
    const resolver = (resolve, reject) => {
        return {
            handleEvent: function (evt) {
                try {
                    cb ? resolve(cb(el, evt)) : resolve();
                }
                catch (error) {
                    reject(error);
                }
                finally {
                    el.removeEventListener(type, this, false);
                }
            }
        };
    };
    return new Promise((resolve, reject) => {
        el.addEventListener(type, resolver(resolve, reject), false);
    });
}
export default promiseEvent;
//# sourceMappingURL=promise-event.js.map