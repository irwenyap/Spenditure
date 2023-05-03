import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ViewTransactions} from '../../database/database';

var transactionsList = [];

const TransactionsScreen = () => {
  // transactionsEntryMap = transactionsList.map(transInfo => (
  //   <TransactionEntry
  //     key={transInfo.rowid}
  //     Account={transInfo.account}
  //     Category={transInfo.category}
  //     Amount={transInfo.amount}
  //     Tag={transInfo.tag}
  //   />
  // ));

  // return <View>{transactionsEntryMap}</View>;

  return (
    <View>
      <TransactionEntry
        key="5"
        Account="Test"
        Category="Music"
        Amount="48"
        Tag="Tag"
      />
      <TransactionEntry
        key="6"
        Account="Test"
        Category="Music"
        Amount="48"
        Tag="Tag"
      />
      <DateHeader />
      <TransactionEntry
        key="7"
        Account="Test"
        Category="Music"
        Amount="48"
        Tag="Tag"
      />
    </View>
  );
};

export const PopulateArray = () => {
  transactionsList = ViewTransactions();
};

// separate into a component
const TransactionEntry = props => {
  return (
    <Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          backgroundColor: 'grey',
          marginVertical: 2,
        }}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            {props.Category}
          </Text>
          <Text>{props.Category}</Text>
        </View>

        <View>
          <Text>{props.Tag}</Text>
          <Text>{props.Account}</Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
          }}>
          <Text>{props.Amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const DateHeader = () => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 15,
          }}>
          Wed
        </Text>
        <Text
          style={{
            fontSize: 12,
            alignSelf: 'flex-end',
          }}>
          19.06.23
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text>$148</Text>
        <Text>$90</Text>
      </View>
    </Pressable>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({});
