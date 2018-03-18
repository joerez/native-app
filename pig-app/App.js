import React from 'react';
import { StyleSheet, Text, View, Button, Image, resizeMode } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';



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
      onPress={() => alert('This is a button!')}
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
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),

};



  render() {
    return (
      <View style={styles.DetailsScreen}>
        <View style={styles.player1}>
          <Text>Player 1</Text>

          <Text>Total Score</Text>

          <Text>Current Score</Text>

        </View>
        <View style={styles.player2}>
          <Text>Player 2</Text>

          <Text>Total Score</Text>

          <Text>Current Score</Text>


        </View>

      </View>

    );
  }
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
  }
});
