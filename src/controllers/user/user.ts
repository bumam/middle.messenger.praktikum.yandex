import { Router } from "../../components/router";
import { Path } from "../../constants/router";
import { SearchUser } from "../../services/api/user/types";
import store from "../../store";
import authApi from "../../services/api/auth";
import userApi from "../../services/api/user";

export default class UserController {
  router: Router;

  constructor() {
    // this.router = Router.getInstance();
  }

  signUp(data: any) {
    if (data) {
      authApi
        .signUp(data)
        .then((res) => {
          res;
        })
        .catch((err) => console.log(err));
    }
  }

  signIn(data: any) {
    if (data) {
      authApi
        .signIn(data)
        .then(() => {
          this.router = Router.getInstance();
          this.router.go(Path.Chat);
        })
        .catch((err) => console.error(err));
    }
  }

  getUser() {
    authApi
      .user()
      .then((res) => {
        store.dispatch("setUser", res);
      })
      .catch((err) => {
        if (err.status === 401) {
          this.router.go(Path.SignIn);
        }
      });
  }

  getUsers(params: SearchUser) {
    if (params) {
      userApi
        .getUsers(params)
        .then((res) => {
          store.dispatch("setUsers", res);
        })
        .catch((err) => console.error(err));
    }
  }

  logout() {
    authApi.logout();
  }
}
