import { FC } from "react"
import cn from 'classnames'
import styles from './SliderArrow.module.scss'
import { MaterialIcon } from "../../MaterialIcon"

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}

export const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
  const isLeft = variant === 'left'
  
  return (
  	<button
  	  onClick={clickHandler}
  	  className={cn(styles.arrow, {
  	  	[styles.left]: isLeft,
  	  	[styles.right]: !isLeft,
  	  })}
  	>
  	  <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
  	</button>
  )
}