import {FC, useEffect, useState} from "react";
import {useAuth} from "@/app/hooks/useAuth";
import {MenuItem} from "@/app/components/layout/Navigation/MenuContainer/MenuItem";
import {LogoutButton} from "@/app/components/layout/Navigation/MenuContainer/auth/LogoutButton";
import {getAdminHomeUrl} from "@/app/config/url.config";
import {IUserState} from "@/app/store/user/user.interface";

export const AuthItems:FC = () => {
  const { user } = useAuth()

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>
  else return (
    <>
      {user ? (
        <>
        <MenuItem item={{
          icon: 'MdSettings',
          link: '/profile',
          title: 'Profile'
        }} />
        <LogoutButton />
        </>
      ) : (
        <>
          <MenuItem item={{
            icon: 'MdLogin',
            link: '/auth',
            title: 'Login'
          }} />
        </>
      )}

      {user?.isAdmin && (
        <MenuItem item={{
          icon: 'MdOutlineLock',
          link: getAdminHomeUrl(),
          title: 'Admin panel'
        }}/>
      )}
    </>
  )
}