import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import type { MovieDbMoviesResponse } from "../../../infrastructure/interfaces/movide-db.responses";
import type { Movie } from "../../entities/movie.entity";
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';


export const moviesTopRatedUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  
  try {
    
    const topRated = await fetcher.get<MovieDbMoviesResponse>( '/top_rated' );

    return topRated.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch (error) {

    console.log(error);

    throw new Error( 'Failed to fetching movies - topRated.' );

  }

}