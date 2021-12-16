import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

class RenderCampsite extends Component{
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        }
    }

    //sets title for screen
    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        return <RenderCampsite campsite={this.props.campsite} />
    }
}

function CampsiteInfo(props) {
    return <RenderCampsite campsite={this.state.campsite} />;
}

export default CampsiteInfo;