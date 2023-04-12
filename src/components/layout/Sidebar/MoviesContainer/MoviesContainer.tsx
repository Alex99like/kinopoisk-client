import React from 'react'
import { PopularMovies } from './PopularMovies'
import { FavoritesMovies } from './FavoriteMovies/FavoritesMovies'

export const MoviesContainer = () => {
  return (
    <div>
      <PopularMovies />
      <FavoritesMovies />
    </div>
  )
}
