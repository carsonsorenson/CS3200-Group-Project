import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

export default class SlytherinScreen extends Component {
    static navigationOptions = {
        headerLeft: null
    }

    render() {
        return (
            <View style={styles.container}>
              <Image
                source={require('../resources/s.jpg')}
                style={{height: 100, width: 100, backgroundColor: '#F5FCFF', alignSelf: 'center', margin: 5}}
              />
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
