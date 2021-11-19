"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pug = _interopRequireDefault(require("pug"));

var _error = _interopRequireDefault(require("./error.tmpl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var error = _pug["default"].compile(_error["default"]);

var data = {
  errorCode: 404,
  errorText: "Не туда попали",
  linkHref: "/#chat",
  linkText: "Назад к чатам"
};

var _default = error(data);

exports["default"] = _default;