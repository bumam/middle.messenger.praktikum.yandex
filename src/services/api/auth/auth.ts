import HTTP from "../http";
import { ISignInRequest, ISignUpRequest } from "./types";
import { METHOD } from "../http/types";

export default class AuthApi {
  url: string = "/auth";

  signIn(user: ISignInRequest): Promise<XMLHttpRequest> {
    return HTTP.post(`${this.url}/signin`, { method: METHOD.POST, data: user });
  }

  user(): Promise<XMLHttpRequest> {
    return HTTP.get(`${this.url}/user`);
  }

  logout(): Promise<XMLHttpRequest> {
    return HTTP.post(`${this.url}/logout`);
  }

  signUp(user: ISignUpRequest): Promise<XMLHttpRequest> {
    return HTTP.post(`${this.url}/signup`, { data: user });
  }
}
