"use strict";

var _chats = _interopRequireDefault(require("../src/components/chats/chats"));

var _error = _interopRequireDefault(require("../src/components/error/error"));

var _login = _interopRequireDefault(require("../src/components/login/login"));

var _modalAvatar = _interopRequireDefault(require("../src/components/modal-avatar/modalAvatar"));

var _profile = _interopRequireDefault(require("../src/components/profile/profile"));

var _signIn = _interopRequireDefault(require("../src/components/signin/signIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var root = document.querySelector("#root");
window.addEventListener("hashchange", function () {
  var currentURL = location.hash;

  switch (currentURL) {
    case "#login":
      return root.innerHTML = _login["default"];

    case "#signin":
      return root.innerHTML = _signIn["default"];

    case "#profile":
      return root.innerHTML = _profile["default"];

    case "#avatar-modal":
      return root.innerHTML = _modalAvatar["default"];

    case "#chats":
      return root.innerHTML = _chats["default"];

    case "#error404":
      return root.innerHTML = _error["default"];

    default:
      return root.innerHTML = "";
  }
});