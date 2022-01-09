import { Route } from "../Route"
import { Path } from "../../constants/router"

export default class Router {
  private routes: any
  private history: History
  private _currentRoute: any
  private _rootQuery: any

  constructor(rootQuery?: any) {
    // @ts-ignore
    if (Router.__instance) {
      // @ts-ignore
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery
    // @ts-ignore
    Router.__instance = this
  }

  use(pathname: string, block: any) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })

    this.routes.push(route)

    return this
  }

  start() {
    window.onpopstate = (event) => {
      // @ts-ignore
      this._onRoute(event.currentTarget.location.pathname)
    }
    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    let route = this.getRoute(pathname)

    if (!route) {
      route = this.getRoute(Path.Error404)
    }

    if (this._currentRoute) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    route.render(route, pathname)
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history.back()
  }

  forward() {
    this.history.forward()
  }

  getRoute(pathname: string) {
    return this.routes.find((route: string) => route.match(pathname))
  }
}
