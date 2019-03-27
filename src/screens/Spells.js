import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    FlatList
} from 'react-native';
import {Card, CardItem, Text} from 'native-base';
import harryPotterService from '../services/harry.potter.service';

export default class SpellsScreen extends PureComponent {
    
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
            {this.renderSpells()}
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
            <Card>
                <CardItem>
                    <Text>
                        Spell: {item.getSpell()}
                    </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        Effect: {item.getEffect()}
                    </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        Type: {item.getType()}
                    </Text>
                </CardItem>
            </Card>
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
