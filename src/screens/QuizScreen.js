import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class QuizScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.question}>
                Moon or Stars?
              </Text>
              <Text style={styles.question}>
                Left or Right?
              </Text>
              <Text style={styles.question}>
                Windows or Mac?
              </Text>
              <Text style={styles.question}>
                Vim?
              </Text>
              <Text style={styles.question}>
                What animal would you bring with you to Hogwarts?
              </Text>
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
  question: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
