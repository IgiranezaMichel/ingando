/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
// const screenWidth = Dimensions.get('screen').width;
const Index = () => {
  return (
    <SafeAreaView style={styles.section}>
        <StatusBar backgroundColor={'#87CEEB'}/>
        <Image width={50} height={78} style={styles.image} source={require('../assets/visitor/download.png')}/>
      <Text style={styles.section1}>Adventist Youth</Text>
      <Text style={styles.section2}>Tape here to continue</Text>
      <Text>V</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  section: {
    display:'flex',
    height:screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#87CEEB',
  },
  section1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor:'black',
    textShadowRadius:10,
  },
  section2: {
    color: 'white',
    fontSize: 15,
    marginTop:screenHeight / 2,
  },
  section3:{
    backgroundColor:'white',
    padding:4,
    borderRadius:10,
  },
  image:{
height:100,
width:100,
  },
});
export default Index;
