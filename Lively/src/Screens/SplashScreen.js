/* eslint-disable prettier/prettier */

import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const SplashScreen = ({navigation}) => {
  var user = firebase.auth().currentUser;
  console.log(user)
  // User is signed in.
  setTimeout(() => {
    if (user) {
    // if (user==null) {
    navigation.replace('InshortTabs');
  } else {
    navigation.replace('login');
    // No user is signed in.
  }
}, 900);
  // setTimeout(() => {
  //   // if (user==null) {
  //   navigation.replace('InshortTabs');
  //   // navigation.replace('login');
  // }, 900);
  return (
    // <View>
    <ImageBackground
      style={{flex: 1, height: '100%', width: '100%'}}
      source={require('../assets/splashScreen.jpg')}></ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
