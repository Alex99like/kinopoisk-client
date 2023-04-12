import React, { FC } from 'react'

export const SubHeading: FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className={'text-[#fff] text-xl mb-5 font-semibold'}>{title}</h2>
  )
}
