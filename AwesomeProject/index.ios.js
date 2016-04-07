/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const API_KEY='ahypqubjven2ybh9a67nmuqp';
const API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
const PAGE_SIZE = 25;
const PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
const REQUEST_URL = API_URL + PARAMS;

const MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class AwesomeProject extends Component {
  render() {
    const movie = MOCKED_MOVIES_DATA[0];
    return(
      <View style={styles.container}>
        <Image source={{uri:movie.posters.thumbnail}}
        style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center'
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
