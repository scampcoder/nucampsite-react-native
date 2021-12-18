import React, { Component } from 'react';
import { ScrollView, Text } from "react-native";
import { Card } from 'react-native-elements';

class About extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = { 
        title: 'About Us'
    }

    render() {
        return <ScrollView></ScrollView>
    }
}

export default About;