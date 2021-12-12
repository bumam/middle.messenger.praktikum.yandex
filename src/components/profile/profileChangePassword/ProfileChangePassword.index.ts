import template from "./ProfileChangePassword.tmpl"
import Input from "../../input/input.index"
import { ProfileChangePasswordType } from "./ProfileChangePassword.type"
import Block from "../../block/block"
import { Avatar } from "../../avatar/avatar.index"
import { Button } from "../../button/button.index"
import FormValidator from "../../../validation/form-validators.constants"

export class ProfileChangePassword extends Block<ProfileChangePasswordType> {
  validator = new FormValidator()

  constructor(
    props: ProfileChangePasswordType = {
      avatar: new Avatar(),
      user: "Иван",
      inputPassword: [
        new Input({
          label: "Старый пароль",
          type: "password",
          name: "oldPassword",
          visualType: "long",
        }),
        new Input({
          label: " Новый пароль",
          type: "password",
          name: "password",
          visualType: "long",
          events: {
            focusin: (evt: FocusEvent) =>
              this.validator.onInputFocus(evt.target),
            focusout: (evt: FocusEvent) =>
              this.validator.onInputBlur(evt.target),
          },
        }),
        new Input({
          label: "Повторите пароль",
          type: "password",
          name: "newPassword2",
          visualType: "long",
        }),
      ],
      button: new Button({
        title: "Сохранить",
        events: {
          click: (evt: any) => this.validator.onSubmit(evt, evt.target),
        },
      }),
    }
  ) {
    super(props, "div", "#root")
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
