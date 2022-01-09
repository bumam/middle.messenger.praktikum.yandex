import Block from "../../block/block"
import { ProfileContainerType } from "./profileContainer.type"
import template from "../profileData/profileData.tmpl"

export class ProfileContainer extends Block<ProfileContainerType> {
  constructor(props: ProfileContainerType) {
    super(props)
  }

  render(): HTMLElement {
    return this.compile(template, this.props)
  }
}
