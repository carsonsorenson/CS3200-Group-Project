import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import CharacterList from '../components/CharacterList'

export default class SlytherinScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
          house: "Slytherin"
        }
    }

    static navigationOptions = {
        headerLeft: null
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Image
                  source={require('../resources/s.png')}
                  style={{height: 100, width: 100, alignSelf: 'center', margin: 5}}
                />
                <Text style={styles.houseName}>{this.state.house}</Text>
              </View>
              <Text style={styles.characterLabel}>Get to know the people in your house!</Text>
              <CharacterList
                house={this.state.house}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#075319',
    },
    header: {
        backgroundColor: '#075319',
    },
    houseName: {
      fontSize: 75,
      fontWeight: 'bold',
      color: '#989898',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      alignSelf: 'center'
    },
    characterLabel: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#989898',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      alignSelf: 'center'
    },
});
