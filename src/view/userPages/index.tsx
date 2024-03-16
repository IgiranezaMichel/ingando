/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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
          <TouchableOpacity style={styles.allBtn}>
            <Text style={styles.allTxt}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.allTxt}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.ingandoHeader}>Ingando name</Text>
          </View>
          <View>
            <Text style={styles.ingandoHeader}>location</Text>
            <Text style={styles.ingandoHeader}>deadline</Text>
          </View>
        </View>
      </ScrollView>
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
    marginBottom: 3,
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
    width: Screen().width * 0.65,
  },
  allTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    fontSize: Screen().width * 0.06,
  },
  ingandoHeader: {
    color: 'black',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
  },
  subContationer: {
    width: Screen().width,
    flexDirection: 'row',
    display: 'flex',
  },
  subContationerItemView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: Screen().width,
    alignItems: 'flex-end',
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
  },
  allBtn: {
    backgroundColor: 'white',
    padding: 2,
  },
});
