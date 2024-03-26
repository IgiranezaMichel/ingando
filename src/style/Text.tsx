import {StyleSheet} from 'react-native';

export const Txt = StyleSheet.create({
  fwBolder: {fontWeight: 'bold'},
  textCenter: {textAlign: 'center'},
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
  textJustify: {textAlign: 'justify'},
  textPrimary: {color: '#007bff'},
  textDark: {color: 'black'},
  textSuccess: {color: '#28a745'},
  textDanger: {color: '#dc3545'},
  textMuted: {color: '#6c757d'},
  textShadow: {
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});
