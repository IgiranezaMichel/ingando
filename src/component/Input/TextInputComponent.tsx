/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, TextInput, View} from 'react-native';

export const TextInputComponent = (props: {iconPath: string}) => {
  return (
    <View >
      <TextInput />
      <Image source={require(props.iconPath)} />
    </View>
  );
};
const styles=StyleSheet.create(
    {
        
    }
)