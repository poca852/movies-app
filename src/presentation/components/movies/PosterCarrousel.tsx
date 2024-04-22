import { View, ScrollView } from "react-native";
import { Movie } from "../../../core/entities/movie.entity";
import { MoviePoster } from "./MoviePoster";

interface Props {
  movies: Movie[];
  height?: number;

}

export const PosterCarrousel = ({
  height = 440, movies
}: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
      >
        {
          movies.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} />
          ))
        }
      </ScrollView>
    </View>
  )
}
