/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// react-native run-android

const App: () => React$Node = () => {
  return (
    
      
      <View style = {styles.container}>
        <View style = {styles.resultContainer}>
          <Text style = {styles.resultText}>0</Text>
        </View>
        
        <View style = {styles.intputContainer}>
          <Text style = {styles.resultText}>0</Text>
        </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer:{
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#1E1240',
  },
  inputContainer:{
      flex: 8,
      backgroundColor: '#3D0075',
  },
  resultText:{
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right',
  },


  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
