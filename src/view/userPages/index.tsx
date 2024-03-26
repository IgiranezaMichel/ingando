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
      </View>
      <View style={styles.subContationer}>
        <Text style={styles.rescentIngandoTxt}>Recent Camp</Text>
        <View style={styles.optionView}>
          <TouchableOpacity style={styles.allBtn}>
            <Text style={styles.b}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.b}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.cardView}>
          <View>
            <Text style={styles.ingandoHeader}>Ingando name</Text>
          </View>
          <View>
            <Text style={styles.ingandoHeader}>location</Text>
            <Text style={styles.ingandoHeader}>deadline</Text>
          </View>
        </View>
        <LottieView
          source={require('../../assets/lotties/empty.json')}
          style={{width: 100, height: 100}}
          autoPlay={false}
        />
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
  },
  allTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    fontSize: Screen().width * 0.06,
  },
  cardView: {
    padding: 2,
    width: Screen().width * 0.9,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 10,
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
    padding: Screen().width * 0.02,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  optionView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 2,
  },
  rescentIngandoTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: Screen().width * 0.05,
  },
  b: {
    color: 'black',
    fontSize: Screen().width * 0.05,
  },
  allBtn: {
    backgroundColor: 'white',
    elevation: 10,
    marginRight: 10,
  },
});
