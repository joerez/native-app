import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Nativer</Text>

        <View style={styles.bigBox}>

          <View style={styles.box}>
            <Text style={styles.text}>Box number 1</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Box number 2 </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Box number 3 </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Box number 4 </Text>
          </View>


        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#e67e22',
    borderRadius: 4,
    alignItems: 'center',
    margin: 5,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 10
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 70,
    paddingBottom: 70,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 2,
  },
  bigBox: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: 150,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
});
