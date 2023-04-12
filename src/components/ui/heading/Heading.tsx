import React, { FC } from 'react'

interface IHeading {
  title: string
  className?: string
}

export const Heading: FC<IHeading> = ({ title, className }) => {
  return (
    <h1 
    className={`text-white text-opacity-80 font-semibold ${className?.includes('xl') ? '' : 'text-3xl'}`}
    >
      {title}
    </h1>
  )
}
