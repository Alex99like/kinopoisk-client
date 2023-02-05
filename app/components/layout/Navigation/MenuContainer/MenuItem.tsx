import {useRouter} from "next/router";
import cn from 'classnames'
import {FC} from "react";
import {IMenuItem} from "@/app/components/layout/Navigation/MenuContainer/menu.interface";
import styles from './Menu.module.scss'
import Link from "next/link";
import {MaterialIcon} from "@/app/components/ui/MaterialIcon";

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter()

  return (
    <li className={cn({
      [styles.active]: asPath === item.link
    })}>
      <Link href={item.link} legacyBehavior>
        <a>
          <MaterialIcon name={item.icon} />
          <span>{item.title}</span>
        </a>
      </Link>
    </li>
  )
}