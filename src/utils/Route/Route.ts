import { Block, renderDOM } from "core";

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

export default class Route {
  _pathname!: string;

  _blockClass!: any;

  _block!: Block;

  constructor(pathname: string, view: any) {
    this._pathname = pathname;
    this._blockClass = view;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      renderDOM(this._block);
    } else {
      renderDOM(this._block);
    }
  }
}
