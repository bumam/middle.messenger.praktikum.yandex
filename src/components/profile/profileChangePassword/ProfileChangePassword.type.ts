import Input from "../../input/input.index"
import { Avatar } from "../../avatar/avatar.index"
import { Button } from "../../button/button.index"

export type ProfileChangePasswordType = {
  avatar: Avatar;
  user: string;
  inputPassword: Input[];
  button: Button;
};
