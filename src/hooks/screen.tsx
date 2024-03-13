import {Dimensions} from 'react-native';

export const Screen = () => {
  const width = Dimensions.get('screen').height;
  const height = Dimensions.get('screen').width;
  return {width, height};
};
