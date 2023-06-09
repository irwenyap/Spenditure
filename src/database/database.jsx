import React from 'react';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'mydb',
    location: 'default',
  },
  () => {
    console.log('Database connected!');
  }, //on success
  error => console.log('Database error', error), //on error
);

export const CreateUserTable = () => {
  db.executeSql(
    'CREATE TABLE IF NOT EXISTS transactions(transtype INT, date DATE, account VARCHAR, category VARCHAR, amount INT, tag VARCHAR)',
    [],
    result => {
      console.log('Table created successfully', result);
    },
    error => {
      console.log('Create table error', error);
    },
  );
};

export const CreateTransaction = (
  type,
  date,
  account,
  category,
  amount,
  tag,
) => {
  let sql =
    'INSERT INTO transactions(transtype, date, account, category, amount, tag) VALUES (?, ?, ?, ?, ?, ?)';
  let params = [type, date, account, category, amount, tag];
  db.executeSql(
    sql,
    params,
    result => {
      Alert.alert('Success', 'User created successfully.', result);
    },
    error => {
      console.log('Create user error', error);
    },
  );
};

export const ViewTransactions = () => {
  var temp = [];
  db.transaction(tx => {
    tx.executeSql('SELECT rowid, * FROM transactions', [], (tx, results) => {
      for (let i = 0; i < results.rows.length; ++i) {
        temp.push(results.rows.item(i));
        console.log(results.rows.item(i));
      }
    });
  });
  return temp;
};

export const DeleteDatabase = () => {
  SQLite.deleteDatabase({name: 'mydb', location: 'default'});
  console.log('Database Deleted');
};
