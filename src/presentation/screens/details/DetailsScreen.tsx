import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetail } from '../../components/movie/MovieDetail';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{}

export const DetailsScreen = ({ route }: Props) => {

  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);
  
  if(isLoading) return <FullScreenLoader />

  return (
    <ScrollView>
      <MovieHeader 
        originalTitle={movie!.originalTitle}
        title={movie!.title}
        poster={movie!.poster}
      />

      <MovieDetail movie={movie!} cast={cast} />
    </ScrollView>
  )
}
