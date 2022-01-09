import { Router } from "../src/components/router";
import { Path } from "../src/constants/router";
import { Login } from "../src/components/login/login.index";
import { ProfileContainer } from "../src/components/profile/profileContainer/profileContainer.index";
import { ChatsContainer } from "../src/components/chats/chatsContainer/chatsContainer.index";
import Signup from "../src/components/signup/signup.index";
import ErrorPage404 from "../src/components/error404/errorPage.index";
import ErrorPage500 from "../src/components/error500/errorPage.index";
import { ProfileChangeDataContainer } from "../src/components/profile/profileChangeDataContainer/profileChangeDataContainer.index";
import { ProfileChangePasswordContainer } from "../src/components/profile/profileChangePasswordContainer/profileChangePasswordContainer.index";

const router = new Router("#root");

router
  .use(Path.Chat, ChatsContainer)
  .use(Path.SignIn, Login)
  .use(Path.SignUp, Signup)
  .use(Path.Profile, ProfileContainer)
  .use(Path.SettingPassword, ProfileChangePasswordContainer)
  .use(Path.SettingData, ProfileChangeDataContainer)
  .use(Path.Error404, ErrorPage404)
  .use(Path.Error500, ErrorPage500)

  .start();
