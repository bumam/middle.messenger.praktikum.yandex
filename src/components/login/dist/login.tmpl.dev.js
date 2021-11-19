"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "div.mobile-form\n    div.mobile-form__frame \n        h1.mobile-form__header #{title}\n        div.mobile-form__fields\n        each val, index in input\n            div.mobile-form__input-wrap\n                p.mobile-form__input-name.mobile-form__input-name--active #{val.label}\n                input.mobile-form__input( type=val.type name=val.name value=val.value)\n                span.mobile-form__err #{val.validationError}\n        div.mobile-form__btn-wrap\n            button.mobile-form__btn(type=buttonType) #{buttonText}\n            a.mobile-form__link(href=linkHref) #{linkText}\n            ";
exports["default"] = _default;