import { MaterialIcon } from '@/components/ui/MaterialIcon'
import { useActions } from '@/hooks/useActions'
import React, { FC, MouseEvent } from 'react'

export const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}