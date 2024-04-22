import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import type { MovieDbMoviesResponse } from "../../../infrastructure/interfaces/movide-db.responses";
import type { Movie } from "../../entities/movie.entity";
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async ( fetcher: HttpAdapter, options?: Options ): Promise<Movie[]> => {
  
  try {
    
    const upComming = await fetcher.get<MovieDbMoviesResponse>( '/popular', {
      params: {
        page: options?.page ?? 1,
      }
    } );

    return upComming.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch (error) {

    console.log(error);

    throw new Error( 'Failed to fetching movies - upComming.' );

  }

}