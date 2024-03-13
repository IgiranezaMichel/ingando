/* eslint-disable react/react-in-jsx-scope */
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export const Login = () => {
  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/visitor/download.png')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textDescription}>
          Welcome to Adventist Youth App
        </Text>
        <TouchableWithoutFeedback onPress={() => {}}>
          <Text>Login</Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    transform: [{translateY: -(screenHeight / 2) * 0.3}],
    backgroundColor: 'white',
    marginLeft: screenWidth * 0.07,
    marginRight: screenWidth * 0.07,
    borderRadius: 10,
  },
  logoContainer: {
    backgroundColor: 'blue',
    height: screenHeight / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 60,
  },
  textDescription: {
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    fontSize: 19,
    padding: 12,
  },
});
