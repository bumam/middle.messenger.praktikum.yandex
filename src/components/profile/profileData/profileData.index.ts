import template from "./profileData.tmpl"
import Input from "../../input/input.index"
import { ProfileDataType } from "./profileData.type"
import Block from "../../block/block"
import { Avatar } from "../../avatar/avatar.index"

export class ProfileData extends Block<ProfileDataType> {
  constructor(
    props: ProfileDataType = {
      avatar: new Avatar(),
      user: "Иван",
      inputCommon: [
        new Input({
          label: "Почта",
          type: "email",
          name: "email",
          visualType: "long",
          readonly: true,
        }),
        new Input({
          label: "Логин",
          type: "text",
          name: "login",
          visualType: "long",
          readonly: true,
        }),
        new Input({
          label: "Имя",
          type: "text",
          name: "first_name",
          visualType: "long",
          readonly: true,
        }),
        new Input({
          label: "Фамилия",
          type: "text",
          name: "second_name",
          visualType: "long",
          readonly: true,
        }),
        new Input({
          label: "Имя в чате",
          type: "text",
          name: "display_name",
          visualType: "long",
          readonly: true,
        }),
        new Input({
          label: "Телефон",
          type: "tel",
          name: "phone",
          visualType: "long",
          readonly: true,
        }),
      ],
    }
  ) {
    super(props, "div", "#root")
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
