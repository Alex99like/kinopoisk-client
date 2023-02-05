import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/app/assets/images/logo.svg'

export const Logo: FC = () => {
  return (
    <Link legacyBehavior href="/">
      <a className="px-layout mb-10 block">
        <Image
          src={logoImage}
          width={247}
          height={34}
          alt="Movie app"
          draggable={false}
        />
      </a>
    </Link>
  )
}
