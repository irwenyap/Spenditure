import React from 'react';
import { View } from 'react-native';
import { OverviewScreen } from './src/screens';
// import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
// import BottomTabs from './navigation/BottomTabs';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import BottomTabNavigator from './src/navigation/BottomTab';
import { NavigationContainer } from '@react-navigation/native';

SystemNavigationBar.stickyImmersive();

// const theme = {
//   ...DefaultTheme,
//   color: {
//     ...DefaultTheme.colors,
//     border: 'transparent',
//   },
// };

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
