import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

import {CreateTransaction, ViewTransactions} from '../../database/database';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const AddTransactionScreen = () => {
  const [showCalender, SetShowCalender] = useState(false);
  const [showClock, SetShowClock] = useState(false);

  const [transactionType, SetTransactionType] = useState('T');
  const [date, SetDate] = useState(new Date());
  const [time, SetTime] = useState(new Date());
  const [account, SetAccount] = useState('');
  const [category, SetCategory] = useState('');
  const [amount, SetAmount] = useState(0);
  const [tag, SetTag] = useState('');

  function ChangeDate(event, value) {
    SetDate(value);
    SetShowCalender(false);
  }

  function ChangeTime(event, value) {
    SetTime(value);
    SetShowClock(false);
  }

  const CreateTrans = () => {
    CreateTransaction(1, date, account, category, amount, tag);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 15,
        }}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'black' : 'gray',
            },
            styles.pressableButton,
          ]}
          onPress={() => SetTransactionType('I')}>
          <Text>Income</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'black' : 'gray',
            },
            styles.pressableButton,
          ]}
          onPress={() => SetTransactionType('E')}>
          <Text>Expense</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'black' : 'gray',
            },
            styles.pressableButton,
          ]}
          onPress={() => SetTransactionType('T')}>
          <Text>Transfer</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <Text style={styles.inputType}>Date: </Text>
          {transactionType == 'T' && (
            <View>
              <Text style={styles.inputType}>To: </Text>
              <Text style={styles.inputType}>From: </Text>
            </View>
          )}
          {(transactionType == 'E') && (
            <View>
              <Text style={styles.inputType}>Account: </Text>
              <Text style={styles.inputType}>Category: </Text>
            </View>
          )}
          {(transactionType == 'I') && (
            <View>
              <Text style={styles.inputType}>Account: </Text>
              <Text style={styles.inputType}>Category: </Text>
            </View>
          )}
          <Text style={styles.inputType}>Amount: </Text>
          <Text style={styles.inputType}>Tag: </Text>
        </View>

        <View style={{}}>
          {showCalender && (
            <RNDateTimePicker
              mode="date"
              value={new Date()}
              onChange={ChangeDate}
            />
          )}
          {showClock && (
            <RNDateTimePicker
              mode="time"
              value={new Date()}
              onChange={ChangeTime}
            />
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              ...styles.textInput,
            }}>
            <Pressable onPress={() => SetShowCalender(true)}>
              <Text>{date.toDateString()}</Text>
            </Pressable>

            <Pressable onPress={() => SetShowClock(true)}>
              <Text>{new Date().toLocaleTimeString()}</Text>
            </Pressable>
          </View>

          <TextInput
            placeholder="Account"
            style={styles.textInput}
            onChangeText={text => SetAccount(text)}
          />
          <TextInput
            placeholder="Category"
            style={styles.textInput}
            onChangeText={text => SetCategory(text)}
          />
          <TextInput
            placeholder="Amount"
            style={styles.textInput}
            onChangeText={text => SetAmount(text)}
          />
          <TextInput
            placeholder="Tag"
            style={styles.textInput}
            onChangeText={text => SetTag(text)}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'black' : 'gray',
            },
            styles.pressableButton,
          ]}
          onPress={CreateTrans}>
          <Text>Confirm</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'black' : 'gray',
            },
            styles.pressableButton,
          ]}
          onPressOut={ViewTransactions}>
          <Text>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({
  pressableButton: {
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 5,
  },
  inputType: {
    fontSize: 15,
    marginVertical: 10,
  },
  textInput: {
    height: 20,
    width: 200,
    padding: 0,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginLeft: 5,
  },
});
