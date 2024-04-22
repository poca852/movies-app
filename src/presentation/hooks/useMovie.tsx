import { useEffect, useState } from "react";
import * as UseCases from '../../core/use-cases';
import { MovieDbFetcher } from '../../config/adapters/movieDb.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);


  useEffect(() => {
    loadMovie()
  }, [movieId])

  const loadMovie = async () => {
    setIsLoading(true)

    const [fullMovie, cast] = await Promise.all([
      UseCases.getMovieByIdUseCase(MovieDbFetcher, movieId),
      UseCases.getMovieCastUse(MovieDbFetcher, movieId)
    ])


    setMovie(fullMovie);
    setCast(cast);
    
    setIsLoading(false)
  } 

  return {
    isLoading,
    movie,
    cast
  }

}
