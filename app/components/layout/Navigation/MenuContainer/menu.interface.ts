import {TypeMaterialIconName} from "@/app/shared/types/icon.types";

export interface IMenuItem {
  icon: TypeMaterialIconName
  title: string
  link: string
}

export interface IMenu {
  title: string
  items: IMenuItem[]
}