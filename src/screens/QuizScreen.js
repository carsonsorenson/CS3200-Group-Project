import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Picker,
  ScrollView,
  View
} from 'react-native';

export default class QuizScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
          q1: "",
        }
    }

    render() {
        return (
          <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <Image
                source={require('../resources/hogwarts.jpg')}
                style={{height: 100, width: 100, backgroundColor: '#F5FCFF', alignSelf: 'center', margin: 5}}
              />
              <Text style={styles.question}>
                Moon or Stars?
              </Text>
              <Picker
                selectedValue={this.state.q1}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({q1: itemValue})
              }>
                <Picker.Item label="Moon" value="moon" />
                <Picker.Item label="Stars" value="stars" />
              </Picker>
              <Text style={styles.question}>
                Left or Right?
              </Text>
              <Picker
                selectedValue={this.state.q1}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({q1: itemValue})
              }>
                <Picker.Item label="Left" value="left" />
                <Picker.Item label="Right" value="right" />
              </Picker>
              <Text style={styles.question}>
                Windows or Mac?
              </Text>
              <Picker
                selectedValue={this.state.q1}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({q1: itemValue})
              }>
                <Picker.Item label="Windows" value="windows" />
                <Picker.Item label="Mac" value="mac" />
              </Picker>
              <Text style={styles.question}>
                Vim?
              </Text>
              <Picker
                selectedValue={this.state.q1}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({q1: itemValue})
              }>
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
              <Text style={styles.question}>
                What animal would you bring with you to Hogwarts?
              </Text>
              <Picker
                selectedValue={this.state.q1}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({q1: itemValue})
              }>
                <Picker.Item label="Owl" value="owl" />
                <Picker.Item label="Cat" value="cat" />
                <Picker.Item label="Toad" value="toad" />
              </Picker>
              <TouchableOpacity
                onPress={() => { console.log(this.props); this.props.navigation.navigate('Gryffindor') }}
							>
								<Text>Submit!</Text>
							</TouchableOpacity>
            </ScrollView>
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
    height: 200
  },
});
