import {useQuery} from "react-query";
import {MovieService} from "@/app/services/movie.service";
import {SkeletonLoader} from "@/app/components/ui/SkeletonLoader";
import {MovieList} from "@/app/components/layout/Sidebar/MoviesContainer/MovieList";

export const PopularMovies = () => {
  const { isLoading, data: popularMovies } = useQuery('Popular movies in sidebar', () =>
    MovieService.getMostPopularMovies()
  )

  return isLoading ? (
    <div className={'mt-11'}>
      <SkeletonLoader count={3} className={'h-28 mb-4'} />
    </div>
  ) : (
    <MovieList link={'/trending'} movies={popularMovies || []} title={'Popular Movies'} />
  )
}