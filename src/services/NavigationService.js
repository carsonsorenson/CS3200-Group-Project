import React from 'react';

import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
    NavigationActions
} from 'react-navigation';

import QuizScreen from '../screens/QuizScreen';
import GryffindorScreen from '../screens/Gryffindor';
import HufflepuffScreen from '../screens/Hufflepuff';
import RavenclawScreen from '../screens/Ravenclaw';
import SlytherinScreen from '../screens/Slytherin';
import SpellsScreen from '../screens/Spells';

// Main navigation class to handle all routing 
let NavigationService = class NavigationService {
    constructor() {
      console.log(this);
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

const GryffindorNav = createBottomTabNavigator(
    {
        Gryffindor: GryffindorScreen,
        Spells: SpellsScreen,
    }
)

const RavenclawNav = createBottomTabNavigator(
    {
        Ravenclaw: RavenclawScreen,
        Spells: SpellsScreen,
    }
)

const HufflepuffNav = createBottomTabNavigator(
    {
        Hufflepuff: HufflepuffScreen,
        Spells: SpellsScreen,
    }
)

const SlytherinNav = createBottomTabNavigator(
    {
        Slytherin: SlytherinScreen,
        Spells: SpellsScreen,
    }
)

const Root = createStackNavigator(
    {
        Quiz: QuizScreen,
        Gryffindor: GryffindorNav,
        Ravenclaw: RavenclawNav,
        Hufflepuff: HufflepuffNav,
        Slytherin: SlytherinNav,
    },
    {
        initialRouteName: 'Quiz'
    }
);

const TopLevelNavigator = createAppContainer(Root);
