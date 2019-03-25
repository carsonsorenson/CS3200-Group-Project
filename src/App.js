import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import navigationService from './services/NavigationService';

export default class App extends Component {
    render() {
        return navigationService.getTopNavigator();
    }
}
