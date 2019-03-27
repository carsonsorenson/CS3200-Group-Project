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

import HarryPotterService from '../services/harry.potter.service';

export default class QuizScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
          q1: "Moon",
          q2: "Left",
          q3: "Windows",
          q4: "Yes",
          q5: "Owl",
          house: ""
        }
    }

    componentDidMount() {
        this._getHouse();
    }

    _getHouse() {
        HarryPotterService.getSortingHouse()
        .then(results => {
            this.setState({ house: results });
        })
        .catch(error => {
            console.log('Something went wrong!');
        })
    }

    render() {
        return (
          <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <Image
                source={require('../resources/hogwarts.png')}
                style={{height: 100, width: 100, backgroundColor: '#F5FCFF', alignSelf: 'center', marginTop: 40, marginBottom: 10}}
              />
              <View style={styles.group}>
                <Text style={styles.question}>
                  Moon or Stars?
                </Text>
                <Picker
                  selectedValue={this.state.q1}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({q1: itemValue})
                }>
                  <Picker.Item label="Moon" value="Moon" />
                  <Picker.Item label="Stars" value="Stars" />
                </Picker>
                <Text style = {styles.selectedAnswer}>Your Answer: {this.state.q1}</Text>
              </View>
              <View style={styles.group}>
                <Text style={styles.question}>
                  Left or Right?
                </Text>
                <Picker
                  selectedValue={this.state.q2}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({q2: itemValue})
                }>
                  <Picker.Item label="Left" value="Left" />
                  <Picker.Item label="Right" value="Right" />
                </Picker>
                <Text style = {styles.selectedAnswer}>Your Answer: {this.state.q2}</Text>
              </View>
              <View style={styles.group}>
                <Text style={styles.question}>
                  Windows or Mac?
                </Text>
                <Picker
                  selectedValue={this.state.q3}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({q3: itemValue})
                }>
                  <Picker.Item label="Windows" value="Windows" />
                  <Picker.Item label="Mac" value="Mac" />
                </Picker>
                <Text style = {styles.selectedAnswer}>Your Answer: {this.state.q3}</Text>
              </View>
              <View style={styles.group}>
                <Text style={styles.question}>
                  Vim?
                </Text>
                <Picker
                  selectedValue={this.state.q4}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({q4: itemValue})
                }>
                  <Picker.Item label="Yes" value="Yes" />
                  <Picker.Item label="No" value="No" />
                </Picker>
                <Text style = {styles.selectedAnswer}>Your Answer: {this.state.q4}</Text>
              </View>
              <View style={styles.group}>
                <Text style={styles.question}>
                  What animal would you bring with you to Hogwarts?
                </Text>
                <Picker
                  selectedValue={this.state.q5}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({q5: itemValue})
                }>
                  <Picker.Item label="Owl" value="Owl" />
                  <Picker.Item label="Cat" value="Cat" />
                  <Picker.Item label="Toad" value="Toad" />
                </Picker>
                <Text style = {styles.selectedAnswer}>Your Answer: {this.state.q5}</Text>
              </View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => { this.props.navigation.replace(this.state.house) }}
							>
								<Text style={{alignSelf: 'center', fontSize: 50, margin: 10}}>Submit!</Text>
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
    backgroundColor: '#F8F8F8',
  },
  group: {
    borderWidth: 2,
    borderColor: '#F0F0F0',
    backgroundColor: '#F0F0F0',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    margin: 10,
  },
  question: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  selectedAnswer: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 50,
    alignSelf: 'center',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  }
});
