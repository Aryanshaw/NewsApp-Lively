/* eslint-disable prettier/prettier */

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import React, {useContext} from 'react';
import {NewsContext} from '../API/Context';
import {categories, sources} from '../API/api';
import Carousel from 'react-native-snap-carousel';
import Search from '../components/Search';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const SLIDER_WIDTH = Math.round(windowWidth / 3.5);

const DiscoverScreen = () => {
  const {setCategory , darkTheme} = useContext(NewsContext);

  return (
    <View style={{...styles.discover, backgroundColor: darkTheme ? '#282C35' :"white"}}>
      {/* search  */}
       <Search/>
      {/* categories */}
      <Text style={{...styles.subtitle, color: darkTheme ? 'white' :"black"}}>Categories</Text>
      <Carousel
        layout={'default'}
        data={categories}
        renderItem={({item, index}) => (
          <TouchableOpacity 
          style={styles.category}
          onPress={() =>setCategory(item.name)}
          >
            <Image source={{uri: item.pic}} style={styles.categoryImage} />
            <Text style={{...styles.name, color: darkTheme ? 'white' :"black"}}>{item.name}</Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={SLIDER_WIDTH}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      {/* sources */}
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
    height:windowHeight,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    marginHorizontal: 5,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  categoryImage: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loader:{
    minHeight:"100%",
    display: 'flex',
    justifyContent:"center",
    alignItems: 'center',
  }
});
