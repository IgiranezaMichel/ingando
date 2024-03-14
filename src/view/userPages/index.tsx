/* eslint-disable react/react-in-jsx-scope */
import {
  Image,
  ScrollView,
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
      <View style={styles.topSubContainer}>
        <Text style={styles.ingandoText}>Available Ingando</Text>
        <View style={styles.topSubContainerOption}>
          <TouchableOpacity style={styles.activeBtn}>
            <Text style={styles.ingandoOptionText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.ingandoOptionText}>History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.ingandoText}>Available Ingando</Text>
      </ScrollView>
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
    height: Screen().height / 6,
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
  ingandoText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    margin: 10,
    fontSize: Screen().width * 0.05,
  },
  ingandoOptionText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'fantasy',
    margin: 10,
    fontSize: Screen().width * 0.05,
  },
  topSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: Screen().width,
    backgroundColor: 'blue',
    marginTop: 2,
    padding: 3,
  },
  topSubContainerOption: {
    display: 'flex',
    flexDirection: 'row',
    alignContent:'flex-end',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  activeBtn: {
    backgroundColor: 'rgb(29, 110, 181)',
    display: 'flex',
    alignSelf: 'flex-end',
  },
});
