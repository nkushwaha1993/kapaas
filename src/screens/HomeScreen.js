import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const tiles = [
  {
    title: 'Tile 1',
    page: 'Page1',
    color: 'red'
  },
  {
    title: 'Tile 2',
    page: 'Page2',
    color: 'green'
  },
  {
    title: 'Tile 3',
    page: 'Page3',
    color: 'blue'
  },
  {
    title: 'Tile 4',
    page: 'Page4',
    color: 'yellow'
  },
  {
    title: 'Tile 5',
    page: 'Page3',
    color: 'blue'
  },
  {
    title: 'Tile 6',
    page: 'Page4',
    color: 'yellow'
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text >Home Page</Text>
      </View>
      <View style={styles.container}>        
          {tiles.map(tile => (
            <TouchableHighlight
              key={tile.title}
              underlayColor="lightgray"
              onPress={() => console.log(`Navigating to ${tile.page}`)}
              style={[styles.tile]}
            >
              <View style = {styles.inner}>
                <Text style={styles.tileTitle}> {tile.title}</Text>
              </View>
            </TouchableHighlight>
          ))}        
      </View>
    </View>
  );
}
//, { backgroundColor: tile.color }
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width : '100%',
    height: '85%',
    padding: 5,
    //backgroundColor : 'red'
  },
  tile: {
    width: '50%',
    height : '50%',
    padding : 5,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  tileTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2,
  },
  header: {
    width : '100%',
    height : '15%',
    backgroundColor :'#c8c8c8',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : '15%'
  },
  inner : {
    flex : 1,
    backgroundColor :'#c8c8c8',
    width:'98%'
  }

});

export default HomeScreen;
