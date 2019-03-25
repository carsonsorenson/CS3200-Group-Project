import React from 'react';

import {
    createAppContainer,
    createStackNavigator,
    NavigationActions
} from 'react-navigation';

import QuizScreen from '../screens/QuizScreen';
import GryffindorScreen from '../screens/Gryffindor';
import HufflepuffScreen from '../screens/Hufflepuff';
import RavenclawScreen from '../screens/Ravenclaw';
import SlytherinScreen from '../screens/Slytherin';

// Main navigation class to handle all routing 
let NavigationService = class NavigationService {
    constructor() {
    }

    getTopNavigator() {
        return (
            <TopLevelNavigator
                ref={navigatorRef => {
                    this._navigator = navigatorRef;
                }}
            />
        );
    }

    // Navigate to any screen
    navigate(routeName, params) {
        this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }
}

const navigationService = new NavigationService();
export default navigationService;

const Root = createStackNavigator(
    {
        Quiz: QuizScreen,
        Gryffindor: GryffindorScreen,
        Hufflepuff: HufflepuffScreen,
        Ravenclaw: RavenclawScreen,
        Slytherin: SlytherinScreen,
    },
    {
        initialRouteName: 'Quiz'
    }
);

const TopLevelNavigator = createAppContainer(Root);
