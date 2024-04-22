import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDbMoviesResponse } from "../../../infrastructure/interfaces/movide-db.responses";
import type { Movie } from "../../entities/movie.entity";
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';


export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  
  try {
    
    const upComming = await fetcher.get<MovieDbMoviesResponse>( '/upcoming' );

    return upComming.results.map( MovieMapper.fromMovieDBResultToEntity );

  } catch (error) {

    console.log(error);

    throw new Error( 'Failed to fetching movies - upComming.' );

  }

}