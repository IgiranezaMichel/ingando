/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {Grid} from '../../../style/Grid';
import {Card} from '../../../style/Card';
import {Padding} from '../../../style/Padding';
import {rounded} from '../../../style/Rounded';
import {Txt} from '../../../style/Text';
import {CampDetailModal} from '../../../modal/campDetail';
import {Screen} from '../../../hooks/screen';
import {Bg} from '../../../style/Bg';
import {useModalContext} from '../../../context/modalContext';

export const Home = () => {
  const {isModalVisible, setIsModalVisible} = useModalContext();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.subLogoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
        </View>
        <ScrollView>
          <View
            style={[
              Grid.colSm11_5,
              Card.card,
              Grid.mAuto,
              Padding.p1,
              rounded.rounded0,
            ]}>
            <View style={[Grid.row]}>
              <View style={[rounded.rounded0, Grid.colSm10, Padding.p0]}>
                <Text
                  style={[
                    Txt.textSuccess,
                    Txt.textDark,
                    Txt.fwBolder,
                    Padding.p6,
                  ]}>
                  Header
                </Text>
                <Text
                  style={[
                    Txt.textSuccess,
                    Txt.textDark,
                    Padding.p0,
                    Txt.textJustify,
                    Padding.p1,
                  ]}>
                  In React Native, you typically use flex for layout, and it
                  doesn't directly support units like
                </Text>
              </View>
              <View
                style={[
                  {
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    borderLeftWidth: 2,
                  },
                  Grid.mAuto,
                ]}>
                <TouchableOpacity
                  style={[Padding.p2]}
                  onPress={() => {
                    setIsModalVisible(true);
                  }}>
                  <LottieView
                    autoPlay={true}
                    loop={false}
                    style={[{width: 50, height: 50}, Grid.mAuto, Bg.bgSuccess]}
                    source={require('../../../assets/lotties/detail.json')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={[Padding.p2]}>
                  <View style={[Grid.mAuto, Bg.bgPrimary]}>
                    <LottieView
                      autoPlay={true}
                      style={[{width: 50, height: 50}]}
                      source={require('../../../assets/lotties/edit.json')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[Grid.row, Grid.spaceBtn]}>
              <View style={[Grid.row]}>
                <Text style={[Txt.fwBolder, Txt.textDark]}>Frw </Text>
                <Text style={[Txt.fwBolder, Txt.textPrimary]}>450</Text>
              </View>
              <View style={[Grid.row]}>
                <LottieView
                  autoPlay={true}
                  source={require('../../../assets/lotties/location.json')}
                  style={{width: 30, height: 30}}
                />
                <Text style={[Txt.fwBolder, Txt.textDark]}>Location</Text>
              </View>
              <View style={[Grid.row]}>
                <LottieView
                  autoPlay={true}
                  source={require('../../../assets/lotties/deadline.json')}
                  style={{width: 30, height: 30}}
                />
                <Text style={[Txt.fwBolder, Txt.textDark]}>Location</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <LottieView
          autoPlay={true}
          source={require('../../../assets/Lottie.json')}
          style={{width: 100, height: 100}}
        />
      </View>
      <CampDetailModal />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Screen.height,
    width: Screen.width,
  },
  subLogoContainer: {
    backgroundColor: 'blue',
    height:
      Screen.height > Screen.width ? Screen.height * 0.16 : Screen.width * 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  logo: {
    maxHeight:
      Screen.height > Screen.width ? Screen.height * 0.07 : Screen.width * 0.1,
    maxWidth:
      Screen.height > Screen.width ? Screen.height * 0.07 : Screen.width * 0.1,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 20,
  },
});
