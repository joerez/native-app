import React from 'react';
import { StyleSheet, Text, View, Button, Image, resizeMode } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Die from './Die';


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'PIG GAME',
    headerStyle: {
    backgroundColor: '#fd79a8',
  },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
  },
    headerRight: (
    <Button
      onPress={() => alert('This Will Display The Rules Soon.')}
      title="Info"
      color="#fff"
    />
  ),

};


  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        style={{
          position: 'absolute',
          height: 900,
          width: 430
      }}
        source={{ uri: 'https://i.pinimg.com/originals/d3/76/e2/d376e228569f99d937d5cb69ceaab982.jpg' }}
      />

        <Text style={styles.titleText}>PIG</Text>
        <View style={styles.playBtn}>
          <Button
            title="PLAY NOW"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
        <Text style={styles.subText}>By: Joe Rezendes</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'PIG GAME',
    headerStyle: {
    backgroundColor: '#fd79a8',
  },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30
  },
    headerRight: (
    <Button
      onPress={() => alert('This Will Display The Rules Soon.')}
      title="Info"
      color="#fff"
    />
  ),

};

constructor(props) {
  super(props);
  this.state = {
    dice: 3,
    player: 1,
  };
}

  changeDice(number){
    // console.log(number, this.state.dice)
    this.setState({dice: number})
  }

  hold(){
    this.setState({player: 0 ? 1 + 1 : 0 + 1})
  }

  render() {
    return (
      <View style={styles.DetailsScreen}>
        <View style={styles.player1}>
          <Text style={styles.playerName}>Player 1</Text>
          <View style={styles.totalScore}>
            <Text style={styles.number}>30</Text>
            <Text>Total Score</Text>
          </View>
          <View style={styles.currentScore}>
            <Text style={styles.number}>22</Text>
            <Text>Current Score</Text>

          </View>

        </View>
        <View style={styles.player2}>
          <Text style={styles.playerName}>Player 2</Text>
          <View style={styles.totalScore}>
            <Text style={styles.number}>33</Text>
            <Text>Total Score</Text>

          </View>
          <View style={styles.currentScore}>
            <Text style={styles.number}>12</Text>
            <Text>Current Score</Text>
            <Text>{this.state.player}</Text>
          </View>


        </View>


        <Die number={this.state.dice} />



        <View style={styles.roll}><Button title="Roll Dice" onPress={() => this.changeDice(Math.floor(Math.random() * 6))}></Button></View>
        <View style={styles.hold}><Button title="Hold" onPress={() => this.hold()}></Button></View>


      </View>

    );
  }
}

function random(n) {
  return Math.floor(Math.random() * n)
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundImage: 'url(https://i.pinimg.com/originals/d3/76/e2/d376e228569f99d937d5cb69ceaab982.jpg)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    top: 100,
    position: 'absolute',
    fontSize: 80,
    zIndex: 60
  },
  playBtn: {
    top: 240,
    zIndex: 60,
    position: 'absolute',
    backgroundColor: '#eee',
    height: 70,
    width: 160,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 8,
  },
  subText: {
    position: 'absolute',
    bottom: 30
  },
  DetailsScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  player1: {
    width: '50%',
    backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  player2: {
    width: '50%',
    backgroundColor: '#fab1a0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  playerName: {
    fontSize: 30
  },
  totalScore: {
    backgroundColor: '#ff9ff3',
    height: 100,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 200
  },
  currentScore: {
    backgroundColor: '#ff6b6b',
    height: 100,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 100
  },
  roll: {
    position: 'absolute',
    top: '70%',
    left: '43%',
    backgroundColor: '#eee',
    width: 70,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  hold: {
    position: 'absolute',
    top: '80%',
    left: '43%',
    backgroundColor: '#eee',
    height: 50,
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  number: {
    marginTop: 20,
    fontSize: 30,
    marginBottom: 10
  },
});
