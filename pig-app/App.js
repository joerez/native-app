import React from 'react';
import { StyleSheet, Text, View, Button, Image, resizeMode } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';



class HomeScreen extends React.Component {
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
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 1 }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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
    borderRadius: 8
  }
});
