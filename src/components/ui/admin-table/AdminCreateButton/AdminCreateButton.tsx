import React, { FC } from 'react'
import styles from './AdminCreateButton.module.scss'
import { Button } from '../../form-elements/Button'

export const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>Create new</Button>
  )
}
