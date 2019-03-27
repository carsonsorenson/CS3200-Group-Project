import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    FlatList
} from 'react-native';
import HarryPotterService from '../services/harry.potter.service'
import harryPotterService from '../services/harry.potter.service';

export default class SpellsScreen extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }
    componentWillMount() {
        console.log('Two: componentWillMount');
        this._getSpells();
    }
    _getSpells() {
        harryPotterService.getSpells()
        .then(results => {
            this.setState({ data: results });
        })
        .catch(error => {
            console.log('Something went wrong!');
            console.log(error);
        })
    }
    render() {
        return (
            <View style={styles.container}>
              <Image
                source={require('../resources/wand.png')}
                style={{height: 70, alignItems: 'flex-start'}}
                resizeMode="contain"
              />
                <View>
                    {this.renderSpells()}
                </View>
            </View>
        );
    }
    renderSpells() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={this._renderItem}
                ListEmptyComponent={this._renderEmptyList}
            />
        );
    }

    _renderItem = ({ item }) => {
        return (
            <Text>
            {item.getSpell()}
            </Text>
        );
    }

    _renderEmptyList = () => {
        return (
            <Text>...Just a few more seconds</Text>
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
