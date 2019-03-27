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

export default class HufflepuffScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
          house: "Hufflepuff"
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
                  source={require('../resources/h.png')}
                  style={{height: 100, width: 100, alignSelf: 'center', margin: 5}}
                />
                <Text style={styles.houseName}>{this.state.house}</Text>
              </View>
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
    },
    header: {
        backgroundColor: '#F1B72A',
    },
    houseName: {
      fontSize: 75,
      fontWeight: 'bold',
      color: 'black',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
      alignSelf: 'center'
    }
});
