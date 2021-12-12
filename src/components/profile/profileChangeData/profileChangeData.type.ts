import Input from "../../input/input.index"
import { Avatar } from "../../avatar/avatar.index"
import { Button } from "../../button/button.index"

export type ProfileChangeDataType = {
  avatar: Avatar;
  user: string;
  inputCommon: Input[];
  button: Button;
};
