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

const SortChar = () => {
  const [getInput, setInput] = useState('');
  const [getGanjil, setGanjil] = useState([]);
  const [getGenap, setGenap] = useState([]);

  const submit = () => {
    const vowel = ['a', 'i', 'u', 'e', 'o'];
    let change = getInput.replace(/\s/g, '');
    let lower = change.toLowerCase();
    let toArrSort = lower.split('').sort();

    let groupVowel = toArrSort.filter(x => vowel.includes(x));
    let groupConsonant = toArrSort.filter(x => !vowel.includes(x));
    let finalResultVowel = groupVowel.toString().replace(/,/g, '');
    let finalResultConsonant = groupConsonant.toString().replace(/,/g, '');
    Alert.alert(
      'Hasil',
      `Vowel Characters : \n
      ${finalResultVowel} \n
      Consonant Charaters : \n
      ${finalResultConsonant}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View style={{marginTop: '5%', height: '10%'}}>
            <Text style={{color: '#000', fontSize: 16, textAlign: 'center'}}>
              Sort Char
            </Text>
          </View>
          <View style={{backgroundColor: '#fff', height: '90%'}}>
            <View
              style={{borderWidth: 0.5, height: 50, justifyContent: 'center'}}>
              <TextInput
                onChangeText={input => setInput(input)}
                style={{paddingLeft: '2%'}}
                placeholder={'Input'}
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

export default SortChar;
