/* eslint-disable react/react-in-jsx-scope */
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
import {Screen} from '../../hooks/screen';
import {useState} from 'react';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'blue'} />
      <View style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/visitor/avatar.png')}
            />
          </View>
          <View>
            <Text style={styles.avatarLegend}>Login form</Text>
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputImageIcon}
              source={require('../../assets/visitor/icons/user.png')}
            />
            <TextInput
              style={styles.inputTxt}
              placeholderTextColor={'grey'}
              placeholder="Enter your email ..."
            />
          </View>

          <View style={styles.inputPasswordContainer}>
            <TouchableWithoutFeedback
              onPress={() => setHidePassword(!hidePassword)}>
              <Image
                style={styles.inputImageIcon}
                source={require('../../assets/visitor/icons/hide.png')}
              />
            </TouchableWithoutFeedback>
            <TextInput
              secureTextEntry={hidePassword}
              style={styles.inputTxt}
              placeholderTextColor={'grey'}
              placeholder="Enter your Password ..."
            />
          </View>

          <View>
            <Text style={styles.forgetPasswordTxt}>Forget Password?</Text>
          </View>

          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.loginBtb}>
              <Text style={styles.loginTxt}>Login</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.notMemberContainer}>
        <Text style={styles.text}>Not a member?</Text>
        <Text style={styles.signUpTxt}>Sign up</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  loginContainer: {
    backgroundColor: 'white',
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
    borderBottomEndRadius: 23,
    borderBottomStartRadius: 23,
  },
  logo: {
    height: screenHeight * 0.05,
    width: screenHeight * 0.05,
  },
  logoView: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 10,
    borderWidth: 3,
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
    borderRadius: screenWidth * 0.3,
  },
  textDescription: {
    fontFamily: 'fantasy',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19,
    padding: 12,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    width: Screen().width * 0.4,
    alignSelf: 'center',
    padding: 2,
    borderRadius: 10,
  },
  inputPasswordContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    width: Screen().width * 0.4,
    alignSelf: 'center',
    padding: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  inputImageIcon: {
    width: 40,
    height: 40,
  },
  inputTxt: {
    color: 'black',
    width: Screen().width * 0.34,
  },
  forgetPasswordTxt: {
    display: 'flex',
    alignSelf: 'flex-end',
    color: 'black',
    marginRight: Screen().width * 0.03,
    marginTop: 7,
    fontWeight: 'bold',
  },
  signUpTxt: {
    color: 'blue',
    fontWeight: 'bold',
  },
  notMemberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginRight: Screen().width * 0.02,
  },

  loginBtb: {
    borderColor: 'black',
    backgroundColor: 'green',
    width: screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: screenHeight * 0.04,
    borderWidth: 2,
  },
  loginTxt: {
    alignSelf: 'center',
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    padding: 6,
  },
  avatarLegend: {
    color: 'black',
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: (screenWidth / screenHeight) * 60,
    transform: [{translateY: -(screenHeight / 2) * 0.1}],
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
