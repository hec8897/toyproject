import React from 'react';
// import { StyleSheet, Platform } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header}>
      <Image style={styles.Title} source={require('../assets/img/logo.png')} />
      <View style={styles.InlineStyle}>
        <Image style={styles.IconStyle} source={require('../assets/img/add.png')} />
        <Image style={styles.IconStyle} source={require('../assets/img/heart.png')} />
        <Image style={styles.IconStyle} source={require('../assets/img/right-arrow.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
    width: '30%',
    resizeMode: 'contain',
    margin: 0,
  },
  InlineStyle:{
    display:'flex',
    flexDirection: 'row',
  },
  IconStyle: {
    width: 25,
    resizeMode: 'contain',
    marginLeft:20
  },
});

export default Header;
