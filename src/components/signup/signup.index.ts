import template from "../login/login.tmpl"
import Form from "../form/form.index"
import Input from "../input/input.index"
import Block from "../block/block"
import { Button } from "../button/button.index"
import FormValidator from "../../validation/form-validators.constants"
import { SignUpType } from "./signup.type"

export default class Signup extends Block<SignUpType> {
  validator = new FormValidator()

  constructor(
    props: SignUpType = {
      form: new Form({
        formName: "login",
        title: "Регистрация",
        buttonText: "Зарегистрироваться",
        buttonType: "submit",
        linkHref: "/login.html",
        linkText: "Войти",
        content: [
          new Input({
            label: "Почта",
            type: "email",
            name: "email",
            visualType: "short",
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
            visualType: "short",
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
            visualType: "short",
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
            visualType: "short",
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
            visualType: "short",
            events: {
              focusin: (evt: FocusEvent) =>
                this.validator.onInputFocus(evt.target),
              focusout: (evt: FocusEvent) =>
                this.validator.onInputBlur(evt.target),
            },
          }),
          new Input({
            label: "Пароль",
            type: "password",
            name: "password",
            visualType: "short",
            events: {
              focusin: (evt: FocusEvent) =>
                this.validator.onInputFocus(evt.target),
              focusout: (evt: FocusEvent) =>
                this.validator.onInputBlur(evt.target),
            },
          }),
          new Input({
            label: "Пароль (еще раз)",
            type: "password",
            name: "password_again",
            visualType: "short",
            events: {
              focusin: (evt: FocusEvent) =>
                this.validator.onInputFocus(evt.target),
              focusout: (evt: FocusEvent) =>
                this.validator.onInputBlur(evt.target),
            },
          }),
        ],
        button: new Button({
          title: "Зарегистрироваться",
          events: {
            click: (evt: any) => this.validator.onSubmit(evt, evt.target),
          },
        }),
      }),
    }
  ) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
