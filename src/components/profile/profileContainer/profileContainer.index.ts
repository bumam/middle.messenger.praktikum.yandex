import Block from "../../block/block";
import { ProfileContainerType } from "./profileContainer.type";
import template from "../profileData/profileData.tmpl";
import { ProfileData } from "../profileData/profileData.index";

export class ProfileContainer extends Block<ProfileContainerType> {
  constructor(
    props: ProfileContainerType = {
      data: new ProfileData(),
    }
  ) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, this.props);
  }
}
