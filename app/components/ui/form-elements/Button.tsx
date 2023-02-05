import {FC} from "react";
import {IButton} from "@/app/components/ui/form-elements/form.interface";
import cn from 'classnames'
import styles from './form.module.scss'

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button
      className={cn(styles.button, className)}
    >{children}</button>
  )
}