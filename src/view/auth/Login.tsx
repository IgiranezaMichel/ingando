/* eslint-disable react/react-in-jsx-scope */
import { Canvas, Circle } from '@shopify/react-native-skia';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export const Login = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'blue'} />
      
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/visitor/download.png')}
        />
        <Canvas>
          <Circle cx={200} r={4}/>
        </Canvas>
      </View>
      <View style={styles.btnOptionsContainer}>
        <View>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/visitor/avatar.png')}
            />
          </View>
          <View>
            <Text style={styles.avatarLegend}>Sign up form</Text>
          </View>
          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your name ..."
          />

          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your gender ..."
          />
          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your phone number ..."
          />
          <TextInput
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your Email ..."
          />
          <TextInput
            secureTextEntry={true}
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Enter your Password ..."
          />
          <TextInput
            secureTextEntry={true}
            style={styles.firstNameInput}
            underlineColorAndroid={'blue'}
            placeholderTextColor={'grey'}
            placeholder="Re write your Password ..."
          />
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.signUpBtn}>
              <Text style={styles.signUpTxt}>Sign up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(240, 248, 255, 0.667)',
  },
  btnOptionsContainer: {
    backgroundColor: 'white',
    marginLeft: screenWidth * 0.07,
    marginRight: screenWidth * 0.07,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10,
    paddingTop: 30,
    paddingBottom: 40,
    borderRadius: 10,
  },
  logoContainer: {
    backgroundColor: 'blue',
    height: screenHeight / 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logo: {
    height: 80,
    width: 80,
  },
  avatar: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    alignSelf: 'center',
  },
  avatarContainer: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    transform: [{translateY: -(screenHeight * 0.09)}],
    alignSelf: 'center',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 50,
  },
  textDescription: {
    fontFamily: 'fantasy',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19,
    padding: 12,
  },

  signUpBtn: {
    borderColor: 'black',
    backgroundColor: 'green',
    width: screenWidth * 0.8,
    alignSelf: 'center',
    marginTop: screenHeight * 0.03,
  },
  signUpTxt: {
    alignSelf: 'center',
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    padding: 6,
  },
  firstNameInput: {
    color: 'black',
    width: screenWidth * 0.8,
    alignSelf: 'center',
  },
  avatarLegend: {
    color: 'black',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: (screenWidth / screenHeight) * 60,
    transform: [{translateY: -(screenHeight / 2) * 0.1}],
  },
});
