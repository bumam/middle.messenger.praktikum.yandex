import { ProfileContainer } from "../../components/profile/profileContainer/profileContainer.index"
import { ProfileChangeData } from "../../components/profile/profileChangeData/profileChangeData.index"

new ProfileContainer({
  data: new ProfileChangeData(),
}).render()
