import { NextPageAuth } from "@/shared/types/auth.types";
import { NextPage } from "next";

const ProfilePage: NextPageAuth = () => {
  return <div>Profile Page</div>
}

ProfilePage.isOnlyUser = true

export default ProfilePage