/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// import headerFlat from './components/FlatSlider'
// import Header from './components/header'

const App = ()  => {
  return (
    <SafeAreaView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >
            <View style={styles.scrollView}>
              <Text>1</Text>
            </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    backgroundColor: '#F2F2F2',
  },
});

export default App;
