/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TextInput} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';

const OddNumber = () => {
  const [getInput, setInput] = useState('0');
  const [getGanjil, setGanjil] = useState([]);
  const [getGenap, setGenap] = useState([]);

  const submit = () => {
    let arrGanjil = [];
    let arrGenap = [];
    if (Number.isInteger(parseInt(getInput))) {
      for (let i = 1; i <= getInput; i++) {
        if (i % 2 === 0) {
          arrGenap.push(i);
        }
      }
      setGenap(arrGenap);

      for (let i = 1; i <= getInput; i++) {
        if (i % 2 !== 0) {
          arrGanjil.push(i);
        }
      }
      setGanjil(arrGanjil);

      Alert.alert(
        'Hasil',
        `${getGanjil
          .toString()
          .replace(/,/g, '')} \n ${getGenap.toString().replace(/,/g, '')}`,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View style={{marginTop: '5%', height: '10%'}}>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>
              Odd Number
            </Text>
          </View>
          <View style={{backgroundColor: '#fff', height: '90%'}}>
            <View
              style={{borderWidth: 0.5, height: 50, justifyContent: 'center'}}>
              <TextInput
                onChangeText={input => setInput(input)}
                style={{paddingLeft: '2%'}}
                placeholder={'Input'}
                keyboardType={'numeric'}
                value={getInput}
              />
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  justifyContent: 'center',
                  height: 50,
                }}
                onPress={() => submit()}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Submit
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

export default OddNumber;
