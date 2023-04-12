import React from 'react'
import { usePopularGenres } from './usePopularGenres'
import { Menu } from '../Menu'
import { SkeletonLoader } from '@/components/ui/heading/SkeletonLoader'

export const GenreMenu = () => {
  const { isLoading, data } = usePopularGenres()

  return isLoading ? <div className={'mx-11 mb-6'}><SkeletonLoader count={5} className={'h-7 mt-6'} /></div>
  : <Menu menu={{ title: 'Popular Genres', items: data || [] }}/>
}
