import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

const OverviewScreen = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 10,
          backgroundColor: '#EAE3C9',
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

      <View
        style={{
          alignSelf: 'center',
          paddingVertical: 5,
          backgroundColor: '#C8AE7E',
        }}>
        {/* <Image /> */}
        <Text>{new Date().toDateString()}</Text>
      </View>
    </View>
  );
};

export default OverviewScreen;
