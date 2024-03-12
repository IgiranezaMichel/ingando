/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const Index = () => {
  return (
    <SafeAreaView style={styles.section}>
        <StatusBar backgroundColor={'#798DD1'}/>
        <Image width={45} source={require("../assets/visitor/download.png")}/>
      <Text style={styles.section1}>Michael jackson</Text>
      <Text style={styles.section2}>Michael jackson</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  section: {
    display:'flex',
    height:screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#798DD1',
  },
  section1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  section2: {
    color: 'white',
    fontSize: 20,
    marginTop:screenHeight / 2,
  },
});
export default Index;
