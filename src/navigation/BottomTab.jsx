import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {OverviewScreen, TransactionsScreen, AccountsScreen, AddTransactionScreen} from '../screens';

import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({children, onPress}) => {
//   return (
//     <TouchableOpacity
//       style={{
//         top: -30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         //...styles.shadow,
//       }}
//       onPress={onPress}>
//       <View
//         style={{
//           width: 70,
//           height: 70,
//           borderRadius: 35,
//           backgroundColor: '#FF5B7F',
//         }}>
//         {children}
//       </View>
//     </TouchableOpacity>
//   );
// };

const StatisticsScreen = () => <View />;

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/overview.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Overview
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/overview.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Transactions
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/overview.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: '#fff'
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/overview.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Statistics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/overview.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Accounts
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabNavigator;
