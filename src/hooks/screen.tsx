import {Dimensions} from 'react-native';

export const Screen = () => {
  let width = Dimensions.get('screen').height;
  let height = Dimensions.get('screen').width;
  return {width, height};
};
