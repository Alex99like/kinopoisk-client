import { useRouter } from 'next/router'
import React, { FC } from 'react'
import styles from './AdminActions.module.scss'
import { MaterialIcon } from '@/components/ui/MaterialIcon'

interface IAdminAction {
  editUrl: string
  removeHandler: () => void
}

export const AdminActions: FC<IAdminAction> = ({ editUrl, removeHandler }) => {
  const { push } = useRouter()
    
  return (
    <div className={styles.actions}>
      <button onClick={() => push(editUrl)}>
        <MaterialIcon name='MdEdit' />
      </button>
      <button onClick={removeHandler}>
        <MaterialIcon name='MdClose' />
      </button>
    </div>
  )
}
