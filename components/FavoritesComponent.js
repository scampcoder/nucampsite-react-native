import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        favorites: state.favorites
    };
}

class Favorites extends Component {
    static navigationOptions = {
        title: 'My Favorites'
    }

    render() {
        if(this.props.campsites.isLoading) {
            return <Loading />;
        }
        if(this.props.campsites.errMess) {
            return (
                <View>
                    <Text>{this.props.campsites.errMess}</Text>
                </View>
            )
        }
    }
}

export default connect(mapStateToProps)(Favorites);