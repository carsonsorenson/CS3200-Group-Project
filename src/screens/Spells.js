import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

export default class SpellsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Image
                source={require('../resources/wand.png')}
                style={{height: 70, alignItems: 'flex-start'}}
                resizeMode="contain"
              />
              <Text>Populate spells here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
