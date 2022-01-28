import { ScrollView, ActivityIndicator, StyleSheet, View } from 'react-native';
import Card from '../card/Card.js';
import { useFindMovie } from '../../framework/api.js';
import { useEffect, useState } from 'react';

const CardTable = ({ query }) => {
  const movies = useFindMovie(query);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if(movies)
    {
      setLoading(false);
    }
  }, [movies]);
  
  return (
    <>
      { (!loading) ?
        <ScrollView>
          {
            movies.map((movie) => {
                return(
                    <Card movie={movie} />
                );
            })
          }
        </ScrollView>
      :
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      }
    </>
  );
}

export default CardTable;

const styles = StyleSheet.create({
  loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});