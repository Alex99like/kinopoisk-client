import {FC} from "react";
import {usePopularGenres} from "@/app/components/layout/Navigation/MenuContainer/genres/usePopularGenres";
import {Menu} from "@/app/components/layout/Navigation/MenuContainer/Menu";
import {SkeletonLoader} from "@/app/components/ui/SkeletonLoader";
import 'react-loading-skeleton/dist/skeleton.css'

export const GenreMenu:FC = () => {
  const { isLoading, data } = usePopularGenres()

  return isLoading ? (
    <div className={'mx-11 mb-6'}><SkeletonLoader count={5} className={'h-7 mt-6'} /></div>
    ) : (
    <Menu menu={{ title: 'Popular genres', items: data || [] }} />
  )
}