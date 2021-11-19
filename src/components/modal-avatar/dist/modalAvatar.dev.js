"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pug = _interopRequireDefault(require("pug"));

var _modalAvatar = _interopRequireDefault(require("./modalAvatar.tmpl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modalAvatar = _pug["default"].compile(_modalAvatar["default"]);

var data = {
  title: "Файл загружен",
  buttonText: "Поменять",
  buttontype: "submit",
  error: ""
};

var _default = modalAvatar(data);

exports["default"] = _default;