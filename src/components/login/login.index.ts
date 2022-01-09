import Form from "../form/form.index";
import template from "./login.tmpl";
import Input from "../input/input.index";
import Block from "../block/block";
import { LoginType } from "./login.type";
import FormValidator from "../../validation/form-validators.constants";
import { Button } from "../button/button.index";

export class Login extends Block<LoginType> {
  validator = new FormValidator();

  constructor() {
    super({
      form: new Form({
        formName: "login",
        title: "Вход",
        buttonText: "Войти",
        buttonType: "submit",
        linkHref: "/signup",
        linkText: "Нет аккаунта?",
        content: [
          new Input({
            label: "Логин",
            type: "text",
            name: "login",
            id: "login",
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
            id: "password",
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
          title: "Авторизоваться",
          events: {
            click: (evt: any) => this.validator.onSubmit(evt, evt.target),
          },
        }),
      }),
    });
  }

  render(): HTMLElement {
    return this.compile(template, this.props);
  }
}
