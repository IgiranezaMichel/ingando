/* eslint-disable react/react-in-jsx-scope */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Screen} from '../../hooks/screen';

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'blue'} />
      <View style={styles.topCOntainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <View style={styles.topContainerItem}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={'grey'}
          />
          <TouchableOpacity style={styles.searchBtn}>
            <Image
              style={styles.searchImg}
              source={require('../../assets/visitor/icons/searching.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Screen().height,
  },
  topCOntainer: {
    display: 'flex',
    height: Screen().height / 7,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: Screen().height / 120,
  },
  topContainerItem: {
    display: 'flex',
    flexDirection: 'row',
    width: Screen().width * 0.9,
    marginBottom: 3,
    borderColor: 'white',
    borderWidth: 2,
  },
  searchBtn: {
    width: 13,
  },
  searchImg: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    padding: 12,
  },
  searchInput: {
    width: Screen().width / 1.33,
  },
});
