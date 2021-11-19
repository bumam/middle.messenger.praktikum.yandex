import chats from "../src/components/chats/chats";
import error from "../src/components/error/error";
import login from "../src/components/login/login";
import modalAvatar from "../src/components/modal-avatar/modalAvatar";
import profile from "../src/components/profile/profile";
import signin from "../src/components/signin/signIn";

const root = document.querySelector("#root");

window.addEventListener("hashchange", () => {
  let currentURL = location.hash;
  switch (currentURL) {
    case "#login":
      return (root.innerHTML = login);
    case "#signin":
      return (root.innerHTML = signin);
    case "#profile":
      return (root.innerHTML = profile);
    case "#avatar-modal":
      return (root.innerHTML = modalAvatar);
    case "#chats":
      return (root.innerHTML = chats);
    case "#error404":
      return (root.innerHTML = error);
    default:
      return (root.innerHTML = "");
  }
});
