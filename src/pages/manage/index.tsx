import { Admin } from "@/components/screens/admin/Admin";
import { NextPageAuth } from "@/shared/types/auth.types";
import { NextPage } from "next";

const AdminPage: NextPageAuth = () => {
  return (
    <Admin />
  )
}

AdminPage.isOnlyAdmin = true

export default AdminPage