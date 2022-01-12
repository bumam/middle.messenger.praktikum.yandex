import { SearchUser } from "./types";
import HTTP from "../http/index";

export default class UserApi {
  url: string;

  constructor() {
    this.url = "/user";
  }

  getUsers(params: SearchUser) {
    return HTTP.post(`${this.url}/search`, { data: params }).then((res) => res);
  }
}
