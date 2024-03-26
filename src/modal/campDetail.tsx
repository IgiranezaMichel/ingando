/* eslint-disable react/react-in-jsx-scope */
import {Modal, Text, View} from 'react-native';
import {Bg} from '../style/Bg';
import {Txt} from '../style/Text';

export const CampDetailModal = () => {
  return (
    <Modal visible={true} style={[Bg.bgPrimary]}>
      <View>
        <Text style={[Txt.fwBolder, Txt.textPrimary, Txt.textCenter]}>
          Shown modal
        </Text>
      </View>
    </Modal>
  );
};
