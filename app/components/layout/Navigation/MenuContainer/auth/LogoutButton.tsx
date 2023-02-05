import {useActions} from "@/app/hooks/useActions";
import { MouseEvent } from 'react'
import {MaterialIcon} from "@/app/components/ui/MaterialIcon";

export const LogoutButton = () => {
  const { logout } = useActions()

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    logout()
  }

  return (
    <li>
      <a onClick={handleLogout}>
        <MaterialIcon name={'MdLogout'} />
        <span>Logout</span>
      </a>
    </li>
  )
}