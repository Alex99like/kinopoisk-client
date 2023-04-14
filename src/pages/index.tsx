import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Home } from '@/components/screens/home/Home'
import { ISlide } from '@/components/ui/slider/slider.interface'
import movies from './manage/movies'
import { getMovieUrl } from '@/config/url.config'
import { getGenresList } from '@/utils/movie/getGenresListEach'
import { GetStaticProps, NextPage } from 'next'
import { MovieService } from '@/service/movie.service'
import { errorCatch } from '@/api/api.helpers'
import { IHome } from '@/components/screens/home/home.interface'

 const HomePage: NextPage<IHome> = ({ slides }) => {
  return <Home slides={slides} />
}



export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getMovies()

    const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      subTitle: getGenresList(m.genres),
      title: m.title,
      bigPoster: m.bigPoster,
    }))
  
    return {
      props: { slides }
    }
  } catch (error) {
    console.log(errorCatch(error))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			},
		}
  }
}

export default HomePage