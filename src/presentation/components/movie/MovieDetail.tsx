import { Text, View, FlatList } from "react-native";
import { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from "../../../core/entities/cast.entity";
import { CastActor } from "../cast/CastActor";

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetail = ( { movie, cast }: Props ) => {
  return (
    <>

      <View style={{marginHorizontal: 20}}>

        <View style={{flexDirection: "row"}}>
          <Text style={{color: 'black'}}>{ movie.rating }</Text>
          <Text style={{marginLeft: 5, color: 'black'}}>
            - {movie.genres.join(', ')}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 23, 
            marginTop: 10, 
            fontWeight: 'bold',
            color: 'black'
          }}
        >
          Historia
        </Text>

        <Text 
          style={{
            fontSize: 16,
            color: 'black',
          }}
        >
          {movie.description}
        </Text>

        <Text
          style={{
            fontSize: 23, 
            marginTop: 10, 
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Presupuesto
        </Text>

        <Text style={{fontSize: 18, color: 'black'}}>
          {Formatter.currency(movie.budge)}
        </Text>

      </View>

      <View style={{marginTop: 10, marginBottom: 50}}>

        <Text style={{
          fontSize: 23,
          color: 'black',
          marginVertical: 10,
          fontWeight: 'bold',
          marginHorizontal: 20
        }}>
          Actores
        </Text>

        <FlatList 
          data={cast}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />

      </View>

    </>
  )
}
