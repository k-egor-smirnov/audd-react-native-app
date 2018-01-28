import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import RecordButton from './RecordButton'
import Music from './Music'

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Привет!</Text>
        <Text>Нажми на значок, чтобы распознать, песню которая сейчас играет</Text>
        <RecordButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen