import React, { FC } from 'react'
import { IHome } from './home.interface'
import { Layout } from '@/components/layout/Layout'
import { Meta } from '@/utils/meta/Meta'
import { Heading } from '@/components/ui/heading/Heading'
import { toastr } from 'react-redux-toastr'

export const Home: FC<IHome> = () => {
    return (
      <Meta title='Watch Movies' description='watch movies'>
        <Heading title='Watch Movies' className={'text-gray-300 mb-8 text-xl'} />
        <h1>Home Page</h1>
      </Meta>
    )
}
