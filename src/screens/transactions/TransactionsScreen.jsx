import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ViewTransactions} from '../../database/database';

var transactionsList = [];

const TransactionsScreen = () => {
  console.log(transactionsList.length);

  transactionsEntryMap = transactionsList.map(transInfo => (
    <TransactionEntry
      key={transInfo.rowid}
      Account={transInfo.account}
      Category={transInfo.category}
      Amount={transInfo.amount}
      Tag={transInfo.tag}
    />
  ));

  return <View>{transactionsEntryMap}</View>;
};

export const PopulateArray = () => {
  transactionsList = ViewTransactions();
};

// separate into a component
const TransactionEntry = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'grey',
          marginVertical: 10,
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

        <View>
          <Text>{props.Amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({});
