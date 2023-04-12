import { SkeletonLoader } from '@/components/ui/heading/SkeletonLoader'
import { MovieService } from '@/service/movie.service'
import React from 'react'
import { useQuery } from 'react-query'
import { MovieList } from './MovieList'

export const PopularMovies = () => {
  const { isLoading, data: popularMovies } = useQuery('Popular movies in sidebar', () => MovieService.getMostPopularMovies())
  return isLoading ? (
   <div className={'mt-11'}>
    <SkeletonLoader count={3} className={'h-28 mb-4'} />
   </div>
  ) : (
    <MovieList link='/trending' movies={popularMovies || []} title='Popular Movies' />
  ) 
}
