import { axiosClassic } from '@/api/interseptor'
import { getGenresUrl } from '@/config/api.config'
import { IGenre } from '@/shared/types/movie.types'
import axios from 'axios'

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm 
        ? {
            searchTerm
        } : {}
    })
  }
}