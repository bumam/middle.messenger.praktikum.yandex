import isEqual from "../../utils/isEqual";
import Block from "../block/block";

export default class Route {
  private pathname: string;
  private blockClass: any;
  private block: Block<any> | null;
  // @ts-ignore
  private props: any;

  constructor(pathname: string, view: any, props: any) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.remove();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    this.block = new this.blockClass();
  }
}
