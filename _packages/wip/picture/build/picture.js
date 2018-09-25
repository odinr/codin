import { WcBase, html, register } from '@codin/wc-base';
import { style } from './picture.scss';
export class WcPicture extends WcBase {
    static get is() { return 'wc-picture'; }
    _render() {
        return html `${style}`;
    }
}
register('wc-picture', WcPicture);
export default WcPicture;
//# sourceMappingURL=picture.js.map