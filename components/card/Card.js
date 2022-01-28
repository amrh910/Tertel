import { StyleSheet, Image } from 'react-native';
import { Card as RNCard} from "@paraboly/react-native-card";

const Card = ({ movie }) => {
  
  let imgUri = "https://image.tmdb.org/t/p/original" + movie.poster;

  return (
    <>
      <RNCard
          iconDisable
          title={ <Image style={styles.poster} source={{uri:imgUri}} /> }
          description="Main Content"
          bottomRightText="30"
          onPress={() => {}}
          style={styles.card}
      />
    </>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
      marginBottom: 10,
  },
  poster: {
    height: '100%',
    width: '100%'
  }
});