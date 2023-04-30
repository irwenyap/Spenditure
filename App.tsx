import React, {useEffect} from 'react';
import {View} from 'react-native';
import {OverviewScreen} from './src/screens';
// import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
// import BottomTabs from './navigation/BottomTabs';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import BottomTabNavigator from './src/navigation/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {CreateUserTable} from './src/database/database';
import {PopulateArray} from './src/screens/transactions/TransactionsScreen';

SystemNavigationBar.stickyImmersive();

const App = () => {
  useEffect(() => {
    CreateUserTable();
    PopulateArray();
  });

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
