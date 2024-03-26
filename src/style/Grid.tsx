import {StyleSheet} from 'react-native';

export const Grid = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  spaceBtn: {
    justifyContent: 'space-between',
  },
  colSm1: {width: ' 8.33333%'},
  colSm2: {width: '16.66667%'},
  colSm3: {width: '25%'},
  colSm4: {width: '33.33333%'},
  colSm5: {width: '41.66667%'},
  colSm6: {width: '50%'},
  colSm7: {width: '58.33333%'},
  colSm8: {width: '66.66667%'},
  colSm9: {width: '75%'},
  colSm10: {width: '83.33333%'},
  colSm11: {width: '91.66667%'},
  colSm11_5: {width: '96%'},
  colSm12: {width: '100%'},
  mAuto: {alignSelf: 'center'},
  mLeft: {alignSelf: 'flex-start'},
  mRight: {alignSelf: 'flex-end'},
});
