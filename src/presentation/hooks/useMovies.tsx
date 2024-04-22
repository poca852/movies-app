import { useEffect, useState } from "react"
import type { Movie } from "../../core/entities/movie.entity";

import * as UseCases from '../../core/use-cases';
import { MovieDbFetcher } from "../../config/adapters/movieDb.adapter";

let popularPage = 1;

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComming, setUpcomming] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {

    const [
      nowPlayingMovies,
      upcomingMovies,
      popularMovies,
      topRatedMovies
    ] = await Promise.all([
      UseCases.moviesNowPlayingUseCase(MovieDbFetcher),
      UseCases.moviesUpcomingUseCase(MovieDbFetcher),
      UseCases.moviesPopularUseCase(MovieDbFetcher),
      UseCases.moviesTopRatedUseCase(MovieDbFetcher),
    ])

    setNowPlaying(nowPlayingMovies);
    setUpcomming(upcomingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);

    setIsLoading(false);
  }


  return {
    isLoading,
    nowPlaying,
    upComming,
    popular,
    topRated,

    //Methods

    popularNextPage: async() => {
      popularPage++;
      const newPopular = await UseCases.moviesPopularUseCase(MovieDbFetcher, {page: popularPage});
      setPopular([...popular, ...newPopular]);
    },
  }

}
