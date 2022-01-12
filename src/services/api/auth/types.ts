export type User = {
  avatar: null | string;
  display_name: null | string;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
};

export interface ISignInRequest {
  login: string;
  password: string;
}

export interface ISignUpRequest {
  first_name: "string";
  second_name: "string";
  phone: "string";
  login: "string";
  email: "string";
  password: "string";
  password_confirm: "string";
}
