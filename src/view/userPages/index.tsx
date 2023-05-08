/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {Screen} from '../../hooks/screen';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subLogoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        {/* Enclose the text within a Text component */}
      </View>
      <View style={styles.subContationer}>
        <Text style={styles.recentIngandoTxt}>Recent Ingando</Text>
        <View style={styles.subContationerItemView}>
          <TouchableOpacity>
            <Text style={styles.recentIngandoTxt}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentIngandoTxt}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <LottieView
        autoPlay={true}
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
    height:
      Screen().height > Screen().width
        ? Screen().height * 0.16
        : Screen().width * 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxHeight:
      Screen().height > Screen().width
        ? Screen().height * 0.07
        : Screen().width * 0.1,
    maxWidth:
      Screen().height > Screen().width
        ? Screen().height * 0.07
        : Screen().width * 0.1,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 20,
  },
  recentIngandoTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    fontSize: Screen().width * 0.06,
  },
  subContationer: {
    width: Screen().width,
    flexDirection: 'row',
    display: 'flex',
  },
  subContationerItemView: {
    flexDirection: 'row',
    alignSelf: 'baseline',
    width: Screen().width,
  },
});
