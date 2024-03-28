/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bg} from '../style/Bg';
import {Txt} from '../style/Text';
import {Card} from '../style/Card';
import {Padding} from '../style/Padding';
import {rounded} from '../style/Rounded';
import {Grid} from '../style/Grid';
import {FontSize} from '../style/Fs';
import {Border} from '../style/Border';
import LottieView from 'lottie-react-native';
import {Screen} from '../hooks/screen';
import {TimeLine} from './timeLine';
import {useModalContext} from '../context/modalContext';

export const CampDetailModal = () => {
  const {isModalVisible, setIsModalVisible} = useModalContext();
  return (
    <Modal
      animationType="slide"
      visible={isModalVisible}
      style={[Bg.bgPrimary]}>
      <StatusBar hidden />
      <ScrollView
        style={[{display: 'flex', height: Screen.height}, Bg.bgPrimary]}>
        <View
          style={[
            {
              display: 'flex',
              justifyContent: 'center',
              height: Screen.height,
              marginBottom: '25%',
            },
          ]}>
          <View
            style={[
              Card.card,
              Padding.p0,
              rounded.rounded0,
              Grid.mAuto,
              Grid.colSm11,
            ]}>
            <View style={[Border.borderBottom, Padding.p2]}>
              <View style={[Grid.row, Grid.spaceBtn]}>
                <View>
                  <View>
                    <Text style={[Txt.fwBolder, Txt.textPrimary]}>
                      Camp name
                    </Text>
                  </View>
                  <View style={[Grid.row]}>
                    <LottieView
                      autoPlay={true}
                      source={require('../assets/lotties/location.json')}
                      style={{width: 30, height: 30}}
                    />
                    <Text style={[Txt.fwBolder, Txt.textDark]}>Location</Text>
                  </View>
                </View>
                <View>
                  <Text style={[Txt.fwBolder, Txt.textPrimary]}>Deadline</Text>
                </View>
              </View>
            </View>
            <Text style={[Txt.textDark, Padding.p1]}>
              Description and setting the height dynamically based on the
              device's window height, we achieve similar behavior to using
            </Text>
            <TimeLine
              headerTxt="Week of prayer"
              headerStyle={[Txt.fwBolder, Txt.textDark]}>
              <Text style={[Txt.textPrimary]}>
                Description and setting the height dynamically based on the
                device's window height, we achieve similar behavior to using
              </Text>
            </TimeLine>
          </View>
          <View style={[Grid.row, Grid.colSm11, Grid.mAuto]}>
            <View style={[Card.card, Grid.colSm6, Grid.m0, rounded.rounded0]}>
              <Text style={[Txt.textDark]}>Total Cost</Text>
              <Text style={[FontSize.display1, Txt.textDark, Txt.fwBolder]}>
                12 frw
              </Text>
            </View>
            <View style={[Grid.colSm6]}>
              <View
                style={[Card.card, Grid.colSm12, Grid.m0, rounded.rounded0]}>
                <Text style={[Txt.textDark]}>Last</Text>
                <Text style={[FontSize.display3, Txt.textDark, Txt.fwBolder]}>
                  12 weeks
                </Text>
                <Text style={[Txt.textDark, FontSize.display5]}>
                  monday-12-2024 -thursday-12-2024
                </Text>
              </View>
              <View
                style={[Card.card, Grid.colSm12, Grid.m0, rounded.rounded0]}>
                <Text style={[Txt.textDark]}>Total Applicant</Text>
                <Text style={[FontSize.display1, Txt.textDark, Txt.fwBolder]}>
                  12
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setIsModalVisible(false);
        }}
        style={[
          {
            width: 70,
            height: 70,
            borderBottomStartRadius: 100,
          },
          Bg.bgWhite,
          {
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 1,
            borderLeftColor: 'black',
            borderLeftWidth: 5,
            borderBottomColor: 'black',
            borderBottomWidth: 5,
          },
        ]}>
        <Text
          style={[
            FontSize.display2,
            Txt.fwBolder,
            Txt.textDark,
            Padding.p5,
            {transform: [{translateX: 10}, {translateY: -10}]},
          ]}>
          x
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};
