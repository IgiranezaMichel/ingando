/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Screen} from '../../hooks/screen';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subLogoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        {/* Enclose the text within a Text component */}
      </View>
      <LottieView autoPlay={true}
        source={require('../../assets/Lottie.json')}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Screen().height,
    width: Screen().width,
  },
  subLogoContainer: {
    backgroundColor: 'blue',
    height: Screen().width * 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Screen().width / 8,
    height: Screen().width / 8,
    borderColor: 'black',
    borderWidth: 2,
  },
});
