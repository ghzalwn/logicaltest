import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Menu from './src/screen/Menu';
import OddNumber from './src/screen/OddNumber';
import SortChar from './src/screen/SortChar';
import MatchNumber from './src/screen/MatchNumber';
import NumberOne from './src/screen/NumberOne';

const AppNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
  },
  OddNumber: {
    screen: OddNumber,
  },
  SortChar: {
    screen: SortChar,
  },
  MatchNumber: {
    screen: MatchNumber,
  },
  NumberOne: {
    screen: NumberOne,
  },
});

export default createAppContainer(AppNavigator);
