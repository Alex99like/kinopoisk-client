import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { MenuItem } from '../MenuItem'
import { getAdminHomeUrl } from '@/config/url.config'
import { LogoutButton } from './LogoutButton'

export const AuthItems = () => {
  const { user } = useAuth()

  const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);

  if (!hydrated) return null
  
  return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}
