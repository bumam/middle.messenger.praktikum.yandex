"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pug = _interopRequireDefault(require("pug"));

var _login = _interopRequireDefault(require("./login.tmpl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = _pug["default"].compile(_login["default"]);

var data = {
  title: "Вход",
  input: [{
    label: "Логин",
    type: "text",
    name: "login",
    validationError: "Неверный логин",
    value: 'ivan'
  }, {
    label: "Пароль",
    type: "password",
    name: "password",
    validationError: "Неверный пароль",
    value: 'ivanon'
  }],
  buttonText: "Войти",
  buttonType: "submit",
  linkHref: "/#registration",
  linkText: "Нет аккаунта?"
};

var _default = login(data);

exports["default"] = _default;