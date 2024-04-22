import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/movide-db.responses";
import { Cast } from "../../entities/cast.entity";
import { CastMapper } from '../../../infrastructure/mappers/cast.mapper';

export const getMovieCastUse = async( fetcher: HttpAdapter, movieId: number ): Promise<Cast[]> => {
  
  try {

    const { cast } = await fetcher.get<MovieDBCastResponse>( `/${movieId}/credits` );

    const actors = cast.map( CastMapper.fromMovieDBCastToEntity );
    
    return actors
    
  } catch (error) {
    throw new Error(`Cannot get movie cast by id ${movieId}`)
  }

}