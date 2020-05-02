import { property } from 'lit-element';

/**
 * test doc 
 */
class Bar {}
class Foo extends Bar {
  private _value: any;

  @property({ type: String })
  public get myProperty(): string {
    return 'prop';
  }

  constructor(public txt: string, value: any) {
    super();
    this._value = value;
    // console.log(this.myProperty);
  }

  protected someFunction(arg: Array<any | unknown>) {
    const [x, y] = ['double', 'signle', `literal`, 2, null, undefined];
    const { w } = {
      w: () => {
        throw Error('error');
      },
    };
    return { x, y, w, t: this._value };
  }
}

export default Foo;
