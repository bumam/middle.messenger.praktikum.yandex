import { ProfileContainer } from "../../components/profile/profileContainer/profileContainer.index"
import { ProfileChangePassword } from "../../components/profile/profileChangePassword/ProfileChangePassword.index"

new ProfileContainer({
  data: new ProfileChangePassword(),
}).render()
