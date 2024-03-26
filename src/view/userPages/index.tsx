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
import {Grid} from '../../style/Grid';
import {Card} from '../../style/Card';
import {Txt} from '../../style/Text';
import {rounded} from '../../style/Rounded';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subLogoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <ScrollView>
        <View style={[Card.card, rounded.rounded0, Grid.colSm11, Grid.mAuto]}>
          <Text style={[Txt.textSuccess, Txt.textDark]}>Header</Text>
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
});
