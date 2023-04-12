import { TypeMaterialIconName } from '@/shared/types/icons.types'
import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name]

  return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}
