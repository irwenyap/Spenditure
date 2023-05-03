import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AccountsScreen = () => {
  return (
    <View>
      <View
        style={{
          paddingVertical: 10,
          paddingLeft: 10,
        }}>
        <Text>Accounts</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            alignContent: 'center',
          }}>
          <Text>Assets</Text>
          <Text>5,512.35</Text>
        </View>

        <View>
          <Text>Liabilities</Text>
          <Text>5,512.35</Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
          }}>
          <Text>Net</Text>
          <Text>5,512.35</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({});
