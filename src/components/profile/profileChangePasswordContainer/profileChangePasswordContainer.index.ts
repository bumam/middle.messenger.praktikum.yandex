import Block from "../../block/block";
import { ProfileChangePasswordContainertype } from "./profileChangePasswordContainertype";
import template from "../profileData/profileData.tmpl";
import { ProfileChangePassword } from "../profileChangePassword/ProfileChangePassword.index";

export class ProfileChangePasswordContainer extends Block<ProfileChangePasswordContainertype> {
  constructor(
    props: ProfileChangePasswordContainertype = {
      data: new ProfileChangePassword(),
    }
  ) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, this.props);
  }
}
