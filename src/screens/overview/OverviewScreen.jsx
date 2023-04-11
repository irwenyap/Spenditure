import React from 'react';
import {Image, Text, View} from 'react-native';

const OverviewScreen = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Summary
        </Text>
        <View
          style={{
            alignSelf: 'flex-end',
          }}>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
            }}>
            Income
          </Text>
          <Text
            style={{
              color: 'blue',
            }}>
            $2164.40
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
          }}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
            }}>
            Expense
          </Text>
          <Text
            style={{
              color: 'red',
            }}>
            $213.20
          </Text>
        </View>
      </View>
      <View style={{
        alignSelf: 'center'
      }}>
        {/* <Image /> */}
        <Text>{new Date().toDateString()}</Text>
      </View>
    </View>
  );
};

export default OverviewScreen;
