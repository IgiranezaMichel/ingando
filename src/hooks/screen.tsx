import {Dimensions} from 'react-native';

export const Screen = () => {
  let width = Dimensions.get('screen').width;
  let height = Dimensions.get('screen').height;
  return {width, height};
};
