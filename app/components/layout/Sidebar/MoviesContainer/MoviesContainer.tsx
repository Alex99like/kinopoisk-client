import {PopularMovies} from "@/app/components/layout/Sidebar/MoviesContainer/PopularMovies";
import {FavoriteMovies} from "@/app/components/layout/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies";

export const MoviesContainer = () => {
  return (
    <div>
      <PopularMovies />
      <FavoriteMovies />
    </div>
  )
}