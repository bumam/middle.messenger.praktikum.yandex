import Block from "../../block/block";
import { ProfileChangeDataContainerType } from "./profileChangeDataContainer.type";
import template from "../profileData/profileData.tmpl";
import { ProfileChangeData } from "../profileChangeData/profileChangeData.index";

export class ProfileChangeDataContainer extends Block<ProfileChangeDataContainerType> {
  constructor(
    props: ProfileChangeDataContainerType = {
      data: new ProfileChangeData(),
    }
  ) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, this.props);
  }
}
