"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ".overlay\n.modal\n    h1.modal__header #{title}\n    form.modal__form\n        .modal__actions\n            if file\n                input.modal__input(type=\"file\" name=\"avatar\" value=\"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u043E\u0440\u0435\")\n                label.modal__label(for=\"name\") \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u043E\u0440\u0435\n            else\n                span.modal__file-name ivan.jpeg\n        button.modal__button(type=buttonType) #{buttonText}\n        if error\n            span.modal__error \u041D\u0443\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B";
exports["default"] = _default;