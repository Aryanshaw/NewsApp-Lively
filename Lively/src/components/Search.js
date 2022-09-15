/* eslint-disable prettier/prettier */

import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {NewsContext} from '../API/Context';
import SingleNews from './SingleNews'
import Entypo from 'react-native-vector-icons/Entypo';

const Search = () => {
  const {
    news: {articles},
    darkTheme
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();




  const handleModal = n => {
    setModalVisible(true);
    setCurrentNews(n);
  };

  const handleSearch = text => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(articles.filter(query => query.title.includes(text)));
  };

  return (
    <View style={{width: '100%', position: 'relative'}}>
      <TextInput
        style={{...styles.search, backgroundColor: darkTheme ? 'black' : 'grey', color: darkTheme ? 'white' : 'black'}}
        placeholder="Search here..."
        placeholderTextColor={'white'}
        onChangeText={text => handleSearch(text)}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map(n => (
          <TouchableOpacity
            key={n.title}
            activeOpacity={0.7}
            onPress={() => handleModal(n)}>
            <Text
              style={{
                ...styles.singleResults,
                backgroundColor: darkTheme ? "black" : "white",
                color: darkTheme ? "white" : "black",
              }}>
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animation="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
            <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: "absolute",
            zIndex: 2,
            right: 0,
            margin: 20,
          }}
        >
          <Entypo name="circle-with-cross" size={30} color="white" />
        </TouchableOpacity>
        <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
          <SingleNews item={currentNews} />
        </View>
        </Modal>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 35,
    marginTop: 15,
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  singleResults: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: 'black',
    elevation: 5,
  },
 
});
