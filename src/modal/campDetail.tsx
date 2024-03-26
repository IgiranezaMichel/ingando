/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {Bg} from '../style/Bg';
import {Txt} from '../style/Text';
import {Card} from '../style/Card';
import {Padding} from '../style/Padding';
import {rounded} from '../style/Rounded';
import {Grid} from '../style/Grid';
import {FontSize} from '../style/Fs';
import {Border} from '../style/Border';
import LottieView from 'lottie-react-native';

export const CampDetailModal = () => {
  return (
    <Modal visible={true} style={[Bg.bgPrimary]}>
      <TouchableOpacity
        style={[
          {
            width: 30,
            height: 30,
          },
          Bg.bgPrimary,
          rounded.roundedCircle,
          {
            alignSelf: 'flex-end',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={[FontSize.display3]}>x</Text>
      </TouchableOpacity>
      <View
        style={[
          Card.card,
          Padding.p0,
          rounded.rounded0,
          Grid.mAuto,
          Grid.colSm11_5,
        ]}>
        <View style={[Border.borderBottom, Padding.p2]}>
          <View style={[Grid.row, Grid.spaceBtn]}>
            <View>
              <View>
                <Text style={[Txt.fwBolder, Txt.textPrimary]}>Camp name</Text>
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
          Description and setting the height dynamically based on the device's
          window height, we achieve similar behavior to using
        </Text>
      </View>
    </Modal>
  );
};
