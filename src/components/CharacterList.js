import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Content, Card, CardItem, Text, Right} from 'native-base';
import harryPotterService from '../services/harry.potter.service';

export default class CharacterList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        harryPotterService.getCharacters(this.props.house)
        .then(data => {
            this.setState({
                data
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    renderObj = ({ item, index }) => {
        return (
            <Card>
                <CardItem>
                    <Text>
                        Name: {item.getName()}
                    </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        Blood Status: {item.getBloodStatus()}
                    </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        Species: {item.getSpecies()}
                    </Text>
                </CardItem>
            </Card>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={this.renderObj}
            />
        )
    }
}