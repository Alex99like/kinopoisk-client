import {FC} from "react";
import * as MaterialIcons from 'react-icons/md'
import {TypeMaterialIconName} from "@/app/shared/types/icon.types";

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name]

  return <IconComponent/> || <MaterialIcons.MdDragIndicator/>
}