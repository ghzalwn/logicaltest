import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = props => {
  const {navigation} = props;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View style={{marginTop: '5%', height: '10%'}}>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>
              Logical Test
            </Text>
          </View>
          <View style={{backgroundColor: '#fff', height: '90%'}}>
            <View style={styles.containerListBtn}>
              <TouchableOpacity
                style={styles.btnNavigate}
                onPress={() => navigation.navigate('OddNumber')}>
                <Text style={styles.textBtnNavigate}>Even Odd Numbers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnNavigate}
                onPress={() => navigation.navigate('SortChar')}>
                <Text style={styles.textBtnNavigate}>Sort Character</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerListBtn}>
              <TouchableOpacity
                style={styles.btnNavigate}
                onPress={() => navigation.navigate('MatchNumber')}>
                <Text style={styles.textBtnNavigate}>Match Number</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnNavigate}
                onPress={() => navigation.navigate('NumberOne')}>
                <Text style={styles.textBtnNavigate}>
                  I Am “The One” Number
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  containerListBtn: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnNavigate: {
    alignSelf: 'center',
    width: '45%',
    backgroundColor: 'blue',
    height: 80,
    justifyContent: 'center',
  },
  textBtnNavigate: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default App;
