import pug from "pug";
import profileTemplate from "./profile.tmpl";

const profile = pug.compile(profileTemplate);
const data = {
  user: "Иван",
  inputCommon: [
    {
      label: "Почта",
      type: "email",
      name: "email",
      validationError: "",
      value: "pochta@yandex.ru",
    },
    {
      label: "Логин",
      type: "text",
      name: "login",
      validationError: "",
      value: "ivanivanov",
    },
    {
      label: "Имя",
      type: "text",
      name: "first_name",
      validationError: "",
      value: "Иван",
    },
    {
      label: "Фамилия",
      type: "text",
      name: "second_name",
      validationError: "",
      value: "Иванов",
    },
    {
      label: "Имя в чате",
      type: "text",
      name: "display_name",
      validationError: "",
      value: "Иван",
    },
    {
      label: "Телефон",
      type: "tel",
      name: "phone",
      validationError: "",
      value: "+7 (909) 967 30 30",
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      validationError: "",
      value: "12345678",
    },
    {
      label: "Пароль (еще раз)",
      type: "password",
      name: "password2",
      validationError: "Пароли не совпадают",
      value: "12345678",
    },
  ],
  inputPassword: [
    {
      label: "Старый пароль",
      type: "password",
      name: "oldPassword",
      validationError: "",
      value: "ivaniv",
    },
    {
      label: " Новый пароль",
      type: "password",
      name: "newPassword",
      validationError: "",
      value: "ivanivoo",
    },
    {
      label: "Повторите пароль",
      type: "password",
      name: "newPassword2",
      validationError: "",
      value: "ivanivoo",
    },
  ],
  data: "full",
  state: "basic",
  buttonTextChangeData: "Изменить данные",
  buttonTypeChangeData: "button",
  buttonTextChangePassword: "Изменить пароль",
  buttonTypeChangePassword: "button",
  buttonTextSave: "Сохранить",
  buttonTypeSave: "submit",
  linkHref: "/#chat",
  linkText: "Выйти",
};

export default profile(data);
