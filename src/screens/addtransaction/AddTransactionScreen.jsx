import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import SQLite from 'react-native-sqlite-storage'
import { CreateTransaction, ViewTransactions } from '../../database/database';

const AddTransactionScreen = () => {
  const [date, setDate] = useState(new Date());
  const [account, setAccount] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [tag, setTag] = useState('');

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Pressable style={styles.pressableButton}>
          <Text>Income</Text>
        </Pressable>
        <Pressable style={styles.pressableButton}>
          <Text>Expense</Text>
        </Pressable>
        <Pressable style={styles.pressableButton}>
          <Text>Transfer</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{}}>
          <Text style={styles.inputType}>Date: </Text>
          <Text style={styles.inputType}>To: </Text>
          <Text style={styles.inputType}>From: </Text>
          <Text style={styles.inputType}>Amount: </Text>
          <Text style={styles.inputType}>Tag: </Text>
        </View>

        <View style={{}}>
          <TextInput placeholder={new Date().toDateString()} style={styles.textInput} onChangeText={(text) => setDate(text)}/>
          <TextInput placeholder="Account" style={styles.textInput} onChangeText={(text) => setAccount(text)}/>
          <TextInput placeholder="Category" style={styles.textInput} onChangeText={(text) => setCategory(text)}/>
          <TextInput placeholder="Amount" style={styles.textInput} onChangeText={(text) => setAmount(text)}/>
          <TextInput placeholder="Tag" style={styles.textInput} onChangeText={(text) => setTag(text)}/>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Pressable style={styles.pressableButton} onPress={CreateTransaction}>
          <Text>Confirm</Text>
        </Pressable>
        <Pressable style={styles.pressableButton} onPress={ViewTransactions}>
          <Text>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({
  pressableButton: {
    backgroundColor: 'grey',
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
    borderWidth: 1,
    marginVertical: 10,
  },
});
