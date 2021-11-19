import pug from "pug";
import loginTemplate from "./login.tmpl";

const login = pug.compile(loginTemplate);
const data = {
    title: "Вход",
    input: [
      {
        label: "Логин",
        type: "text",
        name: "login",
        validationError: "Неверный логин",
        value: 'ivan'
      },
      {
        label: "Пароль",
        type: "password",
        name: "password",
        validationError: "Неверный пароль",
        value: 'ivanon'
      },
    ],
    buttonText: "Войти",
    buttonType: "submit",
    linkHref: "/#registration",
    linkText: "Нет аккаунта?",
  };

export default login(data);