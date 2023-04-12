import { AdminNavigation } from '@/components/ui/admin-navigation/AdminNavigation'
import { Heading } from '@/components/ui/heading/Heading'
import { Meta } from '@/utils/meta/Meta'
import React from 'react'
import { Statistics } from './Statistics/Statistics'

export const Admin = () => {
  return (
    <Meta title='Admin Panel'>
      <AdminNavigation />
      <Heading title='Some statistics' />
      <Statistics />
    </Meta>
  )
}
