import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logoImage from '../../../assets/images/logo.svg'

export const Logo = () => {
  return (
    <Link href={'/'} legacyBehavior>
      <a className={'px-layout mx-10 block'}>
        <Image 
          src={logoImage} 
          width={247} 
          height={34} 
          alt='Online cinema' 
          draggable={false}
          style={{ marginBottom: 30 }}
        />
      </a>
    </Link>
  )
}
