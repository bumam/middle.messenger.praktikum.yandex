"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pug = _interopRequireDefault(require("pug"));

var _signin = _interopRequireDefault(require("./signin.tmpl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signin = _pug["default"].compile(_signin["default"]);

var data = {
  title: "Регистрация",
  input: [{
    label: "Почта",
    type: "email",
    name: "email",
    validationError: "",
    value: 'pochta@yandex.ru'
  }, {
    label: "Логин",
    type: "text",
    name: "login",
    validationError: "",
    value: 'ivanivanov'
  }, {
    label: "Имя",
    type: "text",
    name: "first_name",
    validationError: "",
    value: 'Иван'
  }, {
    label: "Фамилия",
    type: "text",
    name: "second_name",
    validationError: "",
    value: 'Иванов'
  }, {
    label: "Телефон",
    type: "tel",
    name: "phone",
    validationError: "",
    value: '+7 (909) 967 30 30'
  }, {
    label: "Пароль",
    type: "password",
    name: "password",
    validationError: "",
    value: '12345678'
  }, {
    label: "Пароль (еще раз)",
    type: "password",
    name: "password2",
    validationError: "Пароли не совпадают",
    value: '12345678'
  }],
  buttonText: "Зарегистрироваться",
  buttonType: "submit",
  linkHref: "/#login",
  linkText: "Войти"
};

var _default = signin(data);

exports["default"] = _default;