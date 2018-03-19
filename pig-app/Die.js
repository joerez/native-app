import React, { Component } from 'react';
import { StyleSheet, View,  Image } from 'react-native';

const die1 = require('./images/dice/1.png');
const die2 = require('./images/dice/2.png');
const die3 = require('./images/dice/3.png')
const die4 = require('./images/dice/4.png')
const die5 = require('./images/dice/5.png')
const die6 = require('./images/dice/6.png')

const dice = [die1, die2, die3, die4, die5, die6];



class Die extends Component {
  render() {
    return (

      <Image
        style={styles.dice}
        source={dice[this.props.number]}
      />

    )
  }
}

const styles = StyleSheet.create({
  dice: {
    position: 'absolute',
    top: '40%',
    left: '38%',
    backgroundColor: 'white',
    height: 100,
    width: 100
  },
})

export default Die
