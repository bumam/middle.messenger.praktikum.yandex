import template from "./profileChangeData.tmpl"
import Input from "../../input/input.index"
import { ProfileChangeDataType } from "./profileChangeData.type"
import Block from "../../block/block"
import { Avatar } from "../../avatar/avatar.index"
import { Button } from "../../button/button.index"
import FormValidator from "../../../validation/form-validators.constants"

export class ProfileChangeData extends Block<ProfileChangeDataType> {
  validator = new FormValidator()

  constructor(
    props: ProfileChangeDataType = {
      avatar: new Avatar(),
      user: "Иван",
      inputCommon: [
        new Input({
          label: "Почта",
          type: "email",
          name: "email",
          visualType: "long",
          readonly: false,
          events: {
            focusin: (evt: FocusEvent) =>
              this.validator.onInputFocus(evt.target),
            focusout: (evt: FocusEvent) =>
              this.validator.onInputBlur(evt.target),
          },
        }),
        new Input({
          label: "Логин",
          type: "text",
          name: "login",
          visualType: "long",
          readonly: false,
          events: {
            focusin: (evt: FocusEvent) =>
              this.validator.onInputFocus(evt.target),
            focusout: (evt: FocusEvent) =>
              this.validator.onInputBlur(evt.target),
          },
        }),
        new Input({
          label: "Имя",
          type: "text",
          name: "first_name",
          visualType: "long",
          readonly: false,
          events: {
            focusin: (evt: FocusEvent) =>
              this.validator.onInputFocus(evt.target),
            focusout: (evt: FocusEvent) =>
              this.validator.onInputBlur(evt.target),
          },
        }),
        new Input({
          label: "Фамилия",
          type: "text",
          name: "second_name",
          visualType: "long",
          readonly: false,
          events: {
            focusin: (evt: FocusEvent) =>
              this.validator.onInputFocus(evt.target),
            focusout: (evt: FocusEvent) =>
              this.validator.onInputBlur(evt.target),
          },
        }),
        new Input({
          label: "Имя в чате",
          type: "text",
          name: "display_name",
          visualType: "long",
          readonly: false,
          events: {
            focusin: (evt: FocusEvent) =>
              this.validator.onInputFocus(evt.target),
            focusout: (evt: FocusEvent) =>
              this.validator.onInputBlur(evt.target),
          },
        }),
        new Input({
          label: "Телефон",
          type: "tel",
          name: "phone",
          visualType: "long",
          readonly: false,
          events: {
            focusin: (evt: FocusEvent) =>
              this.validator.onInputFocus(evt.target),
            focusout: (evt: FocusEvent) =>
              this.validator.onInputBlur(evt.target),
          },
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
