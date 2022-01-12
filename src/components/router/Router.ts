import { Route } from "../Route";

export default class Router {
  private static instance: Router;

  private routes: Route[];

  private history: History;

  private currentRoute: Route | null;

  constructor(private rootQuery?: string) {
    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;

    Router.instance = this;
  }

  static getInstance(rootQuery = "root"): Router {
    if (!Router.instance) {
      Router.instance = new Router(rootQuery);
    }

    return Router.instance;
  }

  use(pathname: string, block: any) {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      // @ts-ignore
      this.onRoute(event.currentTarget.location.pathname);
    };
    this.onRoute(window.location.pathname);
  }

  protected onRoute(pathname: string): void {
    const route = this.getRoute(pathname);

    if (route) {
      if (this.currentRoute) {
        this.currentRoute.leave();
      }

      this.currentRoute = route;

      route.render();
    }
  }

  go(pathname: string): void {
    this.history.pushState({}, "", pathname);
    this.onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route {
    // @ts-ignore
    return this.routes.find((route) => route.match(pathname));
  }
}
