import isEqual from "../../utils/isEqual"

export default class Route {
  private _pathname: string
  private _blockClass: any
  private _block: any
  // @ts-ignore
  private props: any

  constructor(pathname: string, view: any, props: any) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this.props = props
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.remove()
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render() {
    this._block = new this._blockClass()
  }
}
