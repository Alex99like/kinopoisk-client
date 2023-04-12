import { AdminService } from '@/service/admin.service'
import React from 'react'
import { useQuery } from 'react-query'
import cn from 'classnames'

import styles from '../Admin.module.scss'
import { SkeletonLoader } from '@/components/ui/heading/SkeletonLoader'

export const CountUsers = () => {
  const { isLoading, data: response } = useQuery('Count users', () =>
  AdminService.getCountUsers()
  )

return (
    <div className={cn(styles.block, styles.countUsers)}>
        <div>
            {isLoading ? (
                <SkeletonLoader />
            ) : (
                <div className={styles.number}>{response?.data}</div>
            )}
            <div className={styles.description}>users</div>
        </div>
    </div>
)
}
